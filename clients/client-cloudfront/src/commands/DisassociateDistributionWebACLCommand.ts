// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateDistributionWebACLRequest, DisassociateDistributionWebACLResult } from "../models/models_1";
import { DisassociateDistributionWebACL } from "../schemas/schemas_31_DisassociateDistributionWebACL";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateDistributionWebACLCommand}.
 */
export interface DisassociateDistributionWebACLCommandInput extends DisassociateDistributionWebACLRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDistributionWebACLCommand}.
 */
export interface DisassociateDistributionWebACLCommandOutput
  extends DisassociateDistributionWebACLResult,
    __MetadataBearer {}

/**
 * <p>Disassociates a distribution from the WAF web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DisassociateDistributionWebACLCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DisassociateDistributionWebACLCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DisassociateDistributionWebACLRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DisassociateDistributionWebACLCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateDistributionWebACLResult
 * //   Id: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateDistributionWebACLCommandInput - {@link DisassociateDistributionWebACLCommandInput}
 * @returns {@link DisassociateDistributionWebACLCommandOutput}
 * @see {@link DisassociateDistributionWebACLCommandInput} for command's `input` shape.
 * @see {@link DisassociateDistributionWebACLCommandOutput} for command's `response` shape.
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
export class DisassociateDistributionWebACLCommand extends $Command
  .classBuilder<
    DisassociateDistributionWebACLCommandInput,
    DisassociateDistributionWebACLCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DisassociateDistributionWebACL", {})
  .n("CloudFrontClient", "DisassociateDistributionWebACLCommand")
  .sc(DisassociateDistributionWebACL)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDistributionWebACLRequest;
      output: DisassociateDistributionWebACLResult;
    };
    sdk: {
      input: DisassociateDistributionWebACLCommandInput;
      output: DisassociateDistributionWebACLCommandOutput;
    };
  };
}
