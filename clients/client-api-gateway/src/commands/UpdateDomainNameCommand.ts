// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DomainName, UpdateDomainNameRequest } from "../models/models_0";
import { UpdateDomainName } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainNameCommand}.
 */
export interface UpdateDomainNameCommandInput extends UpdateDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainNameCommand}.
 */
export interface UpdateDomainNameCommandOutput extends DomainName, __MetadataBearer {}

/**
 * <p>Changes information about the DomainName resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateDomainNameCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateDomainNameCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateDomainNameRequest
 *   domainName: "STRING_VALUE", // required
 *   domainNameId: "STRING_VALUE",
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // DomainName
 * //   domainName: "STRING_VALUE",
 * //   domainNameId: "STRING_VALUE",
 * //   domainNameArn: "STRING_VALUE",
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
 * //     ipAddressType: "ipv4" || "dualstack",
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
 * //   managementPolicy: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * //   routingMode: "BASE_PATH_MAPPING_ONLY" || "ROUTING_RULE_ONLY" || "ROUTING_RULE_THEN_BASE_PATH_MAPPING",
 * // };
 *
 * ```
 *
 * @param UpdateDomainNameCommandInput - {@link UpdateDomainNameCommandInput}
 * @returns {@link UpdateDomainNameCommandOutput}
 * @see {@link UpdateDomainNameCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainNameCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateDomainNameCommand extends $Command
  .classBuilder<
    UpdateDomainNameCommandInput,
    UpdateDomainNameCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "UpdateDomainName", {})
  .n("APIGatewayClient", "UpdateDomainNameCommand")
  .sc(UpdateDomainName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainNameRequest;
      output: DomainName;
    };
    sdk: {
      input: UpdateDomainNameCommandInput;
      output: UpdateDomainNameCommandOutput;
    };
  };
}
