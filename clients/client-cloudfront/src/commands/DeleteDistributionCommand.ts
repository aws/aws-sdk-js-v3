// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDistributionRequest } from "../models/models_1";
import { de_DeleteDistributionCommand, se_DeleteDistributionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDistributionCommand}.
 */
export interface DeleteDistributionCommandInput extends DeleteDistributionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDistributionCommand}.
 */
export interface DeleteDistributionCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteDistributionRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteDistributionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDistributionCommandInput - {@link DeleteDistributionCommandInput}
 * @returns {@link DeleteDistributionCommandOutput}
 * @see {@link DeleteDistributionCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link DistributionNotDisabled} (client fault)
 *  <p>The specified CloudFront distribution is not disabled. You must disable the distribution
 * 			before you can delete it.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteDistributionCommand extends $Command
  .classBuilder<
    DeleteDistributionCommandInput,
    DeleteDistributionCommandOutput,
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
  .s("Cloudfront2020_05_31", "DeleteDistribution", {})
  .n("CloudFrontClient", "DeleteDistributionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDistributionCommand)
  .de(de_DeleteDistributionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDistributionRequest;
      output: {};
    };
    sdk: {
      input: DeleteDistributionCommandInput;
      output: DeleteDistributionCommandOutput;
    };
  };
}
