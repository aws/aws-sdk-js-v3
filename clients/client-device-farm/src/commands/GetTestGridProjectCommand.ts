// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTestGridProjectRequest, GetTestGridProjectResult } from "../models/models_0";
import { GetTestGridProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTestGridProjectCommand}.
 */
export interface GetTestGridProjectCommandInput extends GetTestGridProjectRequest {}
/**
 * @public
 *
 * The output of {@link GetTestGridProjectCommand}.
 */
export interface GetTestGridProjectCommandOutput extends GetTestGridProjectResult, __MetadataBearer {}

/**
 * <p>Retrieves information about a Selenium testing project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // GetTestGridProjectRequest
 *   projectArn: "STRING_VALUE", // required
 * };
 * const command = new GetTestGridProjectCommand(input);
 * const response = await client.send(command);
 * // { // GetTestGridProjectResult
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
 * @param GetTestGridProjectCommandInput - {@link GetTestGridProjectCommandInput}
 * @returns {@link GetTestGridProjectCommandOutput}
 * @see {@link GetTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link GetTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
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
export class GetTestGridProjectCommand extends $Command
  .classBuilder<
    GetTestGridProjectCommandInput,
    GetTestGridProjectCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "GetTestGridProject", {})
  .n("DeviceFarmClient", "GetTestGridProjectCommand")
  .sc(GetTestGridProject$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestGridProjectRequest;
      output: GetTestGridProjectResult;
    };
    sdk: {
      input: GetTestGridProjectCommandInput;
      output: GetTestGridProjectCommandOutput;
    };
  };
}
