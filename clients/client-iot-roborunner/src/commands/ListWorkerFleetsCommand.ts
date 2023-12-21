// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { ListWorkerFleetsRequest, ListWorkerFleetsResponse } from "../models/models_0";
import { de_ListWorkerFleetsCommand, se_ListWorkerFleetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkerFleetsCommand}.
 */
export interface ListWorkerFleetsCommandInput extends ListWorkerFleetsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkerFleetsCommand}.
 */
export interface ListWorkerFleetsCommandOutput extends ListWorkerFleetsResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to list worker fleets
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, ListWorkerFleetsCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, ListWorkerFleetsCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // ListWorkerFleetsRequest
 *   site: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkerFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkerFleetsResponse
 * //   nextToken: "STRING_VALUE",
 * //   workerFleets: [ // WorkerFleets
 * //     { // WorkerFleet
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       site: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       additionalFixedProperties: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkerFleetsCommandInput - {@link ListWorkerFleetsCommandInput}
 * @returns {@link ListWorkerFleetsCommandOutput}
 * @see {@link ListWorkerFleetsCommandInput} for command's `input` shape.
 * @see {@link ListWorkerFleetsCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *   User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Exception thrown if something goes wrong within the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Exception thrown if a resource referenced in the request doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Exception thrown if the api has been called too quickly be the client.
 *
 * @throws {@link ValidationException} (client fault)
 *  Exception thrown if an invalid parameter is provided to an API.
 *
 * @throws {@link IoTRoboRunnerServiceException}
 * <p>Base exception class for all service exceptions from IoTRoboRunner service.</p>
 *
 */
export class ListWorkerFleetsCommand extends $Command
  .classBuilder<
    ListWorkerFleetsCommandInput,
    ListWorkerFleetsCommandOutput,
    IoTRoboRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: IoTRoboRunnerClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTRoboRunner", "ListWorkerFleets", {})
  .n("IoTRoboRunnerClient", "ListWorkerFleetsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkerFleetsCommand)
  .de(de_ListWorkerFleetsCommand)
  .build() {}
