// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetStageRequest, GetStageResponse } from "../models/models_0";
import { GetStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStageCommand}.
 */
export interface GetStageCommandInput extends GetStageRequest {}
/**
 * @public
 *
 * The output of {@link GetStageCommand}.
 */
export interface GetStageCommandOutput extends GetStageResponse, __MetadataBearer {}

/**
 * <p>Gets a Stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetStageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetStageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetStageRequest
 *   ApiId: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new GetStageCommand(input);
 * const response = await client.send(command);
 * // { // GetStageResponse
 * //   AccessLogSettings: { // AccessLogSettings
 * //     DestinationArn: "STRING_VALUE",
 * //     Format: "STRING_VALUE",
 * //   },
 * //   ApiGatewayManaged: true || false,
 * //   AutoDeploy: true || false,
 * //   ClientCertificateId: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   DefaultRouteSettings: { // RouteSettings
 * //     DataTraceEnabled: true || false,
 * //     DetailedMetricsEnabled: true || false,
 * //     LoggingLevel: "ERROR" || "INFO" || "OFF",
 * //     ThrottlingBurstLimit: Number("int"),
 * //     ThrottlingRateLimit: Number("double"),
 * //   },
 * //   DeploymentId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LastDeploymentStatusMessage: "STRING_VALUE",
 * //   LastUpdatedDate: new Date("TIMESTAMP"),
 * //   RouteSettings: { // RouteSettingsMap
 * //     "<keys>": {
 * //       DataTraceEnabled: true || false,
 * //       DetailedMetricsEnabled: true || false,
 * //       LoggingLevel: "ERROR" || "INFO" || "OFF",
 * //       ThrottlingBurstLimit: Number("int"),
 * //       ThrottlingRateLimit: Number("double"),
 * //     },
 * //   },
 * //   StageName: "STRING_VALUE",
 * //   StageVariables: { // StageVariablesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStageCommandInput - {@link GetStageCommandInput}
 * @returns {@link GetStageCommandOutput}
 * @see {@link GetStageCommandInput} for command's `input` shape.
 * @see {@link GetStageCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 * @public
 */
export class GetStageCommand extends $Command
  .classBuilder<
    GetStageCommandInput,
    GetStageCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetStage", {})
  .n("ApiGatewayV2Client", "GetStageCommand")
  .sc(GetStage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStageRequest;
      output: GetStageResponse;
    };
    sdk: {
      input: GetStageCommandInput;
      output: GetStageCommandOutput;
    };
  };
}
