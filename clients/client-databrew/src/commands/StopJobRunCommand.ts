// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopJobRunRequest, StopJobRunResponse } from "../models/models_0";
import { de_StopJobRunCommand, se_StopJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopJobRunCommand}.
 */
export interface StopJobRunCommandInput extends StopJobRunRequest {}
/**
 * @public
 *
 * The output of {@link StopJobRunCommand}.
 */
export interface StopJobRunCommandOutput extends StopJobRunResponse, __MetadataBearer {}

/**
 * <p>Stops a particular run of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StopJobRunCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StopJobRunCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // StopJobRunRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new StopJobRunCommand(input);
 * const response = await client.send(command);
 * // { // StopJobRunResponse
 * //   RunId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StopJobRunCommandInput - {@link StopJobRunCommandInput}
 * @returns {@link StopJobRunCommandOutput}
 * @see {@link StopJobRunCommandInput} for command's `input` shape.
 * @see {@link StopJobRunCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class StopJobRunCommand extends $Command
  .classBuilder<
    StopJobRunCommandInput,
    StopJobRunCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "StopJobRun", {})
  .n("DataBrewClient", "StopJobRunCommand")
  .f(void 0, void 0)
  .ser(se_StopJobRunCommand)
  .de(de_StopJobRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopJobRunRequest;
      output: StopJobRunResponse;
    };
    sdk: {
      input: StopJobRunCommandInput;
      output: StopJobRunCommandOutput;
    };
  };
}
