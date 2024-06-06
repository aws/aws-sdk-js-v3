// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateReplicationSetInput, UpdateReplicationSetOutput } from "../models/models_0";
import { de_UpdateReplicationSetCommand, se_UpdateReplicationSetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Add or delete Regions from your replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
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
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 * @public
 */
export class UpdateReplicationSetCommand extends $Command
  .classBuilder<
    UpdateReplicationSetCommandInput,
    UpdateReplicationSetCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "UpdateReplicationSet", {})
  .n("SSMIncidentsClient", "UpdateReplicationSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReplicationSetCommand)
  .de(de_UpdateReplicationSetCommand)
  .build() {}
