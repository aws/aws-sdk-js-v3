// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { GetSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Displays detailed information about a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetSessionCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetSessionCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // GetSessionRequest
 *   applicationId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   session: { // Session
 * //     applicationId: "STRING_VALUE", // required
 * //     sessionId: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     state: "STRING_VALUE", // required
 * //     stateDetails: "STRING_VALUE", // required
 * //     releaseLabel: "STRING_VALUE", // required
 * //     executionRoleArn: "STRING_VALUE", // required
 * //     createdBy: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     startedAt: new Date("TIMESTAMP"),
 * //     endedAt: new Date("TIMESTAMP"),
 * //     idleSince: new Date("TIMESTAMP"),
 * //     configurationOverrides: { // SessionConfigurationOverrides
 * //       runtimeConfiguration: [ // ConfigurationList
 * //         { // Configuration
 * //           classification: "STRING_VALUE", // required
 * //           properties: { // SensitivePropertiesMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           configurations: [
 * //             {
 * //               classification: "STRING_VALUE", // required
 * //               properties: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               configurations: "<ConfigurationList>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     networkConfiguration: { // NetworkConfiguration
 * //       subnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     idleTimeoutMinutes: Number("long"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     totalResourceUtilization: { // TotalResourceUtilization
 * //       vCPUHour: Number("double"),
 * //       memoryGBHour: Number("double"),
 * //       storageGBHour: Number("double"),
 * //     },
 * //     billedResourceUtilization: { // ResourceUtilization
 * //       vCPUHour: Number("double"),
 * //       memoryGBHour: Number("double"),
 * //       storageGBHour: Number("double"),
 * //     },
 * //     totalExecutionDurationSeconds: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "GetSession", {})
  .n("EMRServerlessClient", "GetSessionCommand")
  .sc(GetSession$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
