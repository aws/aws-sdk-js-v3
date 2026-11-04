// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateReplicationSetInput, UpdateReplicationSetOutput } from "../models/models_0";
import { UpdateReplicationSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateReplicationSetCommand}.
 */
export interface UpdateReplicationSetCommandInput extends UpdateReplicationSetInput {}
/**
 * @public
 *
 * The output of {@link UpdateReplicationSetCommand}.
 */
export interface UpdateReplicationSetCommandOutput extends UpdateReplicationSetOutput, __MetadataBearer {}

/**
 * Add or delete Regions from your replication set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // UpdateReplicationSetInput
 *   arn: "STRING_VALUE", // required
 *   actions: [ // UpdateActionList // required
 *     { // UpdateReplicationSetAction Union: only one key present
 *       addRegionAction: { // AddRegionAction
 *         regionName: "STRING_VALUE", // required
 *         sseKmsKeyId: "STRING_VALUE",
 *       },
 *       deleteRegionAction: { // DeleteRegionAction
 *         regionName: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateReplicationSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateReplicationSetCommandInput - {@link UpdateReplicationSetCommandInput}
 * @returns {@link UpdateReplicationSetCommandOutput}
 * @see {@link UpdateReplicationSetCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource causes an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMIncidentsServiceException}
 *
 * Base exception class for all service exceptions from SSMIncidents service.
 *
 * @public
 */
export class UpdateReplicationSetCommand extends command<UpdateReplicationSetCommandInput, UpdateReplicationSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateReplicationSet",
  UpdateReplicationSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReplicationSetInput;
      output: {};
    };
    sdk: {
      input: UpdateReplicationSetCommandInput;
      output: UpdateReplicationSetCommandOutput;
    };
  };
}
