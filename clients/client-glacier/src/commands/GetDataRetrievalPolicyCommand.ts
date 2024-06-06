// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput } from "../models/models_0";
import { de_GetDataRetrievalPolicyCommand, se_GetDataRetrievalPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataRetrievalPolicyCommand}.
 */
export interface GetDataRetrievalPolicyCommandInput extends GetDataRetrievalPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetDataRetrievalPolicyCommand}.
 */
export interface GetDataRetrievalPolicyCommandOutput extends GetDataRetrievalPolicyOutput, __MetadataBearer {}

/**
 * <p>This operation returns the current data retrieval policy for the account and region
 *          specified in the GET request. For more information about data retrieval policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // GetDataRetrievalPolicyInput
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new GetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDataRetrievalPolicyOutput
 * //   Policy: { // DataRetrievalPolicy
 * //     Rules: [ // DataRetrievalRulesList
 * //       { // DataRetrievalRule
 * //         Strategy: "STRING_VALUE",
 * //         BytesPerHour: Number("long"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataRetrievalPolicyCommandInput - {@link GetDataRetrievalPolicyCommandInput}
 * @returns {@link GetDataRetrievalPolicyCommandOutput}
 * @see {@link GetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataRetrievalPolicyCommandOutput} for command's `response` shape.
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
 * @example To get the current data retrieval policy for an account
 * ```javascript
 * // The example returns the current data retrieval policy for the account.
 * const input = {
 *   "accountId": "-"
 * };
 * const command = new GetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Policy": {
 *     "Rules": [
 *       {
 *         "BytesPerHour": 10737418240,
 *         "Strategy": "BytesPerHour"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-get-the-current-data-retrieval-policy-for-the-account-1481851580439
 * ```
 *
 */
export class GetDataRetrievalPolicyCommand extends $Command
  .classBuilder<
    GetDataRetrievalPolicyCommandInput,
    GetDataRetrievalPolicyCommandOutput,
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
  .s("Glacier", "GetDataRetrievalPolicy", {})
  .n("GlacierClient", "GetDataRetrievalPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetDataRetrievalPolicyCommand)
  .de(de_GetDataRetrievalPolicyCommand)
  .build() {}
