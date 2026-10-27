// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGrantRequest, CreateGrantResponse } from "../models/models_0";
import { CreateGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGrantCommand}.
 */
export interface CreateGrantCommandInput extends CreateGrantRequest {}
/**
 * @public
 *
 * The output of {@link CreateGrantCommand}.
 */
export interface CreateGrantCommandOutput extends CreateGrantResponse, __MetadataBearer {}

/**
 * <p>Creates a grant for the specified license. A grant shares the use of license
 *          entitlements with a specific Amazon Web Services account, an organization, or an
 *          organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.</p>
 *          <p>Set the type of grant with the <code>GrantType</code> field:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BuyerGrant</code> - The default grant type, created by the seller when a
 *                customer subscribes to a product. The seller creates a license for the subscription
 *                and a buyer grant for the customer. With a buyer grant, the customer can use,
 *                consume, and distribute the license, according to the permissions the seller sets in
 *                the product contract.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DelegateGrant</code> - A delegate grant gives the grantee read-only
 *                visibility into the licenses and grants that you have distributed to buyers for a
 *                product. The grantee can monitor that activity on your behalf, and can also listen
 *                for the related Amazon EventBridge events. A delegate grant conveys no entitlement to
 *                use the licenses, and its only allowed operation is <code>ListReceivedLicenses</code>.
 *                You must create the delegate grant, and its license, from the same
 *                Amazon Web Services account that you used to create those buyer licenses and grants.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateGrantRequest
 *   ClientToken: "STRING_VALUE", // required
 *   GrantName: "STRING_VALUE", // required
 *   LicenseArn: "STRING_VALUE", // required
 *   Principals: [ // PrincipalArnList // required
 *     "STRING_VALUE",
 *   ],
 *   HomeRegion: "STRING_VALUE", // required
 *   AllowedOperations: [ // AllowedOperationList // required
 *     "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken" || "ListReceivedLicenses",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   GrantType: "BuyerGrant" || "DelegateGrant",
 *   Options: { // Options
 *     ActivationOverrideBehavior: "DISTRIBUTED_GRANTS_ONLY" || "ALL_GRANTS_PERMITTED_BY_ISSUER",
 *     DesiredStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 *   },
 * };
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * // { // CreateGrantResponse
 * //   GrantArn: "STRING_VALUE",
 * //   Status: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGrantCommandInput - {@link CreateGrantCommandInput}
 * @returns {@link CreateGrantCommandOutput}
 * @see {@link CreateGrantCommandInput} for command's `input` shape.
 * @see {@link CreateGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class CreateGrantCommand extends command<CreateGrantCommandInput, CreateGrantCommandOutput>(
  _ep0,
  _mw0,
  "CreateGrant",
  CreateGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGrantRequest;
      output: CreateGrantResponse;
    };
    sdk: {
      input: CreateGrantCommandInput;
      output: CreateGrantCommandOutput;
    };
  };
}
