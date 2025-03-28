// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDomainNameRequest, GetDomainNameResponse } from "../models/models_0";
import { de_GetDomainNameCommand, se_GetDomainNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainNameCommand}.
 */
export interface GetDomainNameCommandInput extends GetDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainNameCommand}.
 */
export interface GetDomainNameCommandOutput extends GetDomainNameResponse, __MetadataBearer {}

/**
 * <p>Gets a domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetDomainNameCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetDomainNameCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetDomainNameRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainNameResponse
 * //   ApiMappingSelectionExpression: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   DomainNameConfigurations: [ // DomainNameConfigurations
 * //     { // DomainNameConfiguration
 * //       ApiGatewayDomainName: "STRING_VALUE",
 * //       CertificateArn: "STRING_VALUE",
 * //       CertificateName: "STRING_VALUE",
 * //       CertificateUploadDate: new Date("TIMESTAMP"),
 * //       DomainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //       DomainNameStatusMessage: "STRING_VALUE",
 * //       EndpointType: "REGIONAL" || "EDGE",
 * //       HostedZoneId: "STRING_VALUE",
 * //       IpAddressType: "ipv4" || "dualstack",
 * //       SecurityPolicy: "TLS_1_0" || "TLS_1_2",
 * //       OwnershipVerificationCertificateArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   MutualTlsAuthentication: { // MutualTlsAuthentication
 * //     TruststoreUri: "STRING_VALUE",
 * //     TruststoreVersion: "STRING_VALUE",
 * //     TruststoreWarnings: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainNameCommandInput - {@link GetDomainNameCommandInput}
 * @returns {@link GetDomainNameCommandOutput}
 * @see {@link GetDomainNameCommandInput} for command's `input` shape.
 * @see {@link GetDomainNameCommandOutput} for command's `response` shape.
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
export class GetDomainNameCommand extends $Command
  .classBuilder<
    GetDomainNameCommandInput,
    GetDomainNameCommandOutput,
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
  .s("ApiGatewayV2", "GetDomainName", {})
  .n("ApiGatewayV2Client", "GetDomainNameCommand")
  .f(void 0, void 0)
  .ser(se_GetDomainNameCommand)
  .de(de_GetDomainNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainNameRequest;
      output: GetDomainNameResponse;
    };
    sdk: {
      input: GetDomainNameCommandInput;
      output: GetDomainNameCommandOutput;
    };
  };
}
