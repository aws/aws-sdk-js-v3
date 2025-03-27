// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCloudFrontOriginAccessIdentityRequest } from "../models/models_1";
import {
  de_DeleteCloudFrontOriginAccessIdentityCommand,
  se_DeleteCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCloudFrontOriginAccessIdentityCommand}.
 */
export interface DeleteCloudFrontOriginAccessIdentityCommandInput extends DeleteCloudFrontOriginAccessIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCloudFrontOriginAccessIdentityCommand}.
 */
export interface DeleteCloudFrontOriginAccessIdentityCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete an origin access identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteCloudFrontOriginAccessIdentityRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudFrontOriginAccessIdentityCommandInput - {@link DeleteCloudFrontOriginAccessIdentityCommandInput}
 * @returns {@link DeleteCloudFrontOriginAccessIdentityCommandOutput}
 * @see {@link DeleteCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CloudFrontOriginAccessIdentityInUse} (client fault)
 *  <p>The Origin Access Identity specified is already in use.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchCloudFrontOriginAccessIdentity} (client fault)
 *  <p>The specified origin access identity does not exist.</p>
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
export class DeleteCloudFrontOriginAccessIdentityCommand extends $Command
  .classBuilder<
    DeleteCloudFrontOriginAccessIdentityCommandInput,
    DeleteCloudFrontOriginAccessIdentityCommandOutput,
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
  .s("Cloudfront2020_05_31", "DeleteCloudFrontOriginAccessIdentity", {})
  .n("CloudFrontClient", "DeleteCloudFrontOriginAccessIdentityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCloudFrontOriginAccessIdentityCommand)
  .de(de_DeleteCloudFrontOriginAccessIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudFrontOriginAccessIdentityRequest;
      output: {};
    };
    sdk: {
      input: DeleteCloudFrontOriginAccessIdentityCommandInput;
      output: DeleteCloudFrontOriginAccessIdentityCommandOutput;
    };
  };
}
