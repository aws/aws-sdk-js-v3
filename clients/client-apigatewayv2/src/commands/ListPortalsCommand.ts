// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPortalsRequest, ListPortalsResponse } from "../models/models_0";
import { ListPortals } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandInput extends ListPortalsRequest {}
/**
 * @public
 *
 * The output of {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandOutput extends ListPortalsResponse, __MetadataBearer {}

/**
 * <p>Lists portals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ListPortalsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ListPortalsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ListPortalsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPortalsCommand(input);
 * const response = await client.send(command);
 * // { // ListPortalsResponse
 * //   Items: [ // __listOfPortalSummary
 * //     { // PortalSummary
 * //       Authorization: { // Authorization
 * //         CognitoConfig: { // CognitoConfig
 * //           AppClientId: "STRING_VALUE", // required
 * //           UserPoolArn: "STRING_VALUE", // required
 * //           UserPoolDomain: "STRING_VALUE", // required
 * //         },
 * //         None: {},
 * //       },
 * //       EndpointConfiguration: { // EndpointConfigurationResponse
 * //         CertificateArn: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE",
 * //         PortalDefaultDomainName: "STRING_VALUE", // required
 * //         PortalDomainHostedZoneId: "STRING_VALUE", // required
 * //       },
 * //       IncludedPortalProductArns: [ // __listOf__stringMin20Max2048 // required
 * //         "STRING_VALUE",
 * //       ],
 * //       LastModified: new Date("TIMESTAMP"), // required
 * //       LastPublished: new Date("TIMESTAMP"),
 * //       LastPublishedDescription: "STRING_VALUE",
 * //       PortalArn: "STRING_VALUE", // required
 * //       PortalContent: { // PortalContent
 * //         Description: "STRING_VALUE",
 * //         DisplayName: "STRING_VALUE", // required
 * //         Theme: { // PortalTheme
 * //           CustomColors: { // CustomColors
 * //             AccentColor: "STRING_VALUE", // required
 * //             BackgroundColor: "STRING_VALUE", // required
 * //             ErrorValidationColor: "STRING_VALUE", // required
 * //             HeaderColor: "STRING_VALUE", // required
 * //             NavigationColor: "STRING_VALUE", // required
 * //             TextColor: "STRING_VALUE", // required
 * //           },
 * //           LogoLastUploaded: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       PortalId: "STRING_VALUE", // required
 * //       Preview: { // Preview
 * //         PreviewStatus: "PREVIEW_IN_PROGRESS" || "PREVIEW_FAILED" || "PREVIEW_READY", // required
 * //         PreviewUrl: "STRING_VALUE",
 * //         StatusException: { // StatusException
 * //           Exception: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       PublishStatus: "PUBLISHED" || "PUBLISH_IN_PROGRESS" || "PUBLISH_FAILED" || "DISABLED",
 * //       RumAppMonitorName: "STRING_VALUE",
 * //       StatusException: {
 * //         Exception: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
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
 * @param ListPortalsCommandInput - {@link ListPortalsCommandInput}
 * @returns {@link ListPortalsCommandOutput}
 * @see {@link ListPortalsCommandInput} for command's `input` shape.
 * @see {@link ListPortalsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class ListPortalsCommand extends $Command
  .classBuilder<
    ListPortalsCommandInput,
    ListPortalsCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "ListPortals", {})
  .n("ApiGatewayV2Client", "ListPortalsCommand")
  .sc(ListPortals)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPortalsRequest;
      output: ListPortalsResponse;
    };
    sdk: {
      input: ListPortalsCommandInput;
      output: ListPortalsCommandOutput;
    };
  };
}
