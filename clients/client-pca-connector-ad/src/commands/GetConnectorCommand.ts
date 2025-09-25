// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectorRequest, GetConnectorResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { GetConnector } from "../schemas/schemas_3_ServicePrincipal";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorCommand}.
 */
export interface GetConnectorCommandInput extends GetConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorCommand}.
 */
export interface GetConnectorCommandOutput extends GetConnectorResponse, __MetadataBearer {}

/**
 * <p>Lists information about your connector. You specify the connector on input by its ARN
 *          (Amazon Resource Name). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, GetConnectorCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, GetConnectorCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // GetConnectorRequest
 *   ConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new GetConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorResponse
 * //   Connector: { // Connector
 * //     Arn: "STRING_VALUE",
 * //     CertificateAuthorityArn: "STRING_VALUE",
 * //     CertificateEnrollmentPolicyServerEndpoint: "STRING_VALUE",
 * //     DirectoryId: "STRING_VALUE",
 * //     VpcInformation: { // VpcInformation
 * //       IpAddressType: "IPV4" || "DUALSTACK",
 * //       SecurityGroupIds: [ // SecurityGroupIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     StatusReason: "CA_CERTIFICATE_REGISTRATION_FAILED" || "DIRECTORY_ACCESS_DENIED" || "INTERNAL_FAILURE" || "INSUFFICIENT_FREE_ADDRESSES" || "INVALID_SUBNET_IP_PROTOCOL" || "PRIVATECA_ACCESS_DENIED" || "PRIVATECA_RESOURCE_NOT_FOUND" || "SECURITY_GROUP_NOT_IN_VPC" || "VPC_ACCESS_DENIED" || "VPC_ENDPOINT_LIMIT_EXCEEDED" || "VPC_RESOURCE_NOT_FOUND",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectorCommandInput - {@link GetConnectorCommandInput}
 * @returns {@link GetConnectorCommandOutput}
 * @see {@link GetConnectorCommandInput} for command's `input` shape.
 * @see {@link GetConnectorCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occurred. For example, invalid characters in a template name,
 *          or if a pagination token is invalid. </p>
 *
 * @throws {@link PcaConnectorAdServiceException}
 * <p>Base exception class for all service exceptions from PcaConnectorAd service.</p>
 *
 *
 * @public
 */
export class GetConnectorCommand extends $Command
  .classBuilder<
    GetConnectorCommandInput,
    GetConnectorCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorAd", "GetConnector", {})
  .n("PcaConnectorAdClient", "GetConnectorCommand")
  .sc(GetConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorRequest;
      output: GetConnectorResponse;
    };
    sdk: {
      input: GetConnectorCommandInput;
      output: GetConnectorCommandOutput;
    };
  };
}
