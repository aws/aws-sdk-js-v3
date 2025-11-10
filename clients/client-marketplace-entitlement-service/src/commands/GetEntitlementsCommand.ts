// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceEntitlementServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceEntitlementServiceClient";
import { GetEntitlementsRequest, GetEntitlementsResult } from "../models/models_0";
import { GetEntitlements } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEntitlementsCommand}.
 */
export interface GetEntitlementsCommandInput extends GetEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link GetEntitlementsCommand}.
 */
export interface GetEntitlementsCommandOutput extends GetEntitlementsResult, __MetadataBearer {}

/**
 * <p>GetEntitlements retrieves entitlement values for a given product. The results can be
 *       filtered based on customer identifier, AWS account ID, or product dimensions.</p>
 *          <important>
 *             <p>
 *        The <code>CustomerIdentifier</code> parameter is on path for deprecation. Use <code>CustomerAWSAccountID</code> instead.</p>
 *             <p>These parameters are mutually exclusive. You can't specify both <code>CustomerIdentifier</code> and <code>CustomerAWSAccountID</code> in the same request.
 *      </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } from "@aws-sdk/client-marketplace-entitlement-service"; // ES Modules import
 * // const { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } = require("@aws-sdk/client-marketplace-entitlement-service"); // CommonJS import
 * // import type { MarketplaceEntitlementServiceClientConfig } from "@aws-sdk/client-marketplace-entitlement-service";
 * const config = {}; // type is MarketplaceEntitlementServiceClientConfig
 * const client = new MarketplaceEntitlementServiceClient(config);
 * const input = { // GetEntitlementsRequest
 *   ProductCode: "STRING_VALUE", // required
 *   Filter: { // GetEntitlementFilters
 *     "<keys>": [ // FilterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // GetEntitlementsResult
 * //   Entitlements: [ // EntitlementList
 * //     { // Entitlement
 * //       ProductCode: "STRING_VALUE",
 * //       Dimension: "STRING_VALUE",
 * //       CustomerIdentifier: "STRING_VALUE",
 * //       CustomerAWSAccountId: "STRING_VALUE",
 * //       Value: { // EntitlementValue
 * //         IntegerValue: Number("int"),
 * //         DoubleValue: Number("double"),
 * //         BooleanValue: true || false,
 * //         StringValue: "STRING_VALUE",
 * //       },
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEntitlementsCommandInput - {@link GetEntitlementsCommandInput}
 * @returns {@link GetEntitlementsCommandOutput}
 * @see {@link GetEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GetEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceEntitlementServiceClientResolvedConfig | config} for MarketplaceEntitlementServiceClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *    message with details on the AWS forums.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in your request was invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the GetEntitlements API are throttled.</p>
 *
 * @throws {@link MarketplaceEntitlementServiceServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceEntitlementService service.</p>
 *
 *
 * @public
 */
export class GetEntitlementsCommand extends $Command
  .classBuilder<
    GetEntitlementsCommandInput,
    GetEntitlementsCommandOutput,
    MarketplaceEntitlementServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceEntitlementServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPEntitlementService", "GetEntitlements", {})
  .n("MarketplaceEntitlementServiceClient", "GetEntitlementsCommand")
  .sc(GetEntitlements)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEntitlementsRequest;
      output: GetEntitlementsResult;
    };
    sdk: {
      input: GetEntitlementsCommandInput;
      output: GetEntitlementsCommandOutput;
    };
  };
}
