// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutEncryptionConfigRequest, PutEncryptionConfigResult } from "../models/models_0";
import { de_PutEncryptionConfigCommand, se_PutEncryptionConfigCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEncryptionConfigCommand}.
 */
export interface PutEncryptionConfigCommandInput extends PutEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutEncryptionConfigCommand}.
 */
export interface PutEncryptionConfigCommandOutput extends PutEncryptionConfigResult, __MetadataBearer {}

/**
 * <p>Updates the encryption configuration for X-Ray data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutEncryptionConfigCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutEncryptionConfigCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // PutEncryptionConfigRequest
 *   KeyId: "STRING_VALUE",
 *   Type: "NONE" || "KMS", // required
 * };
 * const command = new PutEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutEncryptionConfigResult
 * //   EncryptionConfig: { // EncryptionConfig
 * //     KeyId: "STRING_VALUE",
 * //     Status: "UPDATING" || "ACTIVE",
 * //     Type: "NONE" || "KMS",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutEncryptionConfigCommandInput - {@link PutEncryptionConfigCommandInput}
 * @returns {@link PutEncryptionConfigCommandOutput}
 * @see {@link PutEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link PutEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 * @public
 */
export class PutEncryptionConfigCommand extends $Command
  .classBuilder<
    PutEncryptionConfigCommandInput,
    PutEncryptionConfigCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "PutEncryptionConfig", {})
  .n("XRayClient", "PutEncryptionConfigCommand")
  .f(void 0, void 0)
  .ser(se_PutEncryptionConfigCommand)
  .de(de_PutEncryptionConfigCommand)
  .build() {}
