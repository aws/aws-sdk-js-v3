// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPortalRequest, GetPortalResponse } from "../models/models_0";
import { GetPortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPortalCommand}.
 */
export interface GetPortalCommandInput extends GetPortalRequest {}
/**
 * @public
 *
 * The output of {@link GetPortalCommand}.
 */
export interface GetPortalCommandOutput extends GetPortalResponse, __MetadataBearer {}

/**
 * <p>Gets a portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetPortalCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetPortalCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetPortalRequest
 *   PortalId: "STRING_VALUE", // required
 * };
 * const command = new GetPortalCommand(input);
 * const response = await client.send(command);
 * // { // GetPortalResponse
 * //   Authorization: { // Authorization
 * //     CognitoConfig: { // CognitoConfig
 * //       AppClientId: "STRING_VALUE", // required
 * //       UserPoolArn: "STRING_VALUE", // required
 * //       UserPoolDomain: "STRING_VALUE", // required
 * //     },
 * //     None: {},
 * //   },
 * //   EndpointConfiguration: { // EndpointConfigurationResponse
 * //     CertificateArn: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     PortalDefaultDomainName: "STRING_VALUE", // required
 * //     PortalDomainHostedZoneId: "STRING_VALUE", // required
 * //   },
 * //   IncludedPortalProductArns: [ // __listOf__stringMin20Max2048
 * //     "STRING_VALUE",
 * //   ],
 * //   LastModified: new Date("TIMESTAMP"),
 * //   LastPublished: new Date("TIMESTAMP"),
 * //   LastPublishedDescription: "STRING_VALUE",
 * //   PortalArn: "STRING_VALUE",
 * //   PortalContent: { // PortalContent
 * //     Description: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE", // required
 * //     Theme: { // PortalTheme
 * //       CustomColors: { // CustomColors
 * //         AccentColor: "STRING_VALUE", // required
 * //         BackgroundColor: "STRING_VALUE", // required
 * //         ErrorValidationColor: "STRING_VALUE", // required
 * //         HeaderColor: "STRING_VALUE", // required
 * //         NavigationColor: "STRING_VALUE", // required
 * //         TextColor: "STRING_VALUE", // required
 * //       },
 * //       LogoLastUploaded: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * //   PortalId: "STRING_VALUE",
 * //   Preview: { // Preview
 * //     PreviewStatus: "PREVIEW_IN_PROGRESS" || "PREVIEW_FAILED" || "PREVIEW_READY", // required
 * //     PreviewUrl: "STRING_VALUE",
 * //     StatusException: { // StatusException
 * //       Exception: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   PublishStatus: "PUBLISHED" || "PUBLISH_IN_PROGRESS" || "PUBLISH_FAILED" || "DISABLED",
 * //   RumAppMonitorName: "STRING_VALUE",
 * //   StatusException: {
 * //     Exception: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPortalCommandInput - {@link GetPortalCommandInput}
 * @returns {@link GetPortalCommandOutput}
 * @see {@link GetPortalCommandInput} for command's `input` shape.
 * @see {@link GetPortalCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class GetPortalCommand extends $Command
  .classBuilder<
    GetPortalCommandInput,
    GetPortalCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetPortal", {})
  .n("ApiGatewayV2Client", "GetPortalCommand")
  .sc(GetPortal$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPortalRequest;
      output: GetPortalResponse;
    };
    sdk: {
      input: GetPortalCommandInput;
      output: GetPortalCommandOutput;
    };
  };
}
