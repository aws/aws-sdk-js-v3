// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDomainNameRequest, DomainName } from "../models/models_0";
import { de_CreateDomainNameCommand, se_CreateDomainNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainNameCommand}.
 */
export interface CreateDomainNameCommandInput extends CreateDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainNameCommand}.
 */
export interface CreateDomainNameCommandOutput extends DomainName, __MetadataBearer {}

/**
 * <p>Creates a new domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateDomainNameCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateDomainNameCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // CreateDomainNameRequest
 *   domainName: "STRING_VALUE", // required
 *   certificateName: "STRING_VALUE",
 *   certificateBody: "STRING_VALUE",
 *   certificatePrivateKey: "STRING_VALUE",
 *   certificateChain: "STRING_VALUE",
 *   certificateArn: "STRING_VALUE",
 *   regionalCertificateName: "STRING_VALUE",
 *   regionalCertificateArn: "STRING_VALUE",
 *   endpointConfiguration: { // EndpointConfiguration
 *     types: [ // ListOfEndpointType
 *       "REGIONAL" || "EDGE" || "PRIVATE",
 *     ],
 *     vpcEndpointIds: [ // ListOfString
 *       "STRING_VALUE",
 *     ],
 *   },
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   securityPolicy: "TLS_1_0" || "TLS_1_2",
 *   mutualTlsAuthentication: { // MutualTlsAuthenticationInput
 *     truststoreUri: "STRING_VALUE",
 *     truststoreVersion: "STRING_VALUE",
 *   },
 *   ownershipVerificationCertificateArn: "STRING_VALUE",
 * };
 * const command = new CreateDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // DomainName
 * //   domainName: "STRING_VALUE",
 * //   certificateName: "STRING_VALUE",
 * //   certificateArn: "STRING_VALUE",
 * //   certificateUploadDate: new Date("TIMESTAMP"),
 * //   regionalDomainName: "STRING_VALUE",
 * //   regionalHostedZoneId: "STRING_VALUE",
 * //   regionalCertificateName: "STRING_VALUE",
 * //   regionalCertificateArn: "STRING_VALUE",
 * //   distributionDomainName: "STRING_VALUE",
 * //   distributionHostedZoneId: "STRING_VALUE",
 * //   endpointConfiguration: { // EndpointConfiguration
 * //     types: [ // ListOfEndpointType
 * //       "REGIONAL" || "EDGE" || "PRIVATE",
 * //     ],
 * //     vpcEndpointIds: [ // ListOfString
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   domainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //   domainNameStatusMessage: "STRING_VALUE",
 * //   securityPolicy: "TLS_1_0" || "TLS_1_2",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   mutualTlsAuthentication: { // MutualTlsAuthentication
 * //     truststoreUri: "STRING_VALUE",
 * //     truststoreVersion: "STRING_VALUE",
 * //     truststoreWarnings: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ownershipVerificationCertificateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDomainNameCommandInput - {@link CreateDomainNameCommandInput}
 * @returns {@link CreateDomainNameCommandOutput}
 * @see {@link CreateDomainNameCommandInput} for command's `input` shape.
 * @see {@link CreateDomainNameCommandOutput} for command's `response` shape.
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
export class CreateDomainNameCommand extends $Command
  .classBuilder<
    CreateDomainNameCommandInput,
    CreateDomainNameCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "CreateDomainName", {})
  .n("APIGatewayClient", "CreateDomainNameCommand")
  .f(void 0, void 0)
  .ser(se_CreateDomainNameCommand)
  .de(de_CreateDomainNameCommand)
  .build() {}
