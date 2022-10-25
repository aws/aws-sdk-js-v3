// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  ListIdentityProviderConfigsRequest,
  ListIdentityProviderConfigsRequestFilterSensitiveLog,
  ListIdentityProviderConfigsResponse,
  ListIdentityProviderConfigsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListIdentityProviderConfigsCommand,
  serializeAws_restJson1ListIdentityProviderConfigsCommand,
} from "../protocols/Aws_restJson1";

export interface ListIdentityProviderConfigsCommandInput extends ListIdentityProviderConfigsRequest {}
export interface ListIdentityProviderConfigsCommandOutput
  extends ListIdentityProviderConfigsResponse,
    __MetadataBearer {}

/**
 * <p>A list of identity provider configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListIdentityProviderConfigsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListIdentityProviderConfigsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListIdentityProviderConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityProviderConfigsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityProviderConfigsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class ListIdentityProviderConfigsCommand extends $Command<
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListIdentityProviderConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIdentityProviderConfigsCommandInput, ListIdentityProviderConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIdentityProviderConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListIdentityProviderConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIdentityProviderConfigsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListIdentityProviderConfigsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIdentityProviderConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIdentityProviderConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIdentityProviderConfigsCommandOutput> {
    return deserializeAws_restJson1ListIdentityProviderConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
