import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEBSVolumeRecommendationsRequest, GetEBSVolumeRecommendationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0GetEBSVolumeRecommendationsCommand,
  serializeAws_json1_0GetEBSVolumeRecommendationsCommand,
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

export interface GetEBSVolumeRecommendationsCommandInput extends GetEBSVolumeRecommendationsRequest {}
export interface GetEBSVolumeRecommendationsCommandOutput
  extends GetEBSVolumeRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p>
 *
 *         <p>Compute Optimizer generates recommendations for Amazon EBS volumes that
 *             meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
 *                 resources and requirements</a> in the <i>Compute Optimizer User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEBSVolumeRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEBSVolumeRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEBSVolumeRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEBSVolumeRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetEBSVolumeRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEBSVolumeRecommendationsCommand extends $Command<
  GetEBSVolumeRecommendationsCommandInput,
  GetEBSVolumeRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEBSVolumeRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEBSVolumeRecommendationsCommandInput, GetEBSVolumeRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEBSVolumeRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEBSVolumeRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEBSVolumeRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEBSVolumeRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEBSVolumeRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEBSVolumeRecommendationsCommandOutput> {
    return deserializeAws_json1_0GetEBSVolumeRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
