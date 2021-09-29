import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { StartDataSourceSyncJobRequest, StartDataSourceSyncJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartDataSourceSyncJobCommand,
  serializeAws_json1_1StartDataSourceSyncJobCommand,
} from "../protocols/Aws_json1_1";
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

export interface StartDataSourceSyncJobCommandInput extends StartDataSourceSyncJobRequest {}
export interface StartDataSourceSyncJobCommandOutput extends StartDataSourceSyncJobResponse, __MetadataBearer {}

/**
 * <p>Starts a synchronization job for a data source. If a synchronization
 *       job is already in progress, Amazon Kendra returns a
 *         <code>ResourceInUseException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StartDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StartDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new StartDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartDataSourceSyncJobCommand extends $Command<
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDataSourceSyncJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDataSourceSyncJobCommandInput, StartDataSourceSyncJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "StartDataSourceSyncJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDataSourceSyncJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDataSourceSyncJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDataSourceSyncJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDataSourceSyncJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDataSourceSyncJobCommandOutput> {
    return deserializeAws_json1_1StartDataSourceSyncJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
