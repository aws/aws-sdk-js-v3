// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProtectedJobsInput, ListProtectedJobsOutput } from "../models/models_1";
import { de_ListProtectedJobsCommand, se_ListProtectedJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists protected jobs, sorted by most recent job.</p>
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
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListProtectedJobsCommand extends $Command
  .classBuilder<
    ListProtectedJobsCommandInput,
    ListProtectedJobsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListProtectedJobs", {})
  .n("CleanRoomsClient", "ListProtectedJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListProtectedJobsCommand)
  .de(de_ListProtectedJobsCommand)
  .build() {
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
