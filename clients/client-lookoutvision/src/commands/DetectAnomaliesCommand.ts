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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import {
  DetectAnomaliesRequest,
  DetectAnomaliesRequestFilterSensitiveLog,
  DetectAnomaliesResponse,
  DetectAnomaliesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DetectAnomaliesCommand,
  serializeAws_restJson1DetectAnomaliesCommand,
} from "../protocols/Aws_restJson1";

type DetectAnomaliesCommandInputType = Omit<DetectAnomaliesRequest, "Body"> & {
  /**
   * For *`DetectAnomaliesRequest["Body"]`*, see {@link DetectAnomaliesRequest.Body}.
   */
  Body: DetectAnomaliesRequest["Body"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `DetectAnomaliesRequest` interface. There are more parameters than `Body` defined in {@link DetectAnomaliesRequest}
 */
export interface DetectAnomaliesCommandInput extends DetectAnomaliesCommandInputType {}
export interface DetectAnomaliesCommandOutput extends DetectAnomaliesResponse, __MetadataBearer {}

/**
 * <p>Detects anomalies in an image that you supply. </p>
 *          <p>The response from <code>DetectAnomalies</code> includes a boolean prediction
 *          that the image contains one or more anomalies and a confidence value for the prediction.
 *       If the model is an image segmentation model, the response also includes segmentation
 *       information for each type of anomaly found in the image.</p>
 *          <note>
 *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
 *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
 *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
 *          </note>
 *
 *          <p>For more information, see <i>Detecting anomalies in an image</i> in the Amazon Lookout for Vision developer guide.</p>
 *
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DetectAnomalies</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DetectAnomaliesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DetectAnomaliesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DetectAnomaliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectAnomaliesCommandInput} for command's `input` shape.
 * @see {@link DetectAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class DetectAnomaliesCommand extends $Command<
  DetectAnomaliesCommandInput,
  DetectAnomaliesCommandOutput,
  LookoutVisionClientResolvedConfig
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

  constructor(readonly input: DetectAnomaliesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectAnomaliesCommandInput, DetectAnomaliesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectAnomaliesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "DetectAnomaliesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectAnomaliesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectAnomaliesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectAnomaliesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DetectAnomaliesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectAnomaliesCommandOutput> {
    return deserializeAws_restJson1DetectAnomaliesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
