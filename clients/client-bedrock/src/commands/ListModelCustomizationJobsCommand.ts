// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListModelCustomizationJobsRequest, ListModelCustomizationJobsResponse } from "../models/models_1";
import { ListModelCustomizationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListModelCustomizationJobsCommand}.
 */
export interface ListModelCustomizationJobsCommandInput extends ListModelCustomizationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelCustomizationJobsCommand}.
 */
export interface ListModelCustomizationJobsCommandOutput extends ListModelCustomizationJobsResponse, __MetadataBearer {}

/**
 * Returns a list of model customization jobs that you have submitted. You can filter the jobs to return based on one or more criteria.
 *
 * For more information, see [Custom models](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListModelCustomizationJobsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListModelCustomizationJobsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListModelCustomizationJobsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListModelCustomizationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelCustomizationJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelCustomizationJobSummaries: [ // ModelCustomizationJobSummaries
 * //     { // ModelCustomizationJobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       baseModelArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       status: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       statusDetails: { // StatusDetails
 * //         validationDetails: { // ValidationDetails
 * //           status: "InProgress" || "Completed" || "Stopping" || "Stopped" || "Failed" || "NotStarted",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastModifiedTime: new Date("TIMESTAMP"),
 * //         },
 * //         dataProcessingDetails: { // DataProcessingDetails
 * //           status: "InProgress" || "Completed" || "Stopping" || "Stopped" || "Failed" || "NotStarted",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastModifiedTime: new Date("TIMESTAMP"),
 * //         },
 * //         trainingDetails: { // TrainingDetails
 * //           status: "InProgress" || "Completed" || "Stopping" || "Stopped" || "Failed" || "NotStarted",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastModifiedTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       customModelArn: "STRING_VALUE",
 * //       customModelName: "STRING_VALUE",
 * //       customizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING" || "DISTILLATION" || "REINFORCEMENT_FINE_TUNING" || "IMPORTED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelCustomizationJobsCommandInput - {@link ListModelCustomizationJobsCommandInput}
 * @returns {@link ListModelCustomizationJobsCommandOutput}
 * @see {@link ListModelCustomizationJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelCustomizationJobsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class ListModelCustomizationJobsCommand extends command<ListModelCustomizationJobsCommandInput, ListModelCustomizationJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListModelCustomizationJobs",
  ListModelCustomizationJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelCustomizationJobsRequest;
      output: ListModelCustomizationJobsResponse;
    };
    sdk: {
      input: ListModelCustomizationJobsCommandInput;
      output: ListModelCustomizationJobsCommandOutput;
    };
  };
}
