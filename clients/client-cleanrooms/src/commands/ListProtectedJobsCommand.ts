// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProtectedJobsInput, ListProtectedJobsOutput } from "../models/models_1";
import { ListProtectedJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProtectedJobsCommand}.
 */
export interface ListProtectedJobsCommandInput extends ListProtectedJobsInput {}
/**
 * @public
 *
 * The output of {@link ListProtectedJobsCommand}.
 */
export interface ListProtectedJobsCommandOutput extends ListProtectedJobsOutput, __MetadataBearer {}

/**
 * Lists protected jobs, sorted by most recent job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListProtectedJobsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListProtectedJobsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListProtectedJobsInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   status: "SUBMITTED" || "STARTED" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProtectedJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectedJobsOutput
 * //   nextToken: "STRING_VALUE",
 * //   protectedJobs: [ // ProtectedJobSummaryList // required
 * //     { // ProtectedJobSummary
 * //       id: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       status: "SUBMITTED" || "STARTED" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS", // required
 * //       receiverConfigurations: [ // ProtectedJobReceiverConfigurations // required
 * //         { // ProtectedJobReceiverConfiguration
 * //           analysisType: "DIRECT_ANALYSIS", // required
 * //           configurationDetails: { // ProtectedJobConfigurationDetails Union: only one key present
 * //             directAnalysisConfigurationDetails: { // ProtectedJobDirectAnalysisConfigurationDetails
 * //               receiverAccountIds: [ // ProtectedJobReceiverAccountIds
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       jobComputePayerAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProtectedJobsCommandInput - {@link ListProtectedJobsCommandInput}
 * @returns {@link ListProtectedJobsCommandOutput}
 * @see {@link ListProtectedJobsCommandInput} for command's `input` shape.
 * @see {@link ListProtectedJobsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class ListProtectedJobsCommand extends command<ListProtectedJobsCommandInput, ListProtectedJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListProtectedJobs",
  ListProtectedJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectedJobsInput;
      output: ListProtectedJobsOutput;
    };
    sdk: {
      input: ListProtectedJobsCommandInput;
      output: ListProtectedJobsCommandOutput;
    };
  };
}
