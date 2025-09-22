// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTestConfigurationRequest, GetTestConfigurationResponse } from "../models/models_0";
import { GetTestConfiguration } from "../schemas/schemas_4_Test";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTestConfigurationCommand}.
 */
export interface GetTestConfigurationCommandInput extends GetTestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetTestConfigurationCommand}.
 */
export interface GetTestConfigurationCommandOutput extends GetTestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets a test configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, GetTestConfigurationCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, GetTestConfigurationCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // GetTestConfigurationRequest
 *   testConfigurationId: "STRING_VALUE", // required
 *   testConfigurationVersion: Number("int"),
 * };
 * const command = new GetTestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTestConfigurationResponse
 * //   testConfigurationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   testConfigurationArn: "STRING_VALUE", // required
 * //   latestVersion: { // TestConfigurationLatestVersion
 * //     version: Number("int"), // required
 * //     status: "Active" || "Deleting", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * //   testConfigurationVersion: Number("int"), // required
 * //   status: "Active" || "Deleting", // required
 * //   statusReason: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastUpdateTime: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   resources: [ // ResourceList // required
 * //     { // Resource
 * //       name: "STRING_VALUE", // required
 * //       type: { // ResourceType Union: only one key present
 * //         cloudFormation: { // CloudFormation
 * //           templateLocation: "STRING_VALUE", // required
 * //           parameters: { // Properties
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         m2ManagedApplication: { // M2ManagedApplication
 * //           applicationId: "STRING_VALUE", // required
 * //           runtime: "MicroFocus", // required
 * //           vpcEndpointServiceName: "STRING_VALUE",
 * //           listenerPort: "STRING_VALUE",
 * //         },
 * //         m2NonManagedApplication: { // M2NonManagedApplication
 * //           vpcEndpointServiceName: "STRING_VALUE", // required
 * //           listenerPort: "STRING_VALUE", // required
 * //           runtime: "BluAge", // required
 * //           webAppName: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   properties: { // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   serviceSettings: { // ServiceSettings
 * //     kmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestConfigurationCommandInput - {@link GetTestConfigurationCommandInput}
 * @returns {@link GetTestConfigurationCommandOutput}
 * @see {@link GetTestConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetTestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
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
 *
 * @public
 */
export class GetTestConfigurationCommand extends $Command
  .classBuilder<
    GetTestConfigurationCommandInput,
    GetTestConfigurationCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsApptestControlPlaneService", "GetTestConfiguration", {})
  .n("AppTestClient", "GetTestConfigurationCommand")
  .sc(GetTestConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestConfigurationRequest;
      output: GetTestConfigurationResponse;
    };
    sdk: {
      input: GetTestConfigurationCommandInput;
      output: GetTestConfigurationCommandOutput;
    };
  };
}
