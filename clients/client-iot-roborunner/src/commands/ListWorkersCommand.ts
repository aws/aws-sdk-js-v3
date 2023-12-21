// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { ListWorkersRequest, ListWorkersResponse } from "../models/models_0";
import { de_ListWorkersCommand, se_ListWorkersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkersCommand}.
 */
export interface ListWorkersCommandInput extends ListWorkersRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkersCommand}.
 */
export interface ListWorkersCommandOutput extends ListWorkersResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to list workers
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, ListWorkersCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, ListWorkersCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // ListWorkersRequest
 *   site: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   fleet: "STRING_VALUE",
 * };
 * const command = new ListWorkersCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkersResponse
 * //   nextToken: "STRING_VALUE",
 * //   workers: [ // Workers
 * //     { // Worker
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       fleet: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       name: "STRING_VALUE", // required
 * //       site: "STRING_VALUE", // required
 * //       additionalTransientProperties: "STRING_VALUE",
 * //       additionalFixedProperties: "STRING_VALUE",
 * //       vendorProperties: { // VendorProperties
 * //         vendorWorkerId: "STRING_VALUE", // required
 * //         vendorWorkerIpAddress: "STRING_VALUE",
 * //         vendorAdditionalTransientProperties: "STRING_VALUE",
 * //         vendorAdditionalFixedProperties: "STRING_VALUE",
 * //       },
 * //       position: { // PositionCoordinates Union: only one key present
 * //         cartesianCoordinates: { // CartesianCoordinates
 * //           x: Number("double"), // required
 * //           y: Number("double"), // required
 * //           z: Number("double"),
 * //         },
 * //       },
 * //       orientation: { // Orientation Union: only one key present
 * //         degrees: Number("double"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkersCommandInput - {@link ListWorkersCommandInput}
 * @returns {@link ListWorkersCommandOutput}
 * @see {@link ListWorkersCommandInput} for command's `input` shape.
 * @see {@link ListWorkersCommandOutput} for command's `response` shape.
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
export class ListWorkersCommand extends $Command
  .classBuilder<
    ListWorkersCommandInput,
    ListWorkersCommandOutput,
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
  .s("IoTRoboRunner", "ListWorkers", {})
  .n("IoTRoboRunnerClient", "ListWorkersCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkersCommand)
  .de(de_ListWorkersCommand)
  .build() {}
