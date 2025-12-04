// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { CreateCommandRequest, CreateCommandResponse } from "../models/models_0";
import { CreateCommand } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCommandCommand}.
 */
export interface CreateCommandCommandInput extends CreateCommandRequest {}
/**
 * @public
 *
 * The output of {@link CreateCommandCommand}.
 */
export interface CreateCommandCommandOutput extends CreateCommandResponse, __MetadataBearer {}

/**
 * <p>Creates a command. A command contains reusable configurations that can be applied
 *             before they are sent to the devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCommandCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCommandCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateCommandRequest
 *   commandId: "STRING_VALUE", // required
 *   namespace: "AWS-IoT" || "AWS-IoT-FleetWise",
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   payload: { // CommandPayload
 *     content: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     contentType: "STRING_VALUE",
 *   },
 *   mandatoryParameters: [ // CommandParameterList
 *     { // CommandParameter
 *       name: "STRING_VALUE", // required
 *       value: { // CommandParameterValue
 *         S: "STRING_VALUE",
 *         B: true || false,
 *         I: Number("int"),
 *         L: Number("long"),
 *         D: Number("double"),
 *         BIN: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         UL: "STRING_VALUE",
 *       },
 *       defaultValue: {
 *         S: "STRING_VALUE",
 *         B: true || false,
 *         I: Number("int"),
 *         L: Number("long"),
 *         D: Number("double"),
 *         BIN: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         UL: "STRING_VALUE",
 *       },
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   roleArn: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCommandCommand(input);
 * const response = await client.send(command);
 * // { // CreateCommandResponse
 * //   commandId: "STRING_VALUE",
 * //   commandArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCommandCommandInput - {@link CreateCommandCommandInput}
 * @returns {@link CreateCommandCommandOutput}
 * @see {@link CreateCommandCommandInput} for command's `input` shape.
 * @see {@link CreateCommandCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quota has been exceeded.</p>
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
export class CreateCommandCommand extends $Command
  .classBuilder<
    CreateCommandCommandInput,
    CreateCommandCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateCommand", {})
  .n("IoTClient", "CreateCommandCommand")
  .sc(CreateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCommandRequest;
      output: CreateCommandResponse;
    };
    sdk: {
      input: CreateCommandCommandInput;
      output: CreateCommandCommandOutput;
    };
  };
}
