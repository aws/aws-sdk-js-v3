// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutEncryptionConfigRequest, PutEncryptionConfigResult } from "../models/models_0";
import { PutEncryptionConfig } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

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
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "PutEncryptionConfig", {})
  .n("XRayClient", "PutEncryptionConfigCommand")
  .sc(PutEncryptionConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEncryptionConfigRequest;
      output: PutEncryptionConfigResult;
    };
    sdk: {
      input: PutEncryptionConfigCommandInput;
      output: PutEncryptionConfigCommandOutput;
    };
  };
}
