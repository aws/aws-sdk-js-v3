// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTestGridProjectRequest, UpdateTestGridProjectResult } from "../models/models_0";
import { UpdateTestGridProject } from "../schemas/schemas_5_TestGrid";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTestGridProjectCommand}.
 */
export interface UpdateTestGridProjectCommandInput extends UpdateTestGridProjectRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestGridProjectCommand}.
 */
export interface UpdateTestGridProjectCommandOutput extends UpdateTestGridProjectResult, __MetadataBearer {}

/**
 * <p>Change details of a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateTestGridProjectRequest
 *   projectArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   vpcConfig: { // TestGridVpcConfig
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     vpcId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateTestGridProjectCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTestGridProjectResult
 * //   testGridProject: { // TestGridProject
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     vpcConfig: { // TestGridVpcConfig
 * //       securityGroupIds: [ // SecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // SubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE", // required
 * //     },
 * //     created: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTestGridProjectCommandInput - {@link UpdateTestGridProjectCommandInput}
 * @returns {@link UpdateTestGridProjectCommandOutput}
 * @see {@link UpdateTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class UpdateTestGridProjectCommand extends $Command
  .classBuilder<
    UpdateTestGridProjectCommandInput,
    UpdateTestGridProjectCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "UpdateTestGridProject", {})
  .n("DeviceFarmClient", "UpdateTestGridProjectCommand")
  .sc(UpdateTestGridProject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTestGridProjectRequest;
      output: UpdateTestGridProjectResult;
    };
    sdk: {
      input: UpdateTestGridProjectCommandInput;
      output: UpdateTestGridProjectCommandOutput;
    };
  };
}
