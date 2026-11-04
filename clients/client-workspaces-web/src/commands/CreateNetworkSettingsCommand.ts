// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNetworkSettingsRequest, CreateNetworkSettingsResponse } from "../models/models_0";
import { CreateNetworkSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNetworkSettingsCommand}.
 */
export interface CreateNetworkSettingsCommandInput extends CreateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkSettingsCommand}.
 */
export interface CreateNetworkSettingsCommandOutput extends CreateNetworkSettingsResponse, __MetadataBearer {}

/**
 * Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateNetworkSettingsRequest
 *   vpcId: "STRING_VALUE", // required
 *   subnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [ // SecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkSettingsResponse
 * //   networkSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateNetworkSettingsCommandInput - {@link CreateNetworkSettingsCommandInput}
 * @returns {@link CreateNetworkSettingsCommandOutput}
 * @see {@link CreateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class CreateNetworkSettingsCommand extends command<CreateNetworkSettingsCommandInput, CreateNetworkSettingsCommandOutput>(
  _ep0,
  _mw0,
  "CreateNetworkSettings",
  CreateNetworkSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkSettingsRequest;
      output: CreateNetworkSettingsResponse;
    };
    sdk: {
      input: CreateNetworkSettingsCommandInput;
      output: CreateNetworkSettingsCommandOutput;
    };
  };
}
