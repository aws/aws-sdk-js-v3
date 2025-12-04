// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateBrowserRequest, CreateBrowserResponse } from "../models/models_0";
import { CreateBrowser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBrowserCommand}.
 */
export interface CreateBrowserCommandInput extends CreateBrowserRequest {}
/**
 * @public
 *
 * The output of {@link CreateBrowserCommand}.
 */
export interface CreateBrowserCommandOutput extends CreateBrowserResponse, __MetadataBearer {}

/**
 * <p>Creates a custom browser.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateBrowserCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateBrowserCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateBrowserRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   executionRoleArn: "STRING_VALUE",
 *   networkConfiguration: { // BrowserNetworkConfiguration
 *     networkMode: "PUBLIC" || "VPC", // required
 *     vpcConfig: { // VpcConfig
 *       securityGroups: [ // SecurityGroups // required
 *         "STRING_VALUE",
 *       ],
 *       subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   recording: { // RecordingConfig
 *     enabled: true || false,
 *     s3Location: { // S3Location
 *       bucket: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE", // required
 *       versionId: "STRING_VALUE",
 *     },
 *   },
 *   browserSigning: { // BrowserSigningConfigInput
 *     enabled: true || false, // required
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBrowserCommand(input);
 * const response = await client.send(command);
 * // { // CreateBrowserResponse
 * //   browserId: "STRING_VALUE", // required
 * //   browserArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "CREATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param CreateBrowserCommandInput - {@link CreateBrowserCommandInput}
 * @returns {@link CreateBrowserCommandOutput}
 * @see {@link CreateBrowserCommandInput} for command's `input` shape.
 * @see {@link CreateBrowserCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class CreateBrowserCommand extends $Command
  .classBuilder<
    CreateBrowserCommandInput,
    CreateBrowserCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateBrowser", {})
  .n("BedrockAgentCoreControlClient", "CreateBrowserCommand")
  .sc(CreateBrowser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBrowserRequest;
      output: CreateBrowserResponse;
    };
    sdk: {
      input: CreateBrowserCommandInput;
      output: CreateBrowserCommandOutput;
    };
  };
}
