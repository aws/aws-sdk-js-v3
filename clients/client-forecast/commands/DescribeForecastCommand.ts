import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeForecastRequest, DescribeForecastResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeForecastCommand,
  serializeAws_json1_1DescribeForecastCommand,
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

export type DescribeForecastCommandInput = DescribeForecastRequest;
export type DescribeForecastCommandOutput = DescribeForecastResponse & __MetadataBearer;

/**
 * <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateForecast</code> request,
 *       this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetGroupArn</code> - The dataset group that provided the training
 *           data.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 */
export class DescribeForecastCommand extends $Command<
  DescribeForecastCommandInput,
  DescribeForecastCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeForecastCommandInput) {
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
  ): Handler<DescribeForecastCommandInput, DescribeForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeForecastRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeForecastResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeForecastCommandOutput> {
    return deserializeAws_json1_1DescribeForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
