// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServerRequest, UpdateServerRequestFilterSensitiveLog, UpdateServerResponse } from "../models/models_0";
import { de_UpdateServerCommand, se_UpdateServerCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServerCommand}.
 */
export interface UpdateServerCommandInput extends UpdateServerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServerCommand}.
 */
export interface UpdateServerCommandOutput extends UpdateServerResponse, __MetadataBearer {}

/**
 * <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // UpdateServerRequest
 *   Certificate: "STRING_VALUE",
 *   ProtocolDetails: { // ProtocolDetails
 *     PassiveIp: "STRING_VALUE",
 *     TlsSessionResumptionMode: "DISABLED" || "ENABLED" || "ENFORCED",
 *     SetStatOption: "DEFAULT" || "ENABLE_NO_OP",
 *     As2Transports: [ // As2Transports
 *       "HTTP",
 *     ],
 *   },
 *   EndpointDetails: { // EndpointDetails
 *     AddressAllocationIds: [ // AddressAllocationIds
 *       "STRING_VALUE",
 *     ],
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     VpcEndpointId: "STRING_VALUE",
 *     VpcId: "STRING_VALUE",
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   EndpointType: "PUBLIC" || "VPC" || "VPC_ENDPOINT",
 *   HostKey: "STRING_VALUE",
 *   IdentityProviderDetails: { // IdentityProviderDetails
 *     Url: "STRING_VALUE",
 *     InvocationRole: "STRING_VALUE",
 *     DirectoryId: "STRING_VALUE",
 *     Function: "STRING_VALUE",
 *     SftpAuthenticationMethods: "PASSWORD" || "PUBLIC_KEY" || "PUBLIC_KEY_OR_PASSWORD" || "PUBLIC_KEY_AND_PASSWORD",
 *   },
 *   LoggingRole: "STRING_VALUE",
 *   PostAuthenticationLoginBanner: "STRING_VALUE",
 *   PreAuthenticationLoginBanner: "STRING_VALUE",
 *   Protocols: [ // Protocols
 *     "SFTP" || "FTP" || "FTPS" || "AS2",
 *   ],
 *   SecurityPolicyName: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 *   WorkflowDetails: { // WorkflowDetails
 *     OnUpload: [ // OnUploadWorkflowDetails
 *       { // WorkflowDetail
 *         WorkflowId: "STRING_VALUE", // required
 *         ExecutionRole: "STRING_VALUE", // required
 *       },
 *     ],
 *     OnPartialUpload: [ // OnPartialUploadWorkflowDetails
 *       {
 *         WorkflowId: "STRING_VALUE", // required
 *         ExecutionRole: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   StructuredLogDestinations: [ // StructuredLogDestinations
 *     "STRING_VALUE",
 *   ],
 *   S3StorageOptions: { // S3StorageOptions
 *     DirectoryListingOptimization: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new UpdateServerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServerResponse
 * //   ServerId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateServerCommandInput - {@link UpdateServerCommandInput}
 * @returns {@link UpdateServerCommandOutput}
 * @see {@link UpdateServerCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the <code>UpdateServer</code> is called for a file transfer protocol-enabled server that has VPC as the endpoint type and the server's <code>VpcEndpointID</code> is not in the available state.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class UpdateServerCommand extends $Command
  .classBuilder<
    UpdateServerCommandInput,
    UpdateServerCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "UpdateServer", {})
  .n("TransferClient", "UpdateServerCommand")
  .f(UpdateServerRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateServerCommand)
  .de(de_UpdateServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServerRequest;
      output: UpdateServerResponse;
    };
    sdk: {
      input: UpdateServerCommandInput;
      output: UpdateServerCommandOutput;
    };
  };
}
