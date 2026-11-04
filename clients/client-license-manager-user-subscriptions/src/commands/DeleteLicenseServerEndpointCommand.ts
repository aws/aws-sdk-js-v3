// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLicenseServerEndpointRequest, DeleteLicenseServerEndpointResponse } from "../models/models_0";
import { DeleteLicenseServerEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLicenseServerEndpointCommand}.
 */
export interface DeleteLicenseServerEndpointCommandInput extends DeleteLicenseServerEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseServerEndpointCommand}.
 */
export interface DeleteLicenseServerEndpointCommandOutput extends DeleteLicenseServerEndpointResponse, __MetadataBearer {}

/**
 * Deletes a `LicenseServerEndpoint` resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, DeleteLicenseServerEndpointCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, DeleteLicenseServerEndpointCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // DeleteLicenseServerEndpointRequest
 *   LicenseServerEndpointArn: "STRING_VALUE", // required
 *   ServerType: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseServerEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLicenseServerEndpointResponse
 * //   LicenseServerEndpoint: { // LicenseServerEndpoint
 * //     IdentityProviderArn: "STRING_VALUE",
 * //     ServerType: "STRING_VALUE",
 * //     ServerEndpoint: { // ServerEndpoint
 * //       Endpoint: "STRING_VALUE",
 * //     },
 * //     StatusMessage: "STRING_VALUE",
 * //     LicenseServerEndpointId: "STRING_VALUE",
 * //     LicenseServerEndpointArn: "STRING_VALUE",
 * //     LicenseServerEndpointProvisioningStatus: "STRING_VALUE",
 * //     LicenseServers: [ // LicenseServerList
 * //       { // LicenseServer
 * //         ProvisioningStatus: "STRING_VALUE",
 * //         HealthStatus: "STRING_VALUE",
 * //         Ipv4Address: "STRING_VALUE",
 * //         Ipv6Address: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLicenseServerEndpointCommandInput - {@link DeleteLicenseServerEndpointCommandInput}
 * @returns {@link DeleteLicenseServerEndpointCommandOutput}
 * @see {@link DeleteLicenseServerEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseServerEndpointCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (server fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request failed because a service quota is exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 *
 * Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.
 *
 * @public
 */
export class DeleteLicenseServerEndpointCommand extends command<DeleteLicenseServerEndpointCommandInput, DeleteLicenseServerEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLicenseServerEndpoint",
  DeleteLicenseServerEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseServerEndpointRequest;
      output: DeleteLicenseServerEndpointResponse;
    };
    sdk: {
      input: DeleteLicenseServerEndpointCommandInput;
      output: DeleteLicenseServerEndpointCommandOutput;
    };
  };
}
