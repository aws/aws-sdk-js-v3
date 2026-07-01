// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJournalRecordsRequest, ListJournalRecordsResponse } from "../models/models_0";
import { ListJournalRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>List journal records for a specific execution</p>
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
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class ListJournalRecordsCommand extends command<ListJournalRecordsCommandInput, ListJournalRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListJournalRecords",
  ListJournalRecords$
) {
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
