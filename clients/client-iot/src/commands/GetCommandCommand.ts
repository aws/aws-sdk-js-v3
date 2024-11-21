// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetCommandRequest, GetCommandResponse } from "../models/models_1";
import { de_GetCommandCommand, se_GetCommandCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCommandCommand}.
 */
export interface GetCommandCommandInput extends GetCommandRequest {}
/**
 * @public
 *
 * The output of {@link GetCommandCommand}.
 */
export interface GetCommandCommandOutput extends GetCommandResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetCommandCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetCommandCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetCommandRequest
 *   commandId: "STRING_VALUE", // required
 * };
 * const command = new GetCommandCommand(input);
 * const response = await client.send(command);
 * // { // GetCommandResponse
 * //   commandId: "STRING_VALUE",
 * //   commandArn: "STRING_VALUE",
 * //   namespace: "AWS-IoT" || "AWS-IoT-FleetWise",
 * //   displayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   mandatoryParameters: [ // CommandParameterList
 * //     { // CommandParameter
 * //       name: "STRING_VALUE", // required
 * //       value: { // CommandParameterValue
 * //         S: "STRING_VALUE",
 * //         B: true || false,
 * //         I: Number("int"),
 * //         L: Number("long"),
 * //         D: Number("double"),
 * //         BIN: new Uint8Array(),
 * //         UL: "STRING_VALUE",
 * //       },
 * //       defaultValue: {
 * //         S: "STRING_VALUE",
 * //         B: true || false,
 * //         I: Number("int"),
 * //         L: Number("long"),
 * //         D: Number("double"),
 * //         BIN: new Uint8Array(),
 * //         UL: "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   payload: { // CommandPayload
 * //     content: new Uint8Array(),
 * //     contentType: "STRING_VALUE",
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   deprecated: true || false,
 * //   pendingDeletion: true || false,
 * // };
 *
 * ```
 *
 * @param GetCommandCommandInput - {@link GetCommandCommandInput}
 * @returns {@link GetCommandCommandOutput}
 * @see {@link GetCommandCommandInput} for command's `input` shape.
 * @see {@link GetCommandCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
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
 * @public
 */
export class GetCommandCommand extends $Command
  .classBuilder<
    GetCommandCommandInput,
    GetCommandCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "GetCommand", {})
  .n("IoTClient", "GetCommandCommand")
  .f(void 0, void 0)
  .ser(se_GetCommandCommand)
  .de(de_GetCommandCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommandRequest;
      output: GetCommandResponse;
    };
    sdk: {
      input: GetCommandCommandInput;
      output: GetCommandCommandOutput;
    };
  };
}
