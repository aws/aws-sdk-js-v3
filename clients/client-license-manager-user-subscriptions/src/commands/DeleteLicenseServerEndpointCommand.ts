// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { DeleteLicenseServerEndpointRequest, DeleteLicenseServerEndpointResponse } from "../models/models_0";
import {
  de_DeleteLicenseServerEndpointCommand,
  se_DeleteLicenseServerEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteLicenseServerEndpointCommandOutput
  extends DeleteLicenseServerEndpointResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a <code>LicenseServerEndpoint</code> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, DeleteLicenseServerEndpointCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, DeleteLicenseServerEndpointCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
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
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 * 			resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 * @public
 */
export class DeleteLicenseServerEndpointCommand extends $Command
  .classBuilder<
    DeleteLicenseServerEndpointCommandInput,
    DeleteLicenseServerEndpointCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerUserSubscriptions", "DeleteLicenseServerEndpoint", {})
  .n("LicenseManagerUserSubscriptionsClient", "DeleteLicenseServerEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLicenseServerEndpointCommand)
  .de(de_DeleteLicenseServerEndpointCommand)
  .build() {
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
