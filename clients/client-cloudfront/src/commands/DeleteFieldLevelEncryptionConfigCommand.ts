// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFieldLevelEncryptionConfigRequest } from "../models/models_0";
import { DeleteFieldLevelEncryptionConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFieldLevelEncryptionConfigCommand}.
 */
export interface DeleteFieldLevelEncryptionConfigCommandInput extends DeleteFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFieldLevelEncryptionConfigCommand}.
 */
export interface DeleteFieldLevelEncryptionConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Remove a field-level encryption configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteFieldLevelEncryptionConfigRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFieldLevelEncryptionConfigCommandInput - {@link DeleteFieldLevelEncryptionConfigCommandInput}
 * @returns {@link DeleteFieldLevelEncryptionConfigCommandOutput}
 * @see {@link DeleteFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link FieldLevelEncryptionConfigInUse} (client fault)
 *  <p>The specified configuration for field-level encryption is in use.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *  <p>The specified configuration for field-level encryption doesn't exist.</p>
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
export class DeleteFieldLevelEncryptionConfigCommand extends $Command
  .classBuilder<
    DeleteFieldLevelEncryptionConfigCommandInput,
    DeleteFieldLevelEncryptionConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteFieldLevelEncryptionConfig", {})
  .n("CloudFrontClient", "DeleteFieldLevelEncryptionConfigCommand")
  .sc(DeleteFieldLevelEncryptionConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFieldLevelEncryptionConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteFieldLevelEncryptionConfigCommandInput;
      output: DeleteFieldLevelEncryptionConfigCommandOutput;
    };
  };
}
