// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWebAppRequest, UpdateWebAppResponse } from "../models/models_0";
import { UpdateWebApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Assigns new properties to a web app. You can modify the access point, identity provider details, endpoint configuration, and the web app units.
 *
 * For more information about using VPC endpoints with Transfer Family, see [Create a Transfer Family web app in a VPC](https://docs.aws.amazon.com/transfer/latest/userguide/create-webapp-in-vpc.html).
 *
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
 *       IpAddressType: "IPV4" || "DUALSTACK",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the `UpdateServer` is called for a file transfer protocol-enabled server that has VPC as the endpoint type and the server's `VpcEndpointID` is not in the available state.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class UpdateWebAppCommand extends command<UpdateWebAppCommandInput, UpdateWebAppCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWebApp",
  UpdateWebApp$
) {
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
