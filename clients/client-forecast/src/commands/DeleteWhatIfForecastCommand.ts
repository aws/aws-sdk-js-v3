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
import { DeleteWhatIfForecastRequest, DeleteWhatIfForecastRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteWhatIfForecastCommand,
  serializeAws_json1_1DeleteWhatIfForecastCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteWhatIfForecastCommandInput extends DeleteWhatIfForecastRequest {}
export interface DeleteWhatIfForecastCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a>
 *       operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p>
 *          <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class DeleteWhatIfForecastCommand extends $Command<
  DeleteWhatIfForecastCommandInput,
  DeleteWhatIfForecastCommandOutput,
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

  constructor(readonly input: DeleteWhatIfForecastCommandInput) {
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
  ): Handler<DeleteWhatIfForecastCommandInput, DeleteWhatIfForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteWhatIfForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteWhatIfForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWhatIfForecastRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWhatIfForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWhatIfForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWhatIfForecastCommandOutput> {
    return deserializeAws_json1_1DeleteWhatIfForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
