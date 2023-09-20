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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetBatchPredictionJobsRequest, GetBatchPredictionJobsResult } from "../models/models_0";
import { de_GetBatchPredictionJobsCommand, se_GetBatchPredictionJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBatchPredictionJobsCommand}.
 */
export interface GetBatchPredictionJobsCommandInput extends GetBatchPredictionJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchPredictionJobsCommand}.
 */
export interface GetBatchPredictionJobsCommandOutput extends GetBatchPredictionJobsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetBatchPredictionJobsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetBatchPredictionJobsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // GetBatchPredictionJobsRequest
 *   jobId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetBatchPredictionJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchPredictionJobsResult
 * //   batchPredictions: [ // BatchPredictionList
 * //     { // BatchPrediction
 * //       jobId: "STRING_VALUE",
 * //       status: "IN_PROGRESS_INITIALIZING" || "IN_PROGRESS" || "CANCEL_IN_PROGRESS" || "CANCELED" || "COMPLETE" || "FAILED",
 * //       failureReason: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       completionTime: "STRING_VALUE",
 * //       lastHeartbeatTime: "STRING_VALUE",
 * //       inputPath: "STRING_VALUE",
 * //       outputPath: "STRING_VALUE",
 * //       eventTypeName: "STRING_VALUE",
 * //       detectorName: "STRING_VALUE",
 * //       detectorVersion: "STRING_VALUE",
 * //       iamRoleArn: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       processedRecordsCount: Number("int"),
 * //       totalRecordsCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBatchPredictionJobsCommandInput - {@link GetBatchPredictionJobsCommandInput}
 * @returns {@link GetBatchPredictionJobsCommandOutput}
 * @see {@link GetBatchPredictionJobsCommandInput} for command's `input` shape.
 * @see {@link GetBatchPredictionJobsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 */
export class GetBatchPredictionJobsCommand extends $Command<
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput,
  FraudDetectorClientResolvedConfig
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
  constructor(readonly input: GetBatchPredictionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBatchPredictionJobsCommandInput, GetBatchPredictionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBatchPredictionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetBatchPredictionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "GetBatchPredictionJobs",
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
  private serialize(input: GetBatchPredictionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBatchPredictionJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBatchPredictionJobsCommandOutput> {
    return de_GetBatchPredictionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
