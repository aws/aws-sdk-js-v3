// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartOrganizationServiceAccessUpdateRequest,
  StartOrganizationServiceAccessUpdateResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_StartOrganizationServiceAccessUpdateCommand,
  se_StartOrganizationServiceAccessUpdateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOrganizationServiceAccessUpdateCommand}.
 */
export interface StartOrganizationServiceAccessUpdateCommandInput extends StartOrganizationServiceAccessUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartOrganizationServiceAccessUpdateCommand}.
 */
export interface StartOrganizationServiceAccessUpdateCommandOutput
  extends StartOrganizationServiceAccessUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // StartOrganizationServiceAccessUpdateRequest
 *   Action: "STRING_VALUE", // required
 * };
 * const command = new StartOrganizationServiceAccessUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartOrganizationServiceAccessUpdateResponse
 * //   OrganizationStatus: { // OrganizationStatus
 * //     OrganizationId: "STRING_VALUE",
 * //     OrganizationAwsServiceAccessStatus: "STRING_VALUE",
 * //     SLRDeploymentStatus: "STRING_VALUE",
 * //     AccountStatusList: [ // AccountStatusList
 * //       { // AccountStatus
 * //         AccountId: "STRING_VALUE",
 * //         SLRDeploymentStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StartOrganizationServiceAccessUpdateCommandInput - {@link StartOrganizationServiceAccessUpdateCommandInput}
 * @returns {@link StartOrganizationServiceAccessUpdateCommandOutput}
 * @see {@link StartOrganizationServiceAccessUpdateCommandInput} for command's `input` shape.
 * @see {@link StartOrganizationServiceAccessUpdateCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class StartOrganizationServiceAccessUpdateCommand extends $Command
  .classBuilder<
    StartOrganizationServiceAccessUpdateCommandInput,
    StartOrganizationServiceAccessUpdateCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "StartOrganizationServiceAccessUpdate", {})
  .n("NetworkManagerClient", "StartOrganizationServiceAccessUpdateCommand")
  .f(void 0, void 0)
  .ser(se_StartOrganizationServiceAccessUpdateCommand)
  .de(de_StartOrganizationServiceAccessUpdateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOrganizationServiceAccessUpdateRequest;
      output: StartOrganizationServiceAccessUpdateResponse;
    };
    sdk: {
      input: StartOrganizationServiceAccessUpdateCommandInput;
      output: StartOrganizationServiceAccessUpdateCommandOutput;
    };
  };
}
