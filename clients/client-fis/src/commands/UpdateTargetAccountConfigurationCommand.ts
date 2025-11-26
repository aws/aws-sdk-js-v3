// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import type {
  UpdateTargetAccountConfigurationRequest,
  UpdateTargetAccountConfigurationResponse,
} from "../models/models_0";
import { UpdateTargetAccountConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTargetAccountConfigurationCommand}.
 */
export interface UpdateTargetAccountConfigurationCommandInput extends UpdateTargetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTargetAccountConfigurationCommand}.
 */
export interface UpdateTargetAccountConfigurationCommandOutput
  extends UpdateTargetAccountConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the target account configuration for the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, UpdateTargetAccountConfigurationCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, UpdateTargetAccountConfigurationCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // UpdateTargetAccountConfigurationRequest
 *   experimentTemplateId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateTargetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTargetAccountConfigurationResponse
 * //   targetAccountConfiguration: { // TargetAccountConfiguration
 * //     roleArn: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTargetAccountConfigurationCommandInput - {@link UpdateTargetAccountConfigurationCommandInput}
 * @returns {@link UpdateTargetAccountConfigurationCommandOutput}
 * @see {@link UpdateTargetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateTargetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class UpdateTargetAccountConfigurationCommand extends $Command
  .classBuilder<
    UpdateTargetAccountConfigurationCommandInput,
    UpdateTargetAccountConfigurationCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "UpdateTargetAccountConfiguration", {})
  .n("FisClient", "UpdateTargetAccountConfigurationCommand")
  .sc(UpdateTargetAccountConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTargetAccountConfigurationRequest;
      output: UpdateTargetAccountConfigurationResponse;
    };
    sdk: {
      input: UpdateTargetAccountConfigurationCommandInput;
      output: UpdateTargetAccountConfigurationCommandOutput;
    };
  };
}
