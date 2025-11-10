// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetPackageConfigurationRequest, GetPackageConfigurationResponse } from "../models/models_1";
import { GetPackageConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPackageConfigurationCommand}.
 */
export interface GetPackageConfigurationCommandInput extends GetPackageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageConfigurationCommand}.
 */
export interface GetPackageConfigurationCommandOutput extends GetPackageConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified software package's configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPackageConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPackageConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPackageConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new GetPackageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageConfigurationResponse
 * //   versionUpdateByJobsConfig: { // VersionUpdateByJobsConfig
 * //     enabled: true || false,
 * //     roleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPackageConfigurationCommandInput - {@link GetPackageConfigurationCommandInput}
 * @returns {@link GetPackageConfigurationCommandOutput}
 * @see {@link GetPackageConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetPackageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class GetPackageConfigurationCommand extends $Command
  .classBuilder<
    GetPackageConfigurationCommandInput,
    GetPackageConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetPackageConfiguration", {})
  .n("IoTClient", "GetPackageConfigurationCommand")
  .sc(GetPackageConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPackageConfigurationResponse;
    };
    sdk: {
      input: GetPackageConfigurationCommandInput;
      output: GetPackageConfigurationCommandOutput;
    };
  };
}
