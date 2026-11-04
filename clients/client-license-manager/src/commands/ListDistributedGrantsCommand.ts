// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDistributedGrantsRequest, ListDistributedGrantsResponse } from "../models/models_0";
import { ListDistributedGrants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDistributedGrantsCommand}.
 */
export interface ListDistributedGrantsCommandInput extends ListDistributedGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributedGrantsCommand}.
 */
export interface ListDistributedGrantsCommandOutput extends ListDistributedGrantsResponse, __MetadataBearer {}

/**
 * Lists the grants distributed for the specified license.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListDistributedGrantsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListDistributedGrantsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListDistributedGrantsRequest
 *   GrantArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDistributedGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributedGrantsResponse
 * //   Grants: [ // GrantList
 * //     { // Grant
 * //       GrantArn: "STRING_VALUE", // required
 * //       GrantName: "STRING_VALUE", // required
 * //       ParentArn: "STRING_VALUE", // required
 * //       LicenseArn: "STRING_VALUE", // required
 * //       GranteePrincipalArn: "STRING_VALUE", // required
 * //       HomeRegion: "STRING_VALUE", // required
 * //       GrantStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED", // required
 * //       StatusReason: "STRING_VALUE",
 * //       Version: "STRING_VALUE", // required
 * //       GrantedOperations: [ // AllowedOperationList // required
 * //         "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken" || "ListReceivedLicenses",
 * //       ],
 * //       Options: { // Options
 * //         ActivationOverrideBehavior: "DISTRIBUTED_GRANTS_ONLY" || "ALL_GRANTS_PERMITTED_BY_ISSUER",
 * //         DesiredStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 * //       },
 * //       GrantType: "BuyerGrant" || "DelegateGrant",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDistributedGrantsCommandInput - {@link ListDistributedGrantsCommandInput}
 * @returns {@link ListDistributedGrantsCommandOutput}
 * @see {@link ListDistributedGrantsCommandInput} for command's `input` shape.
 * @see {@link ListDistributedGrantsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class ListDistributedGrantsCommand extends command<ListDistributedGrantsCommandInput, ListDistributedGrantsCommandOutput>(
  _ep0,
  _mw0,
  "ListDistributedGrants",
  ListDistributedGrants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributedGrantsRequest;
      output: ListDistributedGrantsResponse;
    };
    sdk: {
      input: ListDistributedGrantsCommandInput;
      output: ListDistributedGrantsCommandOutput;
    };
  };
}
