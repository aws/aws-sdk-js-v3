// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { de_ListPoliciesCommand, se_ListPoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandInput extends ListPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of policies. Policies define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, ListPoliciesCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, ListPoliciesCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * const client = new MPAClient(config);
 * const input = { // ListPoliciesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPoliciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Policies: [ // Policies
 * //     { // Policy
 * //       Arn: "STRING_VALUE", // required
 * //       DefaultVersion: Number("int"), // required
 * //       PolicyType: "AWS_MANAGED" || "AWS_RAM", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPoliciesCommandInput - {@link ListPoliciesCommandInput}
 * @returns {@link ListPoliciesCommandOutput}
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link MPAServiceException}
 * <p>Base exception class for all service exceptions from MPA service.</p>
 *
 *
 * @public
 */
export class ListPoliciesCommand extends $Command
  .classBuilder<
    ListPoliciesCommandInput,
    ListPoliciesCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFluffyCoreService", "ListPolicies", {})
  .n("MPAClient", "ListPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListPoliciesCommand)
  .de(de_ListPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoliciesRequest;
      output: ListPoliciesResponse;
    };
    sdk: {
      input: ListPoliciesCommandInput;
      output: ListPoliciesCommandOutput;
    };
  };
}
