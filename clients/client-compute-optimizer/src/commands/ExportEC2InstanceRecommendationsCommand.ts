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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import {
  ExportEC2InstanceRecommendationsRequest,
  ExportEC2InstanceRecommendationsRequestFilterSensitiveLog,
  ExportEC2InstanceRecommendationsResponse,
  ExportEC2InstanceRecommendationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand,
  serializeAws_json1_0ExportEC2InstanceRecommendationsCommand,
} from "../protocols/Aws_json1_0";

export interface ExportEC2InstanceRecommendationsCommandInput extends ExportEC2InstanceRecommendationsRequest {}
export interface ExportEC2InstanceRecommendationsCommandOutput
  extends ExportEC2InstanceRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Exports optimization recommendations for Amazon EC2 instances.</p>
 *          <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *             Guide</i>.</p>
 *          <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportEC2InstanceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportEC2InstanceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportEC2InstanceRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportEC2InstanceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportEC2InstanceRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 */
export class ExportEC2InstanceRecommendationsCommand extends $Command<
  ExportEC2InstanceRecommendationsCommandInput,
  ExportEC2InstanceRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
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

  constructor(readonly input: ExportEC2InstanceRecommendationsCommandInput) {
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
  ): Handler<ExportEC2InstanceRecommendationsCommandInput, ExportEC2InstanceRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportEC2InstanceRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "ExportEC2InstanceRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportEC2InstanceRecommendationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportEC2InstanceRecommendationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExportEC2InstanceRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ExportEC2InstanceRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportEC2InstanceRecommendationsCommandOutput> {
    return deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
