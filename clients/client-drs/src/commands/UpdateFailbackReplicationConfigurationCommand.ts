// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFailbackReplicationConfigurationRequest } from "../models/models_0";
import { UpdateFailbackReplicationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFailbackReplicationConfigurationCommand}.
 */
export interface UpdateFailbackReplicationConfigurationCommandInput extends UpdateFailbackReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFailbackReplicationConfigurationCommand}.
 */
export interface UpdateFailbackReplicationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Allows you to update the failback replication configuration of a Recovery Instance by ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, UpdateFailbackReplicationConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, UpdateFailbackReplicationConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // UpdateFailbackReplicationConfigurationRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"),
 *   usePrivateIP: true || false,
 *   internetProtocol: "STRING_VALUE",
 * };
 * const command = new UpdateFailbackReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFailbackReplicationConfigurationCommandInput - {@link UpdateFailbackReplicationConfigurationCommandInput}
 * @returns {@link UpdateFailbackReplicationConfigurationCommandOutput}
 * @see {@link UpdateFailbackReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFailbackReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class UpdateFailbackReplicationConfigurationCommand extends command<UpdateFailbackReplicationConfigurationCommandInput, UpdateFailbackReplicationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFailbackReplicationConfiguration",
  UpdateFailbackReplicationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFailbackReplicationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateFailbackReplicationConfigurationCommandInput;
      output: UpdateFailbackReplicationConfigurationCommandOutput;
    };
  };
}
