// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateScheduleRequest, UpdateScheduleResponse } from "../models/models_0";
import { UpdateSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduleCommand}.
 */
export interface UpdateScheduleCommandInput extends UpdateScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduleCommand}.
 */
export interface UpdateScheduleCommandOutput extends UpdateScheduleResponse, __MetadataBearer {}

/**
 * <p>Modifies the definition of an existing DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // UpdateScheduleRequest
 *   JobNames: [ // JobNameList
 *     "STRING_VALUE",
 *   ],
 *   CronExpression: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new UpdateScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduleResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateScheduleCommandInput - {@link UpdateScheduleCommandInput}
 * @returns {@link UpdateScheduleCommandOutput}
 * @see {@link UpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
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
export class UpdateScheduleCommand extends $Command
  .classBuilder<
    UpdateScheduleCommandInput,
    UpdateScheduleCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "UpdateSchedule", {})
  .n("DataBrewClient", "UpdateScheduleCommand")
  .sc(UpdateSchedule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScheduleRequest;
      output: UpdateScheduleResponse;
    };
    sdk: {
      input: UpdateScheduleCommandInput;
      output: UpdateScheduleCommandOutput;
    };
  };
}
