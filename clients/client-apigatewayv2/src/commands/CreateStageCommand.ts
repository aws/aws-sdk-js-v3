// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStageRequest, CreateStageResponse } from "../models/models_0";
import { CreateStage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStageCommand}.
 */
export interface CreateStageCommandInput extends CreateStageRequest {}
/**
 * @public
 *
 * The output of {@link CreateStageCommand}.
 */
export interface CreateStageCommandOutput extends CreateStageResponse, __MetadataBearer {}

/**
 * <p>Creates a Stage for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateStageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateStageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateStageRequest
 *   AccessLogSettings: { // AccessLogSettings
 *     DestinationArn: "STRING_VALUE",
 *     Format: "STRING_VALUE",
 *   },
 *   ApiId: "STRING_VALUE", // required
 *   AutoDeploy: true || false,
 *   ClientCertificateId: "STRING_VALUE",
 *   DefaultRouteSettings: { // RouteSettings
 *     DataTraceEnabled: true || false,
 *     DetailedMetricsEnabled: true || false,
 *     LoggingLevel: "ERROR" || "INFO" || "OFF",
 *     ThrottlingBurstLimit: Number("int"),
 *     ThrottlingRateLimit: Number("double"),
 *   },
 *   DeploymentId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RouteSettings: { // RouteSettingsMap
 *     "<keys>": {
 *       DataTraceEnabled: true || false,
 *       DetailedMetricsEnabled: true || false,
 *       LoggingLevel: "ERROR" || "INFO" || "OFF",
 *       ThrottlingBurstLimit: Number("int"),
 *       ThrottlingRateLimit: Number("double"),
 *     },
 *   },
 *   StageName: "STRING_VALUE", // required
 *   StageVariables: { // StageVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateStageCommand(input);
 * const response = await client.send(command);
 * // { // CreateStageResponse
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
 * @param CreateStageCommandInput - {@link CreateStageCommandInput}
 * @returns {@link CreateStageCommandOutput}
 * @see {@link CreateStageCommandInput} for command's `input` shape.
 * @see {@link CreateStageCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
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
export class CreateStageCommand extends $Command
  .classBuilder<
    CreateStageCommandInput,
    CreateStageCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "CreateStage", {})
  .n("ApiGatewayV2Client", "CreateStageCommand")
  .sc(CreateStage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStageRequest;
      output: CreateStageResponse;
    };
    sdk: {
      input: CreateStageCommandInput;
      output: CreateStageCommandOutput;
    };
  };
}
