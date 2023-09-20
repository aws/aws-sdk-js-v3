// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListFlywheelIterationHistoryRequest, ListFlywheelIterationHistoryResponse } from "../models/models_0";
import {
  de_ListFlywheelIterationHistoryCommand,
  se_ListFlywheelIterationHistoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFlywheelIterationHistoryCommand}.
 */
export interface ListFlywheelIterationHistoryCommandInput extends ListFlywheelIterationHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListFlywheelIterationHistoryCommand}.
 */
export interface ListFlywheelIterationHistoryCommandOutput
  extends ListFlywheelIterationHistoryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Information about the history of a flywheel iteration.
 *       For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListFlywheelIterationHistoryCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListFlywheelIterationHistoryCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // ListFlywheelIterationHistoryRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   Filter: { // FlywheelIterationFilter
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlywheelIterationHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListFlywheelIterationHistoryResponse
 * //   FlywheelIterationPropertiesList: [ // FlywheelIterationPropertiesList
 * //     { // FlywheelIterationProperties
 * //       FlywheelArn: "STRING_VALUE",
 * //       FlywheelIterationId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Status: "TRAINING" || "EVALUATING" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       Message: "STRING_VALUE",
 * //       EvaluatedModelArn: "STRING_VALUE",
 * //       EvaluatedModelMetrics: { // FlywheelModelEvaluationMetrics
 * //         AverageF1Score: Number("double"),
 * //         AveragePrecision: Number("double"),
 * //         AverageRecall: Number("double"),
 * //         AverageAccuracy: Number("double"),
 * //       },
 * //       TrainedModelArn: "STRING_VALUE",
 * //       TrainedModelMetrics: {
 * //         AverageF1Score: Number("double"),
 * //         AveragePrecision: Number("double"),
 * //         AverageRecall: Number("double"),
 * //         AverageAccuracy: Number("double"),
 * //       },
 * //       EvaluationManifestS3Prefix: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlywheelIterationHistoryCommandInput - {@link ListFlywheelIterationHistoryCommandInput}
 * @returns {@link ListFlywheelIterationHistoryCommandOutput}
 * @see {@link ListFlywheelIterationHistoryCommandInput} for command's `input` shape.
 * @see {@link ListFlywheelIterationHistoryCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class ListFlywheelIterationHistoryCommand extends $Command<
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
  ComprehendClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ListFlywheelIterationHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFlywheelIterationHistoryCommandInput, ListFlywheelIterationHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFlywheelIterationHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListFlywheelIterationHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "ListFlywheelIterationHistory",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListFlywheelIterationHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFlywheelIterationHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFlywheelIterationHistoryCommandOutput> {
    return de_ListFlywheelIterationHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
