// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateDistributionTenantWebACLRequest,
  AssociateDistributionTenantWebACLResult,
} from "../models/models_0";
import { AssociateDistributionTenantWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDistributionTenantWebACLCommand}.
 */
export interface AssociateDistributionTenantWebACLCommandInput extends AssociateDistributionTenantWebACLRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDistributionTenantWebACLCommand}.
 */
export interface AssociateDistributionTenantWebACLCommandOutput extends AssociateDistributionTenantWebACLResult, __MetadataBearer {}

/**
 * <p>Associates the WAF web ACL with a distribution tenant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, AssociateDistributionTenantWebACLCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, AssociateDistributionTenantWebACLCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // AssociateDistributionTenantWebACLRequest
 *   Id: "STRING_VALUE", // required
 *   WebACLArn: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new AssociateDistributionTenantWebACLCommand(input);
 * const response = await client.send(command);
 * // { // AssociateDistributionTenantWebACLResult
 * //   Id: "STRING_VALUE",
 * //   WebACLArn: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateDistributionTenantWebACLCommandInput - {@link AssociateDistributionTenantWebACLCommandInput}
 * @returns {@link AssociateDistributionTenantWebACLCommandOutput}
 * @see {@link AssociateDistributionTenantWebACLCommandInput} for command's `input` shape.
 * @see {@link AssociateDistributionTenantWebACLCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class AssociateDistributionTenantWebACLCommand extends $Command
  .classBuilder<
    AssociateDistributionTenantWebACLCommandInput,
    AssociateDistributionTenantWebACLCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "AssociateDistributionTenantWebACL", {})
  .n("CloudFrontClient", "AssociateDistributionTenantWebACLCommand")
  .sc(AssociateDistributionTenantWebACL$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDistributionTenantWebACLRequest;
      output: AssociateDistributionTenantWebACLResult;
    };
    sdk: {
      input: AssociateDistributionTenantWebACLCommandInput;
      output: AssociateDistributionTenantWebACLCommandOutput;
    };
  };
}
