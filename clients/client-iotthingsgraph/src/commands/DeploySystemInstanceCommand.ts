// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeploySystemInstanceRequest, DeploySystemInstanceResponse } from "../models/models_0";
import { de_DeploySystemInstanceCommand, se_DeploySystemInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeploySystemInstanceCommand}.
 */
export interface DeploySystemInstanceCommandInput extends DeploySystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeploySystemInstanceCommand}.
 */
export interface DeploySystemInstanceCommandOutput extends DeploySystemInstanceResponse, __MetadataBearer {}

/**
 * <p>
 *             <b>Greengrass and Cloud Deployments</b>
 *          </p>
 *          <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p>
 *          <p>
 *             <b>Greengrass Deployments</b>
 *          </p>
 *          <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service
 *          resource file and then deploy it.</p>
 *          <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions
 *          to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeploySystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeploySystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DeploySystemInstanceRequest
 *   id: "STRING_VALUE",
 * };
 * const command = new DeploySystemInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeploySystemInstanceResponse
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
 * //   greengrassDeploymentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeploySystemInstanceCommandInput - {@link DeploySystemInstanceCommandInput}
 * @returns {@link DeploySystemInstanceCommandOutput}
 * @see {@link DeploySystemInstanceCommandInput} for command's `input` shape.
 * @see {@link DeploySystemInstanceCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeploySystemInstanceCommand extends $Command
  .classBuilder<
    DeploySystemInstanceCommandInput,
    DeploySystemInstanceCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "DeploySystemInstance", {})
  .n("IoTThingsGraphClient", "DeploySystemInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeploySystemInstanceCommand)
  .de(de_DeploySystemInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeploySystemInstanceRequest;
      output: DeploySystemInstanceResponse;
    };
    sdk: {
      input: DeploySystemInstanceCommandInput;
      output: DeploySystemInstanceCommandOutput;
    };
  };
}
