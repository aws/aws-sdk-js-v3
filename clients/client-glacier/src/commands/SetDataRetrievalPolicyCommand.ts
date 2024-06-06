// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetDataRetrievalPolicyInput } from "../models/models_0";
import { de_SetDataRetrievalPolicyCommand, se_SetDataRetrievalPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDataRetrievalPolicyCommand}.
 */
export interface SetDataRetrievalPolicyCommandInput extends SetDataRetrievalPolicyInput {}
/**
 * @public
 *
 * The output of {@link SetDataRetrievalPolicyCommand}.
 */
export interface SetDataRetrievalPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation sets and then enacts a data retrieval policy in the region specified
 *          in the PUT request. You can set one policy per region for an AWS account. The policy is
 *          enacted within a few minutes of a successful PUT operation.</p>
 *          <p>The set policy operation does not affect retrieval jobs that were in progress before
 *          the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon
 *             Glacier Data Retrieval Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // SetDataRetrievalPolicyInput
 *   accountId: "STRING_VALUE", // required
 *   Policy: { // DataRetrievalPolicy
 *     Rules: [ // DataRetrievalRulesList
 *       { // DataRetrievalRule
 *         Strategy: "STRING_VALUE",
 *         BytesPerHour: Number("long"),
 *       },
 *     ],
 *   },
 * };
 * const command = new SetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetDataRetrievalPolicyCommandInput - {@link SetDataRetrievalPolicyCommandInput}
 * @returns {@link SetDataRetrievalPolicyCommandOutput}
 * @see {@link SetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link SetDataRetrievalPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @public
 * @example To set and then enact a data retrieval policy
 * ```javascript
 * // The example sets and then enacts a data retrieval policy.
 * const input = {
 *   "Policy": {
 *     "Rules": [
 *       {
 *         "BytesPerHour": 10737418240,
 *         "Strategy": "BytesPerHour"
 *       }
 *     ]
 *   },
 *   "accountId": "-"
 * };
 * const command = new SetDataRetrievalPolicyCommand(input);
 * await client.send(command);
 * // example id: to-set-and-then-enact-a-data-retrieval-policy--1481928352408
 * ```
 *
 */
export class SetDataRetrievalPolicyCommand extends $Command
  .classBuilder<
    SetDataRetrievalPolicyCommandInput,
    SetDataRetrievalPolicyCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "SetDataRetrievalPolicy", {})
  .n("GlacierClient", "SetDataRetrievalPolicyCommand")
  .f(void 0, void 0)
  .ser(se_SetDataRetrievalPolicyCommand)
  .de(de_SetDataRetrievalPolicyCommand)
  .build() {}
