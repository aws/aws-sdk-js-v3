// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListQualificationRequestsRequest, ListQualificationRequestsResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListQualificationRequestsCommand, se_ListQualificationRequestsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class ListQualificationRequestsCommand extends $Command
  .classBuilder<
    ListQualificationRequestsCommandInput,
    ListQualificationRequestsCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "ListQualificationRequests", {})
  .n("MTurkClient", "ListQualificationRequestsCommand")
  .f(void 0, void 0)
  .ser(se_ListQualificationRequestsCommand)
  .de(de_ListQualificationRequestsCommand)
  .build() {
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
