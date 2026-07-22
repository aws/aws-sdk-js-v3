// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetQualificationsAssociationDetailsRequest,
  GetQualificationsAssociationDetailsResponse,
} from "../models/models_0";
import { GetQualificationsAssociationDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQualificationsAssociationDetailsCommand}.
 */
export interface GetQualificationsAssociationDetailsCommandInput extends GetQualificationsAssociationDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetQualificationsAssociationDetailsCommand}.
 */
export interface GetQualificationsAssociationDetailsCommandOutput extends GetQualificationsAssociationDetailsResponse, __MetadataBearer {}

/**
 * <p>Returns your current qualifications association status, the primary partner, and the full list of partners associated under the primary partner.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetQualificationsAssociationDetailsCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetQualificationsAssociationDetailsCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetQualificationsAssociationDetailsRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetQualificationsAssociationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetQualificationsAssociationDetailsResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Status: "ASSOCIATED" || "NOT_ASSOCIATED", // required
 * //   PrimaryPartner: { // QualificationsAssociationPartner
 * //     ProfileId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //   },
 * //   AssociatedPartners: [ // AssociatedPartnerList
 * //     {
 * //       ProfileId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetQualificationsAssociationDetailsCommandInput - {@link GetQualificationsAssociationDetailsCommandInput}
 * @returns {@link GetQualificationsAssociationDetailsCommandOutput}
 * @see {@link GetQualificationsAssociationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetQualificationsAssociationDetailsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class GetQualificationsAssociationDetailsCommand extends command<GetQualificationsAssociationDetailsCommandInput, GetQualificationsAssociationDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetQualificationsAssociationDetails",
  GetQualificationsAssociationDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQualificationsAssociationDetailsRequest;
      output: GetQualificationsAssociationDetailsResponse;
    };
    sdk: {
      input: GetQualificationsAssociationDetailsCommandInput;
      output: GetQualificationsAssociationDetailsCommandOutput;
    };
  };
}
