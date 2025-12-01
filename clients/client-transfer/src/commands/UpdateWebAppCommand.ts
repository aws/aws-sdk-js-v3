// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateWebAppRequest, UpdateWebAppResponse } from "../models/models_0";
import { UpdateWebApp } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWebAppCommand}.
 */
export interface UpdateWebAppCommandInput extends UpdateWebAppRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebAppCommand}.
 */
export interface UpdateWebAppCommandOutput extends UpdateWebAppResponse, __MetadataBearer {}

/**
 * <p>Assigns new properties to a web app. You can modify the access point, identity provider details, endpoint configuration, and the web app units.</p> <p>For more information about using VPC endpoints with Transfer Family, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-webapp-in-vpc.html">Create a Transfer Family web app in a VPC</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateWebAppCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateWebAppCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateWebAppRequest
 *   WebAppId: "STRING_VALUE", // required
 *   IdentityProviderDetails: { // UpdateWebAppIdentityProviderDetails Union: only one key present
 *     IdentityCenterConfig: { // UpdateWebAppIdentityCenterConfig
 *       Role: "STRING_VALUE",
 *     },
 *   },
 *   AccessEndpoint: "STRING_VALUE",
 *   WebAppUnits: { // WebAppUnits Union: only one key present
 *     Provisioned: Number("int"),
 *   },
 *   EndpointDetails: { // UpdateWebAppEndpointDetails Union: only one key present
 *     Vpc: { // UpdateWebAppVpcConfig
 *       SubnetIds: [ // SubnetIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateWebAppCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebAppResponse
 * //   WebAppId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateWebAppCommandInput - {@link UpdateWebAppCommandInput}
 * @returns {@link UpdateWebAppCommandOutput}
 * @see {@link UpdateWebAppCommandInput} for command's `input` shape.
 * @see {@link UpdateWebAppCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
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
export class UpdateWebAppCommand extends $Command
  .classBuilder<
    UpdateWebAppCommandInput,
    UpdateWebAppCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "UpdateWebApp", {})
  .n("TransferClient", "UpdateWebAppCommand")
  .sc(UpdateWebApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebAppRequest;
      output: UpdateWebAppResponse;
    };
    sdk: {
      input: UpdateWebAppCommandInput;
      output: UpdateWebAppCommandOutput;
    };
  };
}
