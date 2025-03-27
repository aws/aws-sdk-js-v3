// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { UpdateEncryptionKeyRequest, UpdateEncryptionKeyResponse } from "../models/models_1";
import { de_UpdateEncryptionKeyCommand, se_UpdateEncryptionKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEncryptionKeyCommand}.
 */
export interface UpdateEncryptionKeyCommandInput extends UpdateEncryptionKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEncryptionKeyCommand}.
 */
export interface UpdateEncryptionKeyCommandOutput extends UpdateEncryptionKeyResponse, __MetadataBearer {}

/**
 * <p>Updates an encryption key. A <code>ResourceNotFoundException</code> means that an Amazon Web Services owned key is being used for encryption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateEncryptionKeyCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateEncryptionKeyCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // UpdateEncryptionKeyRequest
 *   kmsKeyId: "STRING_VALUE", // required
 *   scanType: "STRING_VALUE", // required
 *   resourceType: "STRING_VALUE", // required
 * };
 * const command = new UpdateEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEncryptionKeyCommandInput - {@link UpdateEncryptionKeyCommandInput}
 * @returns {@link UpdateEncryptionKeyCommandOutput}
 * @see {@link UpdateEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class UpdateEncryptionKeyCommand extends $Command
  .classBuilder<
    UpdateEncryptionKeyCommandInput,
    UpdateEncryptionKeyCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "UpdateEncryptionKey", {})
  .n("Inspector2Client", "UpdateEncryptionKeyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEncryptionKeyCommand)
  .de(de_UpdateEncryptionKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEncryptionKeyRequest;
      output: {};
    };
    sdk: {
      input: UpdateEncryptionKeyCommandInput;
      output: UpdateEncryptionKeyCommandOutput;
    };
  };
}
