// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTestConfigurationRequest, UpdateTestConfigurationResponse } from "../models/models_0";
import { de_UpdateTestConfigurationCommand, se_UpdateTestConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTestConfigurationCommand}.
 */
export interface UpdateTestConfigurationCommandInput extends UpdateTestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestConfigurationCommand}.
 */
export interface UpdateTestConfigurationCommandOutput extends UpdateTestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates a test configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, UpdateTestConfigurationCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, UpdateTestConfigurationCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppTestClient(config);
 * const input = { // UpdateTestConfigurationRequest
 *   testConfigurationId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   resources: [ // ResourceList
 *     { // Resource
 *       name: "STRING_VALUE", // required
 *       type: { // ResourceType Union: only one key present
 *         cloudFormation: { // CloudFormation
 *           templateLocation: "STRING_VALUE", // required
 *           parameters: { // Properties
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         m2ManagedApplication: { // M2ManagedApplication
 *           applicationId: "STRING_VALUE", // required
 *           runtime: "MicroFocus", // required
 *           vpcEndpointServiceName: "STRING_VALUE",
 *           listenerPort: "STRING_VALUE",
 *         },
 *         m2NonManagedApplication: { // M2NonManagedApplication
 *           vpcEndpointServiceName: "STRING_VALUE", // required
 *           listenerPort: "STRING_VALUE", // required
 *           runtime: "BluAge", // required
 *           webAppName: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   properties: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   serviceSettings: { // ServiceSettings
 *     kmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateTestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTestConfigurationResponse
 * //   testConfigurationId: "STRING_VALUE", // required
 * //   testConfigurationVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateTestConfigurationCommandInput - {@link UpdateTestConfigurationCommandInput}
 * @returns {@link UpdateTestConfigurationCommandOutput}
 * @see {@link UpdateTestConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateTestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter provided in the request is not valid.</p>
 *
 * @throws {@link AppTestServiceException}
 * <p>Base exception class for all service exceptions from AppTest service.</p>
 *
 * @public
 */
export class UpdateTestConfigurationCommand extends $Command
  .classBuilder<
    UpdateTestConfigurationCommandInput,
    UpdateTestConfigurationCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsApptestControlPlaneService", "UpdateTestConfiguration", {})
  .n("AppTestClient", "UpdateTestConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTestConfigurationCommand)
  .de(de_UpdateTestConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTestConfigurationRequest;
      output: UpdateTestConfigurationResponse;
    };
    sdk: {
      input: UpdateTestConfigurationCommandInput;
      output: UpdateTestConfigurationCommandOutput;
    };
  };
}
