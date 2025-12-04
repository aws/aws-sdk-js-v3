// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { ResetEncryptionKeyRequest, ResetEncryptionKeyResponse } from "../models/models_0";
import { ResetEncryptionKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetEncryptionKeyCommand}.
 */
export interface ResetEncryptionKeyCommandInput extends ResetEncryptionKeyRequest {}
/**
 * @public
 *
 * The output of {@link ResetEncryptionKeyCommand}.
 */
export interface ResetEncryptionKeyCommandOutput extends ResetEncryptionKeyResponse, __MetadataBearer {}

/**
 * <p>Resets an encryption key. After the key is reset your resources will be encrypted by an
 *          Amazon Web Services owned key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ResetEncryptionKeyCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ResetEncryptionKeyCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ResetEncryptionKeyRequest
 *   scanType: "STRING_VALUE", // required
 *   resourceType: "STRING_VALUE", // required
 * };
 * const command = new ResetEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetEncryptionKeyCommandInput - {@link ResetEncryptionKeyCommandInput}
 * @returns {@link ResetEncryptionKeyCommandOutput}
 * @see {@link ResetEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link ResetEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
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
export class ResetEncryptionKeyCommand extends $Command
  .classBuilder<
    ResetEncryptionKeyCommandInput,
    ResetEncryptionKeyCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "ResetEncryptionKey", {})
  .n("Inspector2Client", "ResetEncryptionKeyCommand")
  .sc(ResetEncryptionKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetEncryptionKeyRequest;
      output: {};
    };
    sdk: {
      input: ResetEncryptionKeyCommandInput;
      output: ResetEncryptionKeyCommandOutput;
    };
  };
}
