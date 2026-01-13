// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetStagesRequest, GetStagesResponse } from "../models/models_0";
import { GetStages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStagesCommand}.
 */
export interface GetStagesCommandInput extends GetStagesRequest {}
/**
 * @public
 *
 * The output of {@link GetStagesCommand}.
 */
export interface GetStagesCommandOutput extends GetStagesResponse, __MetadataBearer {}

/**
 * <p>Gets the Stages for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetStagesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetStagesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetStagesRequest
 *   ApiId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetStagesCommand(input);
 * const response = await client.send(command);
 * // { // GetStagesResponse
 * //   Items: [ // __listOfStage
 * //     { // Stage
 * //       AccessLogSettings: { // AccessLogSettings
 * //         DestinationArn: "STRING_VALUE",
 * //         Format: "STRING_VALUE",
 * //       },
 * //       ApiGatewayManaged: true || false,
 * //       AutoDeploy: true || false,
 * //       ClientCertificateId: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       DefaultRouteSettings: { // RouteSettings
 * //         DataTraceEnabled: true || false,
 * //         DetailedMetricsEnabled: true || false,
 * //         LoggingLevel: "ERROR" || "INFO" || "OFF",
 * //         ThrottlingBurstLimit: Number("int"),
 * //         ThrottlingRateLimit: Number("double"),
 * //       },
 * //       DeploymentId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LastDeploymentStatusMessage: "STRING_VALUE",
 * //       LastUpdatedDate: new Date("TIMESTAMP"),
 * //       RouteSettings: { // RouteSettingsMap
 * //         "<keys>": {
 * //           DataTraceEnabled: true || false,
 * //           DetailedMetricsEnabled: true || false,
 * //           LoggingLevel: "ERROR" || "INFO" || "OFF",
 * //           ThrottlingBurstLimit: Number("int"),
 * //           ThrottlingRateLimit: Number("double"),
 * //         },
 * //       },
 * //       StageName: "STRING_VALUE", // required
 * //       StageVariables: { // StageVariablesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStagesCommandInput - {@link GetStagesCommandInput}
 * @returns {@link GetStagesCommandOutput}
 * @see {@link GetStagesCommandInput} for command's `input` shape.
 * @see {@link GetStagesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetStagesCommand extends $Command
  .classBuilder<
    GetStagesCommandInput,
    GetStagesCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetStages", {})
  .n("ApiGatewayV2Client", "GetStagesCommand")
  .sc(GetStages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStagesRequest;
      output: GetStagesResponse;
    };
    sdk: {
      input: GetStagesCommandInput;
      output: GetStagesCommandOutput;
    };
  };
}
