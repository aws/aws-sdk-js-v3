// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UndeploySystemInstanceRequest, UndeploySystemInstanceResponse } from "../models/models_0";
import { de_UndeploySystemInstanceCommand, se_UndeploySystemInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UndeploySystemInstanceCommand}.
 */
export interface UndeploySystemInstanceCommandInput extends UndeploySystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UndeploySystemInstanceCommand}.
 */
export interface UndeploySystemInstanceCommandOutput extends UndeploySystemInstanceResponse, __MetadataBearer {}

/**
 * <p>Removes a system instance from its target (Cloud or Greengrass).</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UndeploySystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UndeploySystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // UndeploySystemInstanceRequest
 *   id: "STRING_VALUE",
 * };
 * const command = new UndeploySystemInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UndeploySystemInstanceResponse
 * //   summary: { // SystemInstanceSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "NOT_DEPLOYED" || "BOOTSTRAP" || "DEPLOY_IN_PROGRESS" || "DEPLOYED_IN_TARGET" || "UNDEPLOY_IN_PROGRESS" || "FAILED" || "PENDING_DELETE" || "DELETED_IN_TARGET",
 * //     target: "GREENGRASS" || "CLOUD",
 * //     greengrassGroupName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     greengrassGroupId: "STRING_VALUE",
 * //     greengrassGroupVersionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UndeploySystemInstanceCommandInput - {@link UndeploySystemInstanceCommandInput}
 * @returns {@link UndeploySystemInstanceCommandOutput}
 * @see {@link UndeploySystemInstanceCommandInput} for command's `input` shape.
 * @see {@link UndeploySystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 * @public
 */
export class UndeploySystemInstanceCommand extends $Command
  .classBuilder<
    UndeploySystemInstanceCommandInput,
    UndeploySystemInstanceCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "UndeploySystemInstance", {})
  .n("IoTThingsGraphClient", "UndeploySystemInstanceCommand")
  .f(void 0, void 0)
  .ser(se_UndeploySystemInstanceCommand)
  .de(de_UndeploySystemInstanceCommand)
  .build() {}
