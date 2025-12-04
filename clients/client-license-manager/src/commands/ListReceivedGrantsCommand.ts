// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerClient";
import type { ListReceivedGrantsRequest, ListReceivedGrantsResponse } from "../models/models_0";
import { ListReceivedGrants } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReceivedGrantsCommand}.
 */
export interface ListReceivedGrantsCommandInput extends ListReceivedGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListReceivedGrantsCommand}.
 */
export interface ListReceivedGrantsCommandOutput extends ListReceivedGrantsResponse, __MetadataBearer {}

/**
 * <p>Lists grants that are received. Received grants are grants created while specifying the
 *          recipient as this Amazon Web Services account, your organization, or an organizational unit
 *          (OU) to which this member account belongs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedGrantsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListReceivedGrantsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListReceivedGrantsRequest
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
 * const command = new ListReceivedGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListReceivedGrantsResponse
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
 * //         "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken",
 * //       ],
 * //       Options: { // Options
 * //         ActivationOverrideBehavior: "DISTRIBUTED_GRANTS_ONLY" || "ALL_GRANTS_PERMITTED_BY_ISSUER",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReceivedGrantsCommandInput - {@link ListReceivedGrantsCommandInput}
 * @returns {@link ListReceivedGrantsCommandOutput}
 * @see {@link ListReceivedGrantsCommandInput} for command's `input` shape.
 * @see {@link ListReceivedGrantsCommandOutput} for command's `response` shape.
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
export class ListReceivedGrantsCommand extends $Command
  .classBuilder<
    ListReceivedGrantsCommandInput,
    ListReceivedGrantsCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "ListReceivedGrants", {})
  .n("LicenseManagerClient", "ListReceivedGrantsCommand")
  .sc(ListReceivedGrants)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReceivedGrantsRequest;
      output: ListReceivedGrantsResponse;
    };
    sdk: {
      input: ListReceivedGrantsCommandInput;
      output: ListReceivedGrantsCommandOutput;
    };
  };
}
