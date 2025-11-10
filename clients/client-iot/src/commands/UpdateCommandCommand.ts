// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateCommandRequest, UpdateCommandResponse } from "../models/models_2";
import { UpdateCommand } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCommandCommand}.
 */
export interface UpdateCommandCommandInput extends UpdateCommandRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCommandCommand}.
 */
export interface UpdateCommandCommandOutput extends UpdateCommandResponse, __MetadataBearer {}

/**
 * <p>Update information about a command or mark a command for deprecation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCommandCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCommandCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateCommandRequest
 *   commandId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   deprecated: true || false,
 * };
 * const command = new UpdateCommandCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCommandResponse
 * //   commandId: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   deprecated: true || false,
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateCommandCommandInput - {@link UpdateCommandCommandInput}
 * @returns {@link UpdateCommandCommandOutput}
 * @see {@link UpdateCommandCommandInput} for command's `input` shape.
 * @see {@link UpdateCommandCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
 *
 * @public
 */
export class UpdateCommandCommand extends $Command
  .classBuilder<
    UpdateCommandCommandInput,
    UpdateCommandCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "UpdateCommand", {})
  .n("IoTClient", "UpdateCommandCommand")
  .sc(UpdateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCommandRequest;
      output: UpdateCommandResponse;
    };
    sdk: {
      input: UpdateCommandCommandInput;
      output: UpdateCommandCommandOutput;
    };
  };
}
