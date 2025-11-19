// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFieldLevelEncryptionProfileRequest } from "../models/models_0";
import { DeleteFieldLevelEncryptionProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFieldLevelEncryptionProfileCommand}.
 */
export interface DeleteFieldLevelEncryptionProfileCommandInput extends DeleteFieldLevelEncryptionProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFieldLevelEncryptionProfileCommand}.
 */
export interface DeleteFieldLevelEncryptionProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Remove a field-level encryption profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteFieldLevelEncryptionProfileRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFieldLevelEncryptionProfileCommandInput - {@link DeleteFieldLevelEncryptionProfileCommandInput}
 * @returns {@link DeleteFieldLevelEncryptionProfileCommandOutput}
 * @see {@link DeleteFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link FieldLevelEncryptionProfileInUse} (client fault)
 *  <p>The specified profile for field-level encryption is in use.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *  <p>The specified profile for field-level encryption doesn't exist.</p>
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
export class DeleteFieldLevelEncryptionProfileCommand extends $Command
  .classBuilder<
    DeleteFieldLevelEncryptionProfileCommandInput,
    DeleteFieldLevelEncryptionProfileCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteFieldLevelEncryptionProfile", {})
  .n("CloudFrontClient", "DeleteFieldLevelEncryptionProfileCommand")
  .sc(DeleteFieldLevelEncryptionProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFieldLevelEncryptionProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteFieldLevelEncryptionProfileCommandInput;
      output: DeleteFieldLevelEncryptionProfileCommandOutput;
    };
  };
}
