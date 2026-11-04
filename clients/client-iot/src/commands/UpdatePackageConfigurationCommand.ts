// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePackageConfigurationRequest, UpdatePackageConfigurationResponse } from "../models/models_2";
import { UpdatePackageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the software package configuration.
 *
 * Requires permission to access the [UpdatePackageConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) and [iam:PassRole](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html) actions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdatePackageConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdatePackageConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdatePackageConfigurationCommand extends command<UpdatePackageConfigurationCommandInput, UpdatePackageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePackageConfiguration",
  UpdatePackageConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePackageConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdatePackageConfigurationCommandInput;
      output: UpdatePackageConfigurationCommandOutput;
    };
  };
}
