// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateTestGridUrlRequest,
  CreateTestGridUrlResult,
  CreateTestGridUrlResultFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateTestGridUrlCommand, se_CreateTestGridUrlCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTestGridUrlCommand}.
 */
export interface CreateTestGridUrlCommandInput extends CreateTestGridUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestGridUrlCommand}.
 */
export interface CreateTestGridUrlCommandOutput extends CreateTestGridUrlResult, __MetadataBearer {}

/**
 * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
 *          constructor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridUrlCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridUrlCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateTestGridUrlRequest
 *   projectArn: "STRING_VALUE", // required
 *   expiresInSeconds: Number("int"), // required
 * };
 * const command = new CreateTestGridUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestGridUrlResult
 * //   url: "STRING_VALUE",
 * //   expires: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateTestGridUrlCommandInput - {@link CreateTestGridUrlCommandInput}
 * @returns {@link CreateTestGridUrlCommandOutput}
 * @see {@link CreateTestGridUrlCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridUrlCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class CreateTestGridUrlCommand extends $Command
  .classBuilder<
    CreateTestGridUrlCommandInput,
    CreateTestGridUrlCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "CreateTestGridUrl", {})
  .n("DeviceFarmClient", "CreateTestGridUrlCommand")
  .f(void 0, CreateTestGridUrlResultFilterSensitiveLog)
  .ser(se_CreateTestGridUrlCommand)
  .de(de_CreateTestGridUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestGridUrlRequest;
      output: CreateTestGridUrlResult;
    };
    sdk: {
      input: CreateTestGridUrlCommandInput;
      output: CreateTestGridUrlCommandOutput;
    };
  };
}
