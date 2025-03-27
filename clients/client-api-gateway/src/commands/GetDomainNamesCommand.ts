// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DomainNames, GetDomainNamesRequest } from "../models/models_0";
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
export interface GetDomainNamesCommandOutput extends DomainNames, __MetadataBearer {}

/**
 * <p>Represents a collection of DomainName resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDomainNamesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDomainNamesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetDomainNamesRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 *   resourceOwner: "SELF" || "OTHER_ACCOUNTS",
 * };
 * const command = new GetDomainNamesCommand(input);
 * const response = await client.send(command);
 * // { // DomainNames
 * //   items: [ // ListOfDomainName
 * //     { // DomainName
 * //       domainName: "STRING_VALUE",
 * //       domainNameId: "STRING_VALUE",
 * //       domainNameArn: "STRING_VALUE",
 * //       certificateName: "STRING_VALUE",
 * //       certificateArn: "STRING_VALUE",
 * //       certificateUploadDate: new Date("TIMESTAMP"),
 * //       regionalDomainName: "STRING_VALUE",
 * //       regionalHostedZoneId: "STRING_VALUE",
 * //       regionalCertificateName: "STRING_VALUE",
 * //       regionalCertificateArn: "STRING_VALUE",
 * //       distributionDomainName: "STRING_VALUE",
 * //       distributionHostedZoneId: "STRING_VALUE",
 * //       endpointConfiguration: { // EndpointConfiguration
 * //         types: [ // ListOfEndpointType
 * //           "REGIONAL" || "EDGE" || "PRIVATE",
 * //         ],
 * //         vpcEndpointIds: [ // ListOfString
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       domainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //       domainNameStatusMessage: "STRING_VALUE",
 * //       securityPolicy: "TLS_1_0" || "TLS_1_2",
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       mutualTlsAuthentication: { // MutualTlsAuthentication
 * //         truststoreUri: "STRING_VALUE",
 * //         truststoreVersion: "STRING_VALUE",
 * //         truststoreWarnings: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ownershipVerificationCertificateArn: "STRING_VALUE",
 * //       managementPolicy: "STRING_VALUE",
 * //       policy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDomainNamesCommandInput - {@link GetDomainNamesCommandInput}
 * @returns {@link GetDomainNamesCommandOutput}
 * @see {@link GetDomainNamesCommandInput} for command's `input` shape.
 * @see {@link GetDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
 *
 * @public
 */
export class GetDomainNamesCommand extends $Command
  .classBuilder<
    GetDomainNamesCommandInput,
    GetDomainNamesCommandOutput,
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
  .s("BackplaneControlService", "GetDomainNames", {})
  .n("APIGatewayClient", "GetDomainNamesCommand")
  .f(void 0, void 0)
  .ser(se_GetDomainNamesCommand)
  .de(de_GetDomainNamesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainNamesRequest;
      output: DomainNames;
    };
    sdk: {
      input: GetDomainNamesCommandInput;
      output: GetDomainNamesCommandOutput;
    };
  };
}
