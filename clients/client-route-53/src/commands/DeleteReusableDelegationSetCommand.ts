// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReusableDelegationSetRequest, DeleteReusableDelegationSetResponse } from "../models/models_0";
import { de_DeleteReusableDelegationSetCommand, se_DeleteReusableDelegationSetCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReusableDelegationSetCommand}.
 */
export interface DeleteReusableDelegationSetCommandInput extends DeleteReusableDelegationSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReusableDelegationSetCommand}.
 */
export interface DeleteReusableDelegationSetCommandOutput
  extends DeleteReusableDelegationSetResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a reusable delegation set.</p>
 *          <important>
 *             <p>You can delete a reusable delegation set only if it isn't associated with any
 * 				hosted zones.</p>
 *          </important>
 *          <p>To verify that the reusable delegation set is not associated with any hosted zones,
 * 			submit a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a> request and specify the ID of the reusable
 * 			delegation set that you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53Client(config);
 * const input = { // DeleteReusableDelegationSetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReusableDelegationSetCommandInput - {@link DeleteReusableDelegationSetCommandInput}
 * @returns {@link DeleteReusableDelegationSetCommandOutput}
 * @see {@link DeleteReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link DelegationSetInUse} (client fault)
 *  <p>The specified delegation contains associated hosted zones which must be deleted before
 * 			the reusable delegation set can be deleted.</p>
 *
 * @throws {@link DelegationSetNotReusable} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class DeleteReusableDelegationSetCommand extends $Command
  .classBuilder<
    DeleteReusableDelegationSetCommandInput,
    DeleteReusableDelegationSetCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "DeleteReusableDelegationSet", {})
  .n("Route53Client", "DeleteReusableDelegationSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReusableDelegationSetCommand)
  .de(de_DeleteReusableDelegationSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReusableDelegationSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteReusableDelegationSetCommandInput;
      output: DeleteReusableDelegationSetCommandOutput;
    };
  };
}
