// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTestGridProjectRequest, CreateTestGridProjectResult } from "../models/models_0";
import { de_CreateTestGridProjectCommand, se_CreateTestGridProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTestGridProjectCommand}.
 */
export interface CreateTestGridProjectCommandInput extends CreateTestGridProjectRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestGridProjectCommand}.
 */
export interface CreateTestGridProjectCommandOutput extends CreateTestGridProjectResult, __MetadataBearer {}

/**
 * <p>Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a>
 *          instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateTestGridProjectRequest
 *   name: "STRING_VALUE", // required
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
 * const command = new CreateTestGridProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestGridProjectResult
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
 * @param CreateTestGridProjectCommandInput - {@link CreateTestGridProjectCommandInput}
 * @returns {@link CreateTestGridProjectCommandOutput}
 * @see {@link CreateTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridProjectCommandOutput} for command's `response` shape.
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
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class CreateTestGridProjectCommand extends $Command
  .classBuilder<
    CreateTestGridProjectCommandInput,
    CreateTestGridProjectCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "CreateTestGridProject", {})
  .n("DeviceFarmClient", "CreateTestGridProjectCommand")
  .f(void 0, void 0)
  .ser(se_CreateTestGridProjectCommand)
  .de(de_CreateTestGridProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestGridProjectRequest;
      output: CreateTestGridProjectResult;
    };
    sdk: {
      input: CreateTestGridProjectCommandInput;
      output: CreateTestGridProjectCommandOutput;
    };
  };
}
