// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/models_0";
import { PutRetentionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRetentionConfigurationCommand}.
 */
export interface PutRetentionConfigurationCommandInput extends PutRetentionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionConfigurationCommand}.
 */
export interface PutRetentionConfigurationCommandOutput extends PutRetentionConfigurationResponse, __MetadataBearer {}

/**
 * Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the `RetentionConfiguration` object and names the object as **default**. When you have a `RetentionConfiguration` object named **default**, calling the API modifies the default object.
 *
 * > **Note:** Currently, Config supports only one retention configuration per region in your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutRetentionConfigurationRequest
 *   RetentionPeriodInDays: Number("int"), // required
 * };
 * const command = new PutRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutRetentionConfigurationResponse
 * //   RetentionConfiguration: { // RetentionConfiguration
 * //     Name: "STRING_VALUE", // required
 * //     RetentionPeriodInDays: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRetentionConfigurationCommandInput - {@link PutRetentionConfigurationCommandInput}
 * @returns {@link PutRetentionConfigurationCommandOutput}
 * @see {@link PutRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link MaxNumberOfRetentionConfigurationsExceededException} (client fault)
 *
 * Failed to add the retention configuration because a retention configuration with that name already exists.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutRetentionConfigurationCommand extends command<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutRetentionConfiguration",
  PutRetentionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRetentionConfigurationRequest;
      output: PutRetentionConfigurationResponse;
    };
    sdk: {
      input: PutRetentionConfigurationCommandInput;
      output: PutRetentionConfigurationCommandOutput;
    };
  };
}
