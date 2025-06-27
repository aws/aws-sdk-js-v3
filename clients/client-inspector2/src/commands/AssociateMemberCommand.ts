// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { AssociateMemberRequest, AssociateMemberResponse } from "../models/models_0";
import { de_AssociateMemberCommand, se_AssociateMemberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateMemberCommand}.
 */
export interface AssociateMemberCommandInput extends AssociateMemberRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMemberCommand}.
 */
export interface AssociateMemberCommandOutput extends AssociateMemberResponse, __MetadataBearer {}

/**
 * <p>Associates an Amazon Web Services account with an Amazon Inspector delegated administrator. An HTTP 200 response
 *          indicates the association was successfully started, but doesn’t indicate whether it was
 *          completed. You can check if the association completed by using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListMembers.html">ListMembers</a> for multiple
 *          accounts or <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetMember.html">GetMembers</a> for a single account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, AssociateMemberCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, AssociateMemberCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // AssociateMemberRequest
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new AssociateMemberCommand(input);
 * const response = await client.send(command);
 * // { // AssociateMemberResponse
 * //   accountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateMemberCommandInput - {@link AssociateMemberCommandInput}
 * @returns {@link AssociateMemberCommandOutput}
 * @see {@link AssociateMemberCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota. To perform the requested action, remove some of
 *          the relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class AssociateMemberCommand extends $Command
  .classBuilder<
    AssociateMemberCommandInput,
    AssociateMemberCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "AssociateMember", {})
  .n("Inspector2Client", "AssociateMemberCommand")
  .f(void 0, void 0)
  .ser(se_AssociateMemberCommand)
  .de(de_AssociateMemberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateMemberRequest;
      output: AssociateMemberResponse;
    };
    sdk: {
      input: AssociateMemberCommandInput;
      output: AssociateMemberCommandOutput;
    };
  };
}
