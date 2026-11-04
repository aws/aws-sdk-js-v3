// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataIngestionJobsRequest, ListDataIngestionJobsResponse } from "../models/models_0";
import { ListDataIngestionJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataIngestionJobsCommand}.
 */
export interface ListDataIngestionJobsCommandInput extends ListDataIngestionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataIngestionJobsCommand}.
 */
export interface ListDataIngestionJobsCommandOutput extends ListDataIngestionJobsResponse, __MetadataBearer {}

/**
 * Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListDataIngestionJobsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListDataIngestionJobsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListDataIngestionJobsRequest
 *   DatasetName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 * };
 * const command = new ListDataIngestionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataIngestionJobsResponse
 * //   NextToken: "STRING_VALUE",
 * //   DataIngestionJobSummaries: [ // DataIngestionJobSummaries
 * //     { // DataIngestionJobSummary
 * //       JobId: "STRING_VALUE",
 * //       DatasetName: "STRING_VALUE",
 * //       DatasetArn: "STRING_VALUE",
 * //       IngestionInputConfiguration: { // IngestionInputConfiguration
 * //         S3InputConfiguration: { // IngestionS3InputConfiguration
 * //           Bucket: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //           KeyPattern: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataIngestionJobsCommandInput - {@link ListDataIngestionJobsCommandInput}
 * @returns {@link ListDataIngestionJobsCommandOutput}
 * @see {@link ListDataIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have access to the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Processing of the request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services service that's being utilized.
 *
 * @throws {@link LookoutEquipmentServiceException}
 *
 * Base exception class for all service exceptions from LookoutEquipment service.
 *
 * @public
 */
export class ListDataIngestionJobsCommand extends command<ListDataIngestionJobsCommandInput, ListDataIngestionJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataIngestionJobs",
  ListDataIngestionJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataIngestionJobsRequest;
      output: ListDataIngestionJobsResponse;
    };
    sdk: {
      input: ListDataIngestionJobsCommandInput;
      output: ListDataIngestionJobsCommandOutput;
    };
  };
}
