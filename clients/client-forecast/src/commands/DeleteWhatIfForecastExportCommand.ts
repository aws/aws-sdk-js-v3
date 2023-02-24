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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  DeleteWhatIfForecastExportRequest,
  DeleteWhatIfForecastExportRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteWhatIfForecastExportCommand,
  serializeAws_json1_1DeleteWhatIfForecastExportCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteWhatIfForecastExportCommandInput extends DeleteWhatIfForecastExportRequest {}
export interface DeleteWhatIfForecastExportCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a>
 *       operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfForecastExportCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class DeleteWhatIfForecastExportCommand extends $Command<
  DeleteWhatIfForecastExportCommandInput,
  DeleteWhatIfForecastExportCommandOutput,
  ForecastClientResolvedConfig
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

  constructor(readonly input: DeleteWhatIfForecastExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWhatIfForecastExportCommandInput, DeleteWhatIfForecastExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteWhatIfForecastExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteWhatIfForecastExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWhatIfForecastExportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWhatIfForecastExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWhatIfForecastExportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteWhatIfForecastExportCommandOutput> {
    return deserializeAws_json1_1DeleteWhatIfForecastExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
