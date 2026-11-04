// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountSubscriptionRequest, DeleteAccountSubscriptionResponse } from "../models/models_3";
import { DeleteAccountSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:**
 * >
 * > Deleting your Quick Sight account subscription has permanent, irreversible consequences across all Amazon Web Services regions:
 * >
 * > - Global deletion – Running this operation from any single region will delete your Quick Sight account and all data in every Amazon Web Services region where you have Quick Sight resources.
 * > - Complete data loss – All dashboards, analyses, datasets, data sources, and custom visuals will be permanently deleted across all regions.
 * > - Embedded content failure – All embedded dashboards and visuals in your applications will immediately stop working and display errors to end users.
 * > - Shared resources removed – All shared dashboards, folders, and resources will become inaccessible to other users and external recipients.
 * > - User access terminated – All Quick Sight users in your account will lose access immediately, including authors, readers, and administrators.
 * > - **No recovery possible** – Once deleted, your Quick Sight account and all associated data cannot be restored.
 * >
 * > Consider exporting critical dashboards and data before proceeding with account deletion.
 *
 * Use the `DeleteAccountSubscription` operation to delete an Quick Sight account. This operation will result in an error message if you have configured your account termination protection settings to `True`. To change this setting and delete your account, call the `UpdateAccountSettings` API and set the value of the `TerminationProtectionEnabled` parameter to `False`, then make another call to the `DeleteAccountSubscription` API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccountSubscriptionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccountSubscriptionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *
 * This resource is currently unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DeleteAccountSubscriptionCommand extends command<DeleteAccountSubscriptionCommandInput, DeleteAccountSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountSubscription",
  DeleteAccountSubscription$
) {
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
