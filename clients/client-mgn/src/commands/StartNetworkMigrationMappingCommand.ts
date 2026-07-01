// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartNetworkMigrationMappingRequest, StartNetworkMigrationMappingResponse } from "../models/models_0";
import { StartNetworkMigrationMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartNetworkMigrationMappingCommand}.
 */
export interface StartNetworkMigrationMappingCommandInput extends StartNetworkMigrationMappingRequest {}
/**
 * @public
 *
 * The output of {@link StartNetworkMigrationMappingCommand}.
 */
export interface StartNetworkMigrationMappingCommandOutput extends StartNetworkMigrationMappingResponse, __MetadataBearer {}

/**
 * <p>Starts the network migration mapping process for a given network migration execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartNetworkMigrationMappingCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartNetworkMigrationMappingCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartNetworkMigrationMappingRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   securityGroupMappingStrategy: "STRING_VALUE",
 * };
 * const command = new StartNetworkMigrationMappingCommand(input);
 * const response = await client.send(command);
 * // { // StartNetworkMigrationMappingResponse
 * //   jobID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNetworkMigrationMappingCommandInput - {@link StartNetworkMigrationMappingCommandInput}
 * @returns {@link StartNetworkMigrationMappingCommandOutput}
 * @see {@link StartNetworkMigrationMappingCommandInput} for command's `input` shape.
 * @see {@link StartNetworkMigrationMappingCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample StartNetworkMigrationMapping call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new StartNetworkMigrationMappingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobID: "01234567-abcd-abcd-efab-0123456789ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartNetworkMigrationMappingCommand extends command<StartNetworkMigrationMappingCommandInput, StartNetworkMigrationMappingCommandOutput>(
  _ep0,
  _mw0,
  "StartNetworkMigrationMapping",
  StartNetworkMigrationMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNetworkMigrationMappingRequest;
      output: StartNetworkMigrationMappingResponse;
    };
    sdk: {
      input: StartNetworkMigrationMappingCommandInput;
      output: StartNetworkMigrationMappingCommandOutput;
    };
  };
}
