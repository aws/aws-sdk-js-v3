// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePublicSharingSettingsRequest, UpdatePublicSharingSettingsResponse } from "../models/models_5";
import {
  de_UpdatePublicSharingSettingsCommand,
  se_UpdatePublicSharingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePublicSharingSettingsCommand}.
 */
export interface UpdatePublicSharingSettingsCommandInput extends UpdatePublicSharingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePublicSharingSettingsCommand}.
 */
export interface UpdatePublicSharingSettingsCommandOutput
  extends UpdatePublicSharingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Use the <code>UpdatePublicSharingSettings</code> operation to turn on or turn off the
 *             public sharing settings of an QuickSight dashboard.</p>
 *          <p>To use this operation, turn on session capacity pricing for your QuickSight
 *             account.</p>
 *          <p>Before you can turn on public sharing on your account, make sure to give public sharing
 *             permissions to an administrative user in the Identity and Access Management (IAM)
 *             console. For more information on using IAM with QuickSight, see
 *                 <a href="https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html">Using QuickSight with IAM</a> in the <i>QuickSight
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdatePublicSharingSettingsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdatePublicSharingSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdatePublicSharingSettingsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   PublicSharingEnabled: true || false,
 * };
 * const command = new UpdatePublicSharingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePublicSharingSettingsResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdatePublicSharingSettingsCommandInput - {@link UpdatePublicSharingSettingsCommandInput}
 * @returns {@link UpdatePublicSharingSettingsCommandOutput}
 * @see {@link UpdatePublicSharingSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicSharingSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *  <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to QuickSight. You
 * 		    can do this on the <b>Manage QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdatePublicSharingSettingsCommand extends $Command
  .classBuilder<
    UpdatePublicSharingSettingsCommandInput,
    UpdatePublicSharingSettingsCommandOutput,
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
  .s("QuickSight_20180401", "UpdatePublicSharingSettings", {})
  .n("QuickSightClient", "UpdatePublicSharingSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePublicSharingSettingsCommand)
  .de(de_UpdatePublicSharingSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePublicSharingSettingsRequest;
      output: UpdatePublicSharingSettingsResponse;
    };
    sdk: {
      input: UpdatePublicSharingSettingsCommandInput;
      output: UpdatePublicSharingSettingsCommandOutput;
    };
  };
}
