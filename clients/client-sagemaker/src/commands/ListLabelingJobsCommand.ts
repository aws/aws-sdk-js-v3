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

import { ListLabelingJobsRequest, ListLabelingJobsResponse } from "../models/models_3";
import { de_ListLabelingJobsCommand, se_ListLabelingJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLabelingJobsCommand}.
 */
export interface ListLabelingJobsCommandInput extends ListLabelingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListLabelingJobsCommand}.
 */
export interface ListLabelingJobsCommandOutput extends ListLabelingJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of labeling jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListLabelingJobsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   StatusEquals: "Initializing" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * };
 * const command = new ListLabelingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListLabelingJobsResponse
 * //   LabelingJobSummaryList: [ // LabelingJobSummaryList
 * //     { // LabelingJobSummary
 * //       LabelingJobName: "STRING_VALUE", // required
 * //       LabelingJobArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LabelingJobStatus: "Initializing" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       LabelCounters: { // LabelCounters
 * //         TotalLabeled: Number("int"),
 * //         HumanLabeled: Number("int"),
 * //         MachineLabeled: Number("int"),
 * //         FailedNonRetryableError: Number("int"),
 * //         Unlabeled: Number("int"),
 * //       },
 * //       WorkteamArn: "STRING_VALUE", // required
 * //       PreHumanTaskLambdaArn: "STRING_VALUE", // required
 * //       AnnotationConsolidationLambdaArn: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       LabelingJobOutput: { // LabelingJobOutput
 * //         OutputDatasetS3Uri: "STRING_VALUE", // required
 * //         FinalActiveLearningModelArn: "STRING_VALUE",
 * //       },
 * //       InputConfig: { // LabelingJobInputConfig
 * //         DataSource: { // LabelingJobDataSource
 * //           S3DataSource: { // LabelingJobS3DataSource
 * //             ManifestS3Uri: "STRING_VALUE", // required
 * //           },
 * //           SnsDataSource: { // LabelingJobSnsDataSource
 * //             SnsTopicArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         DataAttributes: { // LabelingJobDataAttributes
 * //           ContentClassifiers: [ // ContentClassifiers
 * //             "FreeOfPersonallyIdentifiableInformation" || "FreeOfAdultContent",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLabelingJobsCommandInput - {@link ListLabelingJobsCommandInput}
 * @returns {@link ListLabelingJobsCommandOutput}
 * @see {@link ListLabelingJobsCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListLabelingJobsCommand extends $Command<
  ListLabelingJobsCommandInput,
  ListLabelingJobsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListLabelingJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLabelingJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListLabelingJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListLabelingJobs",
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
  private serialize(input: ListLabelingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLabelingJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLabelingJobsCommandOutput> {
    return de_ListLabelingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
