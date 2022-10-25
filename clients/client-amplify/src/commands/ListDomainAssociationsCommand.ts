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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import {
  ListDomainAssociationsRequest,
  ListDomainAssociationsRequestFilterSensitiveLog,
  ListDomainAssociationsResult,
  ListDomainAssociationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDomainAssociationsCommand,
  serializeAws_restJson1ListDomainAssociationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListDomainAssociationsCommandInput extends ListDomainAssociationsRequest {}
export interface ListDomainAssociationsCommandOutput extends ListDomainAssociationsResult, __MetadataBearer {}

/**
 * <p> Returns the domain associations for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListDomainAssociationsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListDomainAssociationsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new ListDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 */
export class ListDomainAssociationsCommand extends $Command<
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
  AmplifyClientResolvedConfig
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

  constructor(readonly input: ListDomainAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainAssociationsCommandInput, ListDomainAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDomainAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListDomainAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDomainAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDomainAssociationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDomainAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainAssociationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainAssociationsCommandOutput> {
    return deserializeAws_restJson1ListDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
