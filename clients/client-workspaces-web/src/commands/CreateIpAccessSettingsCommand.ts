// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIpAccessSettingsRequest, CreateIpAccessSettingsResponse } from "../models/models_0";
import { CreateIpAccessSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIpAccessSettingsCommand}.
 */
export interface CreateIpAccessSettingsCommandInput extends CreateIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpAccessSettingsCommand}.
 */
export interface CreateIpAccessSettingsCommandOutput extends CreateIpAccessSettingsResponse, __MetadataBearer {}

/**
 * Creates an IP access settings resource that can be associated with a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateIpAccessSettingsRequest
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   customerManagedKey: "STRING_VALUE",
 *   additionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ipRules: [ // IpRuleList // required
 *     { // IpRule
 *       ipRange: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpAccessSettingsResponse
 * //   ipAccessSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIpAccessSettingsCommandInput - {@link CreateIpAccessSettingsCommandInput}
 * @returns {@link CreateIpAccessSettingsCommandOutput}
 * @see {@link CreateIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class CreateIpAccessSettingsCommand extends command<CreateIpAccessSettingsCommandInput, CreateIpAccessSettingsCommandOutput>(
  _ep0,
  _mw0,
  "CreateIpAccessSettings",
  CreateIpAccessSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpAccessSettingsRequest;
      output: CreateIpAccessSettingsResponse;
    };
    sdk: {
      input: CreateIpAccessSettingsCommandInput;
      output: CreateIpAccessSettingsCommandOutput;
    };
  };
}
