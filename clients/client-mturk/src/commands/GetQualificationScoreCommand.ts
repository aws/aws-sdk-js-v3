// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQualificationScoreRequest, GetQualificationScoreResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_GetQualificationScoreCommand, se_GetQualificationScoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQualificationScoreCommand}.
 */
export interface GetQualificationScoreCommandInput extends GetQualificationScoreRequest {}
/**
 * @public
 *
 * The output of {@link GetQualificationScoreCommand}.
 */
export interface GetQualificationScoreCommandOutput extends GetQualificationScoreResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>GetQualificationScore</code>
 *             operation returns the value of a Worker's Qualification for a given
 *             Qualification type.
 *         </p>
 *         <p>
 *             To get a Worker's Qualification, you must know the Worker's ID. The
 *             Worker's ID is included in the assignment data returned by the
 *             <code>ListAssignmentsForHIT</code>
 *             operation.
 *         </p>
 *         <p>Only the owner of a Qualification type can query the value of
 *             a Worker's Qualification of that type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationScoreCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationScoreCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // GetQualificationScoreRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   WorkerId: "STRING_VALUE", // required
 * };
 * const command = new GetQualificationScoreCommand(input);
 * const response = await client.send(command);
 * // { // GetQualificationScoreResponse
 * //   Qualification: { // Qualification
 * //     QualificationTypeId: "STRING_VALUE",
 * //     WorkerId: "STRING_VALUE",
 * //     GrantTime: new Date("TIMESTAMP"),
 * //     IntegerValue: Number("int"),
 * //     LocaleValue: { // Locale
 * //       Country: "STRING_VALUE", // required
 * //       Subdivision: "STRING_VALUE",
 * //     },
 * //     Status: "Granted" || "Revoked",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQualificationScoreCommandInput - {@link GetQualificationScoreCommandInput}
 * @returns {@link GetQualificationScoreCommandOutput}
 * @see {@link GetQualificationScoreCommandInput} for command's `input` shape.
 * @see {@link GetQualificationScoreCommandOutput} for command's `response` shape.
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
export class GetQualificationScoreCommand extends $Command
  .classBuilder<
    GetQualificationScoreCommandInput,
    GetQualificationScoreCommandOutput,
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
  .s("MTurkRequesterServiceV20170117", "GetQualificationScore", {})
  .n("MTurkClient", "GetQualificationScoreCommand")
  .f(void 0, void 0)
  .ser(se_GetQualificationScoreCommand)
  .de(de_GetQualificationScoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQualificationScoreRequest;
      output: GetQualificationScoreResponse;
    };
    sdk: {
      input: GetQualificationScoreCommandInput;
      output: GetQualificationScoreCommandOutput;
    };
  };
}
