// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateProjectRequest, CreateProjectResult } from "../models/models_0";
import { CreateProject } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandInput extends CreateProjectRequest {}
/**
 * @public
 *
 * The output of {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandOutput extends CreateProjectResult, __MetadataBearer {}

/**
 * <p>Creates a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateProjectRequest
 *   name: "STRING_VALUE", // required
 *   defaultJobTimeoutMinutes: Number("int"),
 *   vpcConfig: { // VpcConfig
 *     securityGroupIds: [ // VpcSecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     subnetIds: [ // VpcSubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     vpcId: "STRING_VALUE", // required
 *   },
 *   environmentVariables: [ // EnvironmentVariables
 *     { // EnvironmentVariable
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   executionRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateProjectResult
 * //   project: { // Project
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     defaultJobTimeoutMinutes: Number("int"),
 * //     created: new Date("TIMESTAMP"),
 * //     vpcConfig: { // VpcConfig
 * //       securityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // VpcSubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE", // required
 * //     },
 * //     environmentVariables: [ // EnvironmentVariables
 * //       { // EnvironmentVariable
 * //         name: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     executionRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateProjectCommandInput - {@link CreateProjectCommandInput}
 * @returns {@link CreateProjectCommandOutput}
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link TagOperationException} (client fault)
 *  <p>The operation was not successful. Try again.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class CreateProjectCommand extends $Command
  .classBuilder<
    CreateProjectCommandInput,
    CreateProjectCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "CreateProject", {})
  .n("DeviceFarmClient", "CreateProjectCommand")
  .sc(CreateProject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProjectRequest;
      output: CreateProjectResult;
    };
    sdk: {
      input: CreateProjectCommandInput;
      output: CreateProjectCommandOutput;
    };
  };
}
