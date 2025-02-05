// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Stage, UpdateStageRequest } from "../models/models_0";
import { de_UpdateStageCommand, se_UpdateStageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStageCommand}.
 */
export interface UpdateStageCommandInput extends UpdateStageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStageCommand}.
 */
export interface UpdateStageCommandOutput extends Stage, __MetadataBearer {}

/**
 * <p>Changes information about a Stage resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateStageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateStageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateStageRequest
 *   restApiId: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateStageCommand(input);
 * const response = await client.send(command);
 * // { // Stage
 * //   deploymentId: "STRING_VALUE",
 * //   clientCertificateId: "STRING_VALUE",
 * //   stageName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   cacheClusterEnabled: true || false,
 * //   cacheClusterSize: "0.5" || "1.6" || "6.1" || "13.5" || "28.4" || "58.2" || "118" || "237",
 * //   cacheClusterStatus: "CREATE_IN_PROGRESS" || "AVAILABLE" || "DELETE_IN_PROGRESS" || "NOT_AVAILABLE" || "FLUSH_IN_PROGRESS",
 * //   methodSettings: { // MapOfMethodSettings
 * //     "<keys>": { // MethodSetting
 * //       metricsEnabled: true || false,
 * //       loggingLevel: "STRING_VALUE",
 * //       dataTraceEnabled: true || false,
 * //       throttlingBurstLimit: Number("int"),
 * //       throttlingRateLimit: Number("double"),
 * //       cachingEnabled: true || false,
 * //       cacheTtlInSeconds: Number("int"),
 * //       cacheDataEncrypted: true || false,
 * //       requireAuthorizationForCacheControl: true || false,
 * //       unauthorizedCacheControlHeaderStrategy: "FAIL_WITH_403" || "SUCCEED_WITH_RESPONSE_HEADER" || "SUCCEED_WITHOUT_RESPONSE_HEADER",
 * //     },
 * //   },
 * //   variables: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   documentationVersion: "STRING_VALUE",
 * //   accessLogSettings: { // AccessLogSettings
 * //     format: "STRING_VALUE",
 * //     destinationArn: "STRING_VALUE",
 * //   },
 * //   canarySettings: { // CanarySettings
 * //     percentTraffic: Number("double"),
 * //     deploymentId: "STRING_VALUE",
 * //     stageVariableOverrides: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     useStageCache: true || false,
 * //   },
 * //   tracingEnabled: true || false,
 * //   webAclArn: "STRING_VALUE",
 * //   tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   createdDate: new Date("TIMESTAMP"),
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateStageCommandInput - {@link UpdateStageCommandInput}
 * @returns {@link UpdateStageCommandOutput}
 * @see {@link UpdateStageCommandInput} for command's `input` shape.
 * @see {@link UpdateStageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 * @public
 */
export class UpdateStageCommand extends $Command
  .classBuilder<
    UpdateStageCommandInput,
    UpdateStageCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "UpdateStage", {})
  .n("APIGatewayClient", "UpdateStageCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStageCommand)
  .de(de_UpdateStageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStageRequest;
      output: Stage;
    };
    sdk: {
      input: UpdateStageCommandInput;
      output: UpdateStageCommandOutput;
    };
  };
}
