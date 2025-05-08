// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateDistributionTenantWebACLRequest,
  DisassociateDistributionTenantWebACLResult,
} from "../models/models_1";
import {
  de_DisassociateDistributionTenantWebACLCommand,
  se_DisassociateDistributionTenantWebACLCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateDistributionTenantWebACLCommand}.
 */
export interface DisassociateDistributionTenantWebACLCommandInput extends DisassociateDistributionTenantWebACLRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDistributionTenantWebACLCommand}.
 */
export interface DisassociateDistributionTenantWebACLCommandOutput
  extends DisassociateDistributionTenantWebACLResult,
    __MetadataBearer {}

/**
 * <p>Disassociates a distribution tenant from the WAF web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DisassociateDistributionTenantWebACLCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DisassociateDistributionTenantWebACLCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DisassociateDistributionTenantWebACLRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DisassociateDistributionTenantWebACLCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateDistributionTenantWebACLResult
 * //   Id: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateDistributionTenantWebACLCommandInput - {@link DisassociateDistributionTenantWebACLCommandInput}
 * @returns {@link DisassociateDistributionTenantWebACLCommandOutput}
 * @see {@link DisassociateDistributionTenantWebACLCommandInput} for command's `input` shape.
 * @see {@link DisassociateDistributionTenantWebACLCommandOutput} for command's `response` shape.
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
export class DisassociateDistributionTenantWebACLCommand extends $Command
  .classBuilder<
    DisassociateDistributionTenantWebACLCommandInput,
    DisassociateDistributionTenantWebACLCommandOutput,
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
  .s("Cloudfront2020_05_31", "DisassociateDistributionTenantWebACL", {})
  .n("CloudFrontClient", "DisassociateDistributionTenantWebACLCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateDistributionTenantWebACLCommand)
  .de(de_DisassociateDistributionTenantWebACLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDistributionTenantWebACLRequest;
      output: DisassociateDistributionTenantWebACLResult;
    };
    sdk: {
      input: DisassociateDistributionTenantWebACLCommandInput;
      output: DisassociateDistributionTenantWebACLCommandOutput;
    };
  };
}
