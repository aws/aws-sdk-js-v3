// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEncryptionConfigRequest, GetEncryptionConfigResult } from "../models/models_0";
import { GetEncryptionConfig } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEncryptionConfigCommand}.
 */
export interface GetEncryptionConfigCommandInput extends GetEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetEncryptionConfigCommand}.
 */
export interface GetEncryptionConfigCommandOutput extends GetEncryptionConfigResult, __MetadataBearer {}

/**
 * <p>Retrieves the current encryption configuration for X-Ray data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetEncryptionConfigCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetEncryptionConfigCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = {};
 * const command = new GetEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetEncryptionConfigResult
 * //   EncryptionConfig: { // EncryptionConfig
 * //     KeyId: "STRING_VALUE",
 * //     Status: "UPDATING" || "ACTIVE",
 * //     Type: "NONE" || "KMS",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEncryptionConfigCommandInput - {@link GetEncryptionConfigCommandInput}
 * @returns {@link GetEncryptionConfigCommandOutput}
 * @see {@link GetEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetEncryptionConfigCommandOutput} for command's `response` shape.
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
export class GetEncryptionConfigCommand extends $Command
  .classBuilder<
    GetEncryptionConfigCommandInput,
    GetEncryptionConfigCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetEncryptionConfig", {})
  .n("XRayClient", "GetEncryptionConfigCommand")
  .sc(GetEncryptionConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetEncryptionConfigResult;
    };
    sdk: {
      input: GetEncryptionConfigCommandInput;
      output: GetEncryptionConfigCommandOutput;
    };
  };
}
