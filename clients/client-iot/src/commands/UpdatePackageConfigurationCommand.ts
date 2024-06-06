// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdatePackageConfigurationRequest, UpdatePackageConfigurationResponse } from "../models/models_2";
import { de_UpdatePackageConfigurationCommand, se_UpdatePackageConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageConfigurationCommand}.
 */
export interface UpdatePackageConfigurationCommandInput extends UpdatePackageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageConfigurationCommand}.
 */
export interface UpdatePackageConfigurationCommandOutput extends UpdatePackageConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the software package configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdatePackageConfiguration</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">iam:PassRole</a> actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdatePackageConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdatePackageConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdatePackageConfigurationRequest
 *   versionUpdateByJobsConfig: { // VersionUpdateByJobsConfig
 *     enabled: true || false,
 *     roleArn: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePackageConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePackageConfigurationCommandInput - {@link UpdatePackageConfigurationCommandInput}
 * @returns {@link UpdatePackageConfigurationCommandOutput}
 * @see {@link UpdatePackageConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource with the same name already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class UpdatePackageConfigurationCommand extends $Command
  .classBuilder<
    UpdatePackageConfigurationCommandInput,
    UpdatePackageConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdatePackageConfiguration", {})
  .n("IoTClient", "UpdatePackageConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePackageConfigurationCommand)
  .de(de_UpdatePackageConfigurationCommand)
  .build() {}
