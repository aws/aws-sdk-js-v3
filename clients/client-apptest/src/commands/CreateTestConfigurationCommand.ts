// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTestConfigurationRequest, CreateTestConfigurationResponse } from "../models/models_0";
import { de_CreateTestConfigurationCommand, se_CreateTestConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTestConfigurationCommand}.
 */
export interface CreateTestConfigurationCommandInput extends CreateTestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestConfigurationCommand}.
 */
export interface CreateTestConfigurationCommandOutput extends CreateTestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a test configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, CreateTestConfigurationCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, CreateTestConfigurationCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * const client = new AppTestClient(config);
 * const input = { // CreateTestConfigurationRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   resources: [ // ResourceList // required
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
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   serviceSettings: { // ServiceSettings
 *     kmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestConfigurationResponse
 * //   testConfigurationId: "STRING_VALUE", // required
 * //   testConfigurationVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateTestConfigurationCommandInput - {@link CreateTestConfigurationCommandInput}
 * @returns {@link CreateTestConfigurationCommandOutput}
 * @see {@link CreateTestConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateTestConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for AWS Application Testing exceeds the limit.</p>
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
 *
 * @public
 */
export class CreateTestConfigurationCommand extends $Command
  .classBuilder<
    CreateTestConfigurationCommandInput,
    CreateTestConfigurationCommandOutput,
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
  .s("AwsApptestControlPlaneService", "CreateTestConfiguration", {})
  .n("AppTestClient", "CreateTestConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateTestConfigurationCommand)
  .de(de_CreateTestConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestConfigurationRequest;
      output: CreateTestConfigurationResponse;
    };
    sdk: {
      input: CreateTestConfigurationCommandInput;
      output: CreateTestConfigurationCommandOutput;
    };
  };
}
