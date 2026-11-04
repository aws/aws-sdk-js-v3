// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartOrganizationServiceAccessUpdateRequest,
  StartOrganizationServiceAccessUpdateResponse,
} from "../models/models_0";
import { StartOrganizationServiceAccessUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StartOrganizationServiceAccessUpdateCommandOutput extends StartOrganizationServiceAccessUpdateResponse, __MetadataBearer {}

/**
 * Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service limit was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class StartOrganizationServiceAccessUpdateCommand extends command<StartOrganizationServiceAccessUpdateCommandInput, StartOrganizationServiceAccessUpdateCommandOutput>(
  _ep0,
  _mw0,
  "StartOrganizationServiceAccessUpdate",
  StartOrganizationServiceAccessUpdate$
) {
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
