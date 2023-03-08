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

import {
  ListSecurityControlDefinitionsRequest,
  ListSecurityControlDefinitionsRequestFilterSensitiveLog,
  ListSecurityControlDefinitionsResponse,
  ListSecurityControlDefinitionsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1ListSecurityControlDefinitionsCommand,
  serializeAws_restJson1ListSecurityControlDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * The input for {@link ListSecurityControlDefinitionsCommand}.
 */
export interface ListSecurityControlDefinitionsCommandInput extends ListSecurityControlDefinitionsRequest {}
/**
 * The output of {@link ListSecurityControlDefinitionsCommand}.
 */
export interface ListSecurityControlDefinitionsCommandOutput
  extends ListSecurityControlDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Lists all of the security controls that apply to a specified standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListSecurityControlDefinitionsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListSecurityControlDefinitionsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListSecurityControlDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityControlDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityControlDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class ListSecurityControlDefinitionsCommand extends $Command<
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: ListSecurityControlDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityControlDefinitionsCommandInput, ListSecurityControlDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSecurityControlDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListSecurityControlDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityControlDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityControlDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSecurityControlDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSecurityControlDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecurityControlDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListSecurityControlDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
