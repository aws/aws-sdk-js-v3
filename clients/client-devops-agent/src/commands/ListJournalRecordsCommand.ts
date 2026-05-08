// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListJournalRecordsRequest, ListJournalRecordsResponse } from "../models/models_0";
import { ListJournalRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJournalRecordsCommand}.
 */
export interface ListJournalRecordsCommandInput extends ListJournalRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListJournalRecordsCommand}.
 */
export interface ListJournalRecordsCommandOutput extends ListJournalRecordsResponse, __MetadataBearer {}

/**
 * List journal records for a specific execution
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListJournalRecordsCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListJournalRecordsCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListJournalRecordsRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   recordType: "STRING_VALUE",
 *   order: "ASC" || "DESC",
 * };
 * const command = new ListJournalRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListJournalRecordsResponse
 * //   records: [ // JournalRecordList // required
 * //     { // JournalRecord
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       executionId: "STRING_VALUE", // required
 * //       recordId: "STRING_VALUE", // required
 * //       content: "DOCUMENT_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       recordType: "STRING_VALUE", // required
 * //       userReference: { // UserReference
 * //         userId: "STRING_VALUE", // required
 * //         userType: "IAM" || "IDC" || "IDP", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJournalRecordsCommandInput - {@link ListJournalRecordsCommandInput}
 * @returns {@link ListJournalRecordsCommandOutput}
 * @see {@link ListJournalRecordsCommandInput} for command's `input` shape.
 * @see {@link ListJournalRecordsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class ListJournalRecordsCommand extends $Command
  .classBuilder<
    ListJournalRecordsCommandInput,
    ListJournalRecordsCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "ListJournalRecords", {})
  .n("DevOpsAgentClient", "ListJournalRecordsCommand")
  .sc(ListJournalRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJournalRecordsRequest;
      output: ListJournalRecordsResponse;
    };
    sdk: {
      input: ListJournalRecordsCommandInput;
      output: ListJournalRecordsCommandOutput;
    };
  };
}
