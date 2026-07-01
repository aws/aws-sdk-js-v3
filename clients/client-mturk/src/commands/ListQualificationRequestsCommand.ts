// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListQualificationRequestsRequest, ListQualificationRequestsResponse } from "../models/models_0";
import { ListQualificationRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListQualificationRequestsCommand}.
 */
export interface ListQualificationRequestsCommandInput extends ListQualificationRequestsRequest {}
/**
 * @public
 *
 * The output of {@link ListQualificationRequestsCommand}.
 */
export interface ListQualificationRequestsCommandOutput extends ListQualificationRequestsResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListQualificationRequests</code>
 *             operation retrieves requests for Qualifications of a particular
 *             Qualification type. The owner of the Qualification type calls this
 *             operation to poll for pending requests, and accepts them using the
 *             AcceptQualification operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationRequestsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationRequestsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // ListQualificationRequestsRequest
 *   QualificationTypeId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQualificationRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListQualificationRequestsResponse
 * //   NumResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   QualificationRequests: [ // QualificationRequestList
 * //     { // QualificationRequest
 * //       QualificationRequestId: "STRING_VALUE",
 * //       QualificationTypeId: "STRING_VALUE",
 * //       WorkerId: "STRING_VALUE",
 * //       Test: "STRING_VALUE",
 * //       Answer: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListQualificationRequestsCommandInput - {@link ListQualificationRequestsCommandInput}
 * @returns {@link ListQualificationRequestsCommandOutput}
 * @see {@link ListQualificationRequestsCommandInput} for command's `input` shape.
 * @see {@link ListQualificationRequestsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class ListQualificationRequestsCommand extends command<ListQualificationRequestsCommandInput, ListQualificationRequestsCommandOutput>(
  _ep0,
  _mw0,
  "ListQualificationRequests",
  ListQualificationRequests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQualificationRequestsRequest;
      output: ListQualificationRequestsResponse;
    };
    sdk: {
      input: ListQualificationRequestsCommandInput;
      output: ListQualificationRequestsCommandOutput;
    };
  };
}
