// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectorRequest, GetConnectorResponse } from "../models/models_0";
import { GetConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists information about your connector. You specify the connector on input by its ARN (Amazon Resource Name).
 *
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
 *
 * You can receive this error if you attempt to create a resource share when you don't have the required permissions. This can be caused by insufficient permissions in policies attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP) that affects your Amazon Web Services account.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An input validation error occurred. For example, invalid characters in a template name, or if a pagination token is invalid.
 *
 * @throws {@link PcaConnectorAdServiceException}
 *
 * Base exception class for all service exceptions from PcaConnectorAd service.
 *
 * @public
 */
export class GetConnectorCommand extends command<GetConnectorCommandInput, GetConnectorCommandOutput>(
  _ep0,
  _mw0,
  "GetConnector",
  GetConnector$
) {
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
