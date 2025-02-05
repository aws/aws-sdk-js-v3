// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOriginAccessControlRequest } from "../models/models_1";
import { de_DeleteOriginAccessControlCommand, se_DeleteOriginAccessControlCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOriginAccessControlCommand}.
 */
export interface DeleteOriginAccessControlCommandInput extends DeleteOriginAccessControlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOriginAccessControlCommand}.
 */
export interface DeleteOriginAccessControlCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a CloudFront origin access control.</p>
 *          <p>You cannot delete an origin access control if it's in use. First, update all
 * 			distributions to remove the origin access control from all origins, then delete the
 * 			origin access control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteOriginAccessControlRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOriginAccessControlCommandInput - {@link DeleteOriginAccessControlCommandInput}
 * @returns {@link DeleteOriginAccessControlCommandOutput}
 * @see {@link DeleteOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginAccessControlCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchOriginAccessControl} (client fault)
 *  <p>The origin access control does not exist.</p>
 *
 * @throws {@link OriginAccessControlInUse} (client fault)
 *  <p>Cannot delete the origin access control because it's in use by one or more
 * 			distributions.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class DeleteOriginAccessControlCommand extends $Command
  .classBuilder<
    DeleteOriginAccessControlCommandInput,
    DeleteOriginAccessControlCommandOutput,
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
  .s("Cloudfront2020_05_31", "DeleteOriginAccessControl", {})
  .n("CloudFrontClient", "DeleteOriginAccessControlCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOriginAccessControlCommand)
  .de(de_DeleteOriginAccessControlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOriginAccessControlRequest;
      output: {};
    };
    sdk: {
      input: DeleteOriginAccessControlCommandInput;
      output: DeleteOriginAccessControlCommandOutput;
    };
  };
}
