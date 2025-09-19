// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBrowserRequest, GetBrowserResponse, GetBrowserResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetBrowserCommand, se_GetBrowserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBrowserCommand}.
 */
export interface GetBrowserCommandInput extends GetBrowserRequest {}
/**
 * @public
 *
 * The output of {@link GetBrowserCommand}.
 */
export interface GetBrowserCommandOutput extends GetBrowserResponse, __MetadataBearer {}

/**
 * <p>Gets information about a custom browser.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetBrowserCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetBrowserCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetBrowserRequest
 *   browserId: "STRING_VALUE", // required
 * };
 * const command = new GetBrowserCommand(input);
 * const response = await client.send(command);
 * // { // GetBrowserResponse
 * //   browserId: "STRING_VALUE", // required
 * //   browserArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   executionRoleArn: "STRING_VALUE",
 * //   networkConfiguration: { // BrowserNetworkConfiguration
 * //     networkMode: "PUBLIC" || "VPC", // required
 * //     vpcConfig: { // VpcConfig
 * //       securityGroups: [ // SecurityGroups // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   recording: { // RecordingConfig
 * //     enabled: true || false,
 * //     s3Location: { // S3Location
 * //       bucket: "STRING_VALUE", // required
 * //       prefix: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "CREATING" || "CREATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //   failureReason: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetBrowserCommandInput - {@link GetBrowserCommandInput}
 * @returns {@link GetBrowserCommandOutput}
 * @see {@link GetBrowserCommandInput} for command's `input` shape.
 * @see {@link GetBrowserCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class GetBrowserCommand extends $Command
  .classBuilder<
    GetBrowserCommandInput,
    GetBrowserCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "GetBrowser", {})
  .n("BedrockAgentCoreControlClient", "GetBrowserCommand")
  .f(void 0, GetBrowserResponseFilterSensitiveLog)
  .ser(se_GetBrowserCommand)
  .de(de_GetBrowserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBrowserRequest;
      output: GetBrowserResponse;
    };
    sdk: {
      input: GetBrowserCommandInput;
      output: GetBrowserCommandOutput;
    };
  };
}
