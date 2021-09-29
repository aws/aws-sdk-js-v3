import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListEnvironmentAccountConnectionsInput, ListEnvironmentAccountConnectionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListEnvironmentAccountConnectionsCommand,
  serializeAws_json1_0ListEnvironmentAccountConnectionsCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListEnvironmentAccountConnectionsCommandInput extends ListEnvironmentAccountConnectionsInput {}
export interface ListEnvironmentAccountConnectionsCommandOutput
  extends ListEnvironmentAccountConnectionsOutput,
    __MetadataBearer {}

/**
 * <p>View a list of environment account connections.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account
 *                 connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentAccountConnectionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentAccountConnectionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new ListEnvironmentAccountConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentAccountConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentAccountConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEnvironmentAccountConnectionsCommand extends $Command<
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEnvironmentAccountConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentAccountConnectionsCommandInput, ListEnvironmentAccountConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListEnvironmentAccountConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnvironmentAccountConnectionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListEnvironmentAccountConnectionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListEnvironmentAccountConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ListEnvironmentAccountConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnvironmentAccountConnectionsCommandOutput> {
    return deserializeAws_json1_0ListEnvironmentAccountConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
