// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import {
  GetExperimentTargetAccountConfigurationRequest,
  GetExperimentTargetAccountConfigurationResponse,
} from "../models/models_0";
import {
  de_GetExperimentTargetAccountConfigurationCommand,
  se_GetExperimentTargetAccountConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExperimentTargetAccountConfigurationCommand}.
 */
export interface GetExperimentTargetAccountConfigurationCommandInput
  extends GetExperimentTargetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentTargetAccountConfigurationCommand}.
 */
export interface GetExperimentTargetAccountConfigurationCommandOutput
  extends GetExperimentTargetAccountConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the specified target account configuration of the experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentTargetAccountConfigurationCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentTargetAccountConfigurationCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // GetExperimentTargetAccountConfigurationRequest
 *   experimentId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new GetExperimentTargetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetExperimentTargetAccountConfigurationResponse
 * //   targetAccountConfiguration: { // ExperimentTargetAccountConfiguration
 * //     roleArn: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExperimentTargetAccountConfigurationCommandInput - {@link GetExperimentTargetAccountConfigurationCommandInput}
 * @returns {@link GetExperimentTargetAccountConfigurationCommandOutput}
 * @see {@link GetExperimentTargetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetExperimentTargetAccountConfigurationCommandOutput} for command's `response` shape.
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
export class GetExperimentTargetAccountConfigurationCommand extends $Command
  .classBuilder<
    GetExperimentTargetAccountConfigurationCommandInput,
    GetExperimentTargetAccountConfigurationCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "GetExperimentTargetAccountConfiguration", {})
  .n("FisClient", "GetExperimentTargetAccountConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetExperimentTargetAccountConfigurationCommand)
  .de(de_GetExperimentTargetAccountConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExperimentTargetAccountConfigurationRequest;
      output: GetExperimentTargetAccountConfigurationResponse;
    };
    sdk: {
      input: GetExperimentTargetAccountConfigurationCommandInput;
      output: GetExperimentTargetAccountConfigurationCommandOutput;
    };
  };
}
