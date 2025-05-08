// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateDistributionWebACLRequest, AssociateDistributionWebACLResult } from "../models/models_0";
import { de_AssociateDistributionWebACLCommand, se_AssociateDistributionWebACLCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDistributionWebACLCommand}.
 */
export interface AssociateDistributionWebACLCommandInput extends AssociateDistributionWebACLRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDistributionWebACLCommand}.
 */
export interface AssociateDistributionWebACLCommandOutput extends AssociateDistributionWebACLResult, __MetadataBearer {}

/**
 * <p>Associates the WAF web ACL with a distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, AssociateDistributionWebACLCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, AssociateDistributionWebACLCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // AssociateDistributionWebACLRequest
 *   Id: "STRING_VALUE", // required
 *   WebACLArn: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new AssociateDistributionWebACLCommand(input);
 * const response = await client.send(command);
 * // { // AssociateDistributionWebACLResult
 * //   Id: "STRING_VALUE",
 * //   WebACLArn: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateDistributionWebACLCommandInput - {@link AssociateDistributionWebACLCommandInput}
 * @returns {@link AssociateDistributionWebACLCommandOutput}
 * @see {@link AssociateDistributionWebACLCommandInput} for command's `input` shape.
 * @see {@link AssociateDistributionWebACLCommandOutput} for command's `response` shape.
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
export class AssociateDistributionWebACLCommand extends $Command
  .classBuilder<
    AssociateDistributionWebACLCommandInput,
    AssociateDistributionWebACLCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "AssociateDistributionWebACL", {})
  .n("CloudFrontClient", "AssociateDistributionWebACLCommand")
  .f(void 0, void 0)
  .ser(se_AssociateDistributionWebACLCommand)
  .de(de_AssociateDistributionWebACLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDistributionWebACLRequest;
      output: AssociateDistributionWebACLResult;
    };
    sdk: {
      input: AssociateDistributionWebACLCommandInput;
      output: AssociateDistributionWebACLCommandOutput;
    };
  };
}
