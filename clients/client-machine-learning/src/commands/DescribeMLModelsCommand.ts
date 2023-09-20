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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeMLModelsInput, DescribeMLModelsOutput } from "../models/models_0";
import { de_DescribeMLModelsCommand, se_DescribeMLModelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMLModelsCommand}.
 */
export interface DescribeMLModelsCommandInput extends DescribeMLModelsInput {}
/**
 * @public
 *
 * The output of {@link DescribeMLModelsCommand}.
 */
export interface DescribeMLModelsCommandOutput extends DescribeMLModelsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeMLModelsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeMLModelsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeMLModelsInput
 *   FilterVariable: "CreatedAt" || "LastUpdatedAt" || "Status" || "Name" || "IAMUser" || "TrainingDataSourceId" || "RealtimeEndpointStatus" || "MLModelType" || "Algorithm" || "TrainingDataURI",
 *   EQ: "STRING_VALUE",
 *   GT: "STRING_VALUE",
 *   LT: "STRING_VALUE",
 *   GE: "STRING_VALUE",
 *   LE: "STRING_VALUE",
 *   NE: "STRING_VALUE",
 *   Prefix: "STRING_VALUE",
 *   SortOrder: "asc" || "dsc",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeMLModelsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMLModelsOutput
 * //   Results: [ // MLModels
 * //     { // MLModel
 * //       MLModelId: "STRING_VALUE",
 * //       TrainingDataSourceId: "STRING_VALUE",
 * //       CreatedByIamUser: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //       SizeInBytes: Number("long"),
 * //       EndpointInfo: { // RealtimeEndpointInfo
 * //         PeakRequestsPerSecond: Number("int"),
 * //         CreatedAt: new Date("TIMESTAMP"),
 * //         EndpointUrl: "STRING_VALUE",
 * //         EndpointStatus: "NONE" || "READY" || "UPDATING" || "FAILED",
 * //       },
 * //       TrainingParameters: { // TrainingParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       InputDataLocationS3: "STRING_VALUE",
 * //       Algorithm: "sgd",
 * //       MLModelType: "REGRESSION" || "BINARY" || "MULTICLASS",
 * //       ScoreThreshold: Number("float"),
 * //       ScoreThresholdLastUpdatedAt: new Date("TIMESTAMP"),
 * //       Message: "STRING_VALUE",
 * //       ComputeTime: Number("long"),
 * //       FinishedAt: new Date("TIMESTAMP"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMLModelsCommandInput - {@link DescribeMLModelsCommandInput}
 * @returns {@link DescribeMLModelsCommandOutput}
 * @see {@link DescribeMLModelsCommandInput} for command's `input` shape.
 * @see {@link DescribeMLModelsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 */
export class DescribeMLModelsCommand extends $Command<
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput,
  MachineLearningClientResolvedConfig
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
  constructor(readonly input: DescribeMLModelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMLModelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DescribeMLModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonML_20141212",
        operation: "DescribeMLModels",
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
  private serialize(input: DescribeMLModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMLModelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMLModelsCommandOutput> {
    return de_DescribeMLModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
