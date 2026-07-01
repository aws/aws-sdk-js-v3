// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgreementEntitlementsInput, GetAgreementEntitlementsOutput } from "../models/models_0";
import { GetAgreementEntitlements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgreementEntitlementsCommand}.
 */
export interface GetAgreementEntitlementsCommandInput extends GetAgreementEntitlementsInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementEntitlementsCommand}.
 */
export interface GetAgreementEntitlementsCommandOutput extends GetAgreementEntitlementsOutput, __MetadataBearer {}

/**
 * <p>Obtains details about the entitlements of an agreement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementEntitlementsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementEntitlementsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementEntitlementsInput
 *   agreementId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetAgreementEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementEntitlementsOutput
 * //   agreementEntitlements: [ // AgreementEntitlementList
 * //     { // AgreementEntitlement
 * //       resource: { // Resource
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //       },
 * //       type: "STRING_VALUE",
 * //       registrationToken: "STRING_VALUE",
 * //       status: "PROVISIONED" || "SCHEDULED" || "PENDING" || "FAILED" || "DEPROVISIONED",
 * //       statusReasonCode: "PROVISIONING_IN_PROGRESS" || "FUTURE_START_DATE" || "INVALID_PAYMENT_INSTRUMENT" || "INCOMPATIBLE_CURRENCY" || "ACCOUNT_SUSPENDED" || "UNSUPPORTED_OPERATION" || "AGREEMENT_INACTIVE" || "AGREEMENT_ACTIVE" || "PRODUCT_RESTRICTED",
 * //       licenseArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAgreementEntitlementsCommandInput - {@link GetAgreementEntitlementsCommandInput}
 * @returns {@link GetAgreementEntitlementsCommandOutput}
 * @see {@link GetAgreementEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GetAgreementEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @public
 */
export class GetAgreementEntitlementsCommand extends command<GetAgreementEntitlementsCommandInput, GetAgreementEntitlementsCommandOutput>(
  _ep0,
  _mw0,
  "GetAgreementEntitlements",
  GetAgreementEntitlements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementEntitlementsInput;
      output: GetAgreementEntitlementsOutput;
    };
    sdk: {
      input: GetAgreementEntitlementsCommandInput;
      output: GetAgreementEntitlementsCommandOutput;
    };
  };
}
