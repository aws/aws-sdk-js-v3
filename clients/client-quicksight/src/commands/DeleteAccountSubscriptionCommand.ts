// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccountSubscriptionRequest, DeleteAccountSubscriptionResponse } from "../models/models_3";
import { de_DeleteAccountSubscriptionCommand, se_DeleteAccountSubscriptionCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountSubscriptionCommand}.
 */
export interface DeleteAccountSubscriptionCommandInput extends DeleteAccountSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountSubscriptionCommand}.
 */
export interface DeleteAccountSubscriptionCommandOutput extends DeleteAccountSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Use the <code>DeleteAccountSubscription</code> operation to delete an Amazon QuickSight account. This operation will result in an error message if you have configured your account termination protection settings to <code>True</code>. To change this setting and delete your account, call the <code>UpdateAccountSettings</code> API and set the value of the <code>TerminationProtectionEnabled</code> parameter to <code>False</code>, then make another call to the <code>DeleteAccountSubscription</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccountSubscriptionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccountSubscriptionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAccountSubscriptionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountSubscriptionResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteAccountSubscriptionCommandInput - {@link DeleteAccountSubscriptionCommandInput}
 * @returns {@link DeleteAccountSubscriptionCommandOutput}
 * @see {@link DeleteAccountSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteAccountSubscriptionCommand extends $Command
  .classBuilder<
    DeleteAccountSubscriptionCommandInput,
    DeleteAccountSubscriptionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DeleteAccountSubscription", {})
  .n("QuickSightClient", "DeleteAccountSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccountSubscriptionCommand)
  .de(de_DeleteAccountSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountSubscriptionRequest;
      output: DeleteAccountSubscriptionResponse;
    };
    sdk: {
      input: DeleteAccountSubscriptionCommandInput;
      output: DeleteAccountSubscriptionCommandOutput;
    };
  };
}
