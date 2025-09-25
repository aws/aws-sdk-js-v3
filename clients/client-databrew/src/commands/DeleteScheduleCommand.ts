// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteScheduleRequest, DeleteScheduleResponse } from "../models/models_0";
import { DeleteSchedule } from "../schemas/schemas_6_Schedule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScheduleCommand}.
 */
export interface DeleteScheduleCommandInput extends DeleteScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScheduleCommand}.
 */
export interface DeleteScheduleCommandOutput extends DeleteScheduleResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DeleteScheduleRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteScheduleResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteScheduleCommandInput - {@link DeleteScheduleCommandInput}
 * @returns {@link DeleteScheduleCommandOutput}
 * @see {@link DeleteScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleCommandOutput} for command's `response` shape.
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
export class DeleteScheduleCommand extends $Command
  .classBuilder<
    DeleteScheduleCommandInput,
    DeleteScheduleCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DeleteSchedule", {})
  .n("DataBrewClient", "DeleteScheduleCommand")
  .sc(DeleteSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduleRequest;
      output: DeleteScheduleResponse;
    };
    sdk: {
      input: DeleteScheduleCommandInput;
      output: DeleteScheduleCommandOutput;
    };
  };
}
