// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptQualificationRequestRequest, AcceptQualificationRequestResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_AcceptQualificationRequestCommand, se_AcceptQualificationRequestCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptQualificationRequestCommand}.
 */
export interface AcceptQualificationRequestCommandInput extends AcceptQualificationRequestRequest {}
/**
 * @public
 *
 * The output of {@link AcceptQualificationRequestCommand}.
 */
export interface AcceptQualificationRequestCommandOutput extends AcceptQualificationRequestResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
 *         </p>
 *         <p>
 *             Only the owner of the Qualification type can grant a Qualification request for that	type.
 *         </p>
 *         <p>
 *             A successful request for the <code>AcceptQualificationRequest</code> operation
 *             returns with no errors and an empty body.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AcceptQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AcceptQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // AcceptQualificationRequestRequest
 *   QualificationRequestId: "STRING_VALUE", // required
 *   IntegerValue: Number("int"),
 * };
 * const command = new AcceptQualificationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptQualificationRequestCommandInput - {@link AcceptQualificationRequestCommandInput}
 * @returns {@link AcceptQualificationRequestCommandOutput}
 * @see {@link AcceptQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptQualificationRequestCommandOutput} for command's `response` shape.
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
export class AcceptQualificationRequestCommand extends $Command
  .classBuilder<
    AcceptQualificationRequestCommandInput,
    AcceptQualificationRequestCommandOutput,
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
  .s("MTurkRequesterServiceV20170117", "AcceptQualificationRequest", {})
  .n("MTurkClient", "AcceptQualificationRequestCommand")
  .f(void 0, void 0)
  .ser(se_AcceptQualificationRequestCommand)
  .de(de_AcceptQualificationRequestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptQualificationRequestRequest;
      output: {};
    };
    sdk: {
      input: AcceptQualificationRequestCommandInput;
      output: AcceptQualificationRequestCommandOutput;
    };
  };
}
