// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePublicSharingSettingsRequest, UpdatePublicSharingSettingsResponse } from "../models/models_5";
import { UpdatePublicSharingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdatePublicSharingSettingsCommandOutput extends UpdatePublicSharingSettingsResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This API controls public sharing settings for your entire Quick Sight account, affecting data security and access. When you enable public sharing:
 * >
 * > - Dashboards can be shared publicly
 * > - This setting affects your entire Amazon Web Services account and all Quick Sight users
 * >
 * > **Before proceeding:** Ensure you understand the security implications and have proper IAM permissions configured.
 *
 * Use the `UpdatePublicSharingSettings` operation to turn on or turn off the public sharing settings of an Amazon Quick Sight dashboard.
 *
 * To use this operation, turn on session capacity pricing for your Amazon Quick Sight account.
 *
 * Before you can turn on public sharing on your account, make sure to give public sharing permissions to an administrative user in the Identity and Access Management (IAM) console. For more information on using IAM with Amazon Quick Sight, see [Using Quick with IAM](https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html) in the *Amazon Quick Sight User Guide*.
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *
 * This error indicates that you are calling an embedding operation in Amazon Quick Sight without the required pricing plan on your Amazon Web Services account. Before you can use embedding for anonymous users, a Quick Suite administrator needs to add capacity pricing to Quick Sight. You can do this on the **Manage Quick Suite** page.
 *
 * After capacity pricing is added, you can use the `GetDashboardEmbedUrl` API operation with the `--identity-type ANONYMOUS` option.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class UpdatePublicSharingSettingsCommand extends command<UpdatePublicSharingSettingsCommandInput, UpdatePublicSharingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePublicSharingSettings",
  UpdatePublicSharingSettings$
) {
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
