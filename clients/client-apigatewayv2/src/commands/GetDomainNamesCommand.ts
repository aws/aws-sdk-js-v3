// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDomainNamesRequest, GetDomainNamesResponse } from "../models/models_0";
import { de_GetDomainNamesCommand, se_GetDomainNamesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainNamesCommand}.
 */
export interface GetDomainNamesCommandInput extends GetDomainNamesRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainNamesCommand}.
 */
export interface GetDomainNamesCommandOutput extends GetDomainNamesResponse, __MetadataBearer {}

/**
 * <p>Gets the domain names for an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetDomainNamesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetDomainNamesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetDomainNamesRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDomainNamesCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainNamesResponse
 * //   Items: [ // __listOfDomainName
 * //     { // DomainName
 * //       ApiMappingSelectionExpression: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       DomainNameConfigurations: [ // DomainNameConfigurations
 * //         { // DomainNameConfiguration
 * //           ApiGatewayDomainName: "STRING_VALUE",
 * //           CertificateArn: "STRING_VALUE",
 * //           CertificateName: "STRING_VALUE",
 * //           CertificateUploadDate: new Date("TIMESTAMP"),
 * //           DomainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //           DomainNameStatusMessage: "STRING_VALUE",
 * //           EndpointType: "REGIONAL" || "EDGE",
 * //           HostedZoneId: "STRING_VALUE",
 * //           IpAddressType: "ipv4" || "dualstack",
 * //           SecurityPolicy: "TLS_1_0" || "TLS_1_2",
 * //           OwnershipVerificationCertificateArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MutualTlsAuthentication: { // MutualTlsAuthentication
 * //         TruststoreUri: "STRING_VALUE",
 * //         TruststoreVersion: "STRING_VALUE",
 * //         TruststoreWarnings: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
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
 * @param GetDomainNamesCommandInput - {@link GetDomainNamesCommandInput}
 * @returns {@link GetDomainNamesCommandOutput}
 * @see {@link GetDomainNamesCommandInput} for command's `input` shape.
 * @see {@link GetDomainNamesCommandOutput} for command's `response` shape.
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
export class GetDomainNamesCommand extends $Command
  .classBuilder<
    GetDomainNamesCommandInput,
    GetDomainNamesCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetDomainNames", {})
  .n("ApiGatewayV2Client", "GetDomainNamesCommand")
  .f(void 0, void 0)
  .ser(se_GetDomainNamesCommand)
  .de(de_GetDomainNamesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainNamesRequest;
      output: GetDomainNamesResponse;
    };
    sdk: {
      input: GetDomainNamesCommandInput;
      output: GetDomainNamesCommandOutput;
    };
  };
}
