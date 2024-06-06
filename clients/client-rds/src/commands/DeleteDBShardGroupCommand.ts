// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBShardGroup, DeleteDBShardGroupMessage } from "../models/models_0";
import { de_DeleteDBShardGroupCommand, se_DeleteDBShardGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBShardGroupCommand}.
 */
export interface DeleteDBShardGroupCommandInput extends DeleteDBShardGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBShardGroupCommand}.
 */
export interface DeleteDBShardGroupCommandOutput extends DBShardGroup, __MetadataBearer {}

/**
 * <p>Deletes an Aurora Limitless Database DB shard group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBShardGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBShardGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBShardGroupMessage
 *   DBShardGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBShardGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBShardGroup
 * //   DBShardGroupResourceId: "STRING_VALUE",
 * //   DBShardGroupIdentifier: "STRING_VALUE",
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   MaxACU: Number("double"),
 * //   ComputeRedundancy: Number("int"),
 * //   Status: "STRING_VALUE",
 * //   PubliclyAccessible: true || false,
 * //   Endpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDBShardGroupCommandInput - {@link DeleteDBShardGroupCommandInput}
 * @returns {@link DeleteDBShardGroupCommandOutput}
 * @see {@link DeleteDBShardGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBShardGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBShardGroupNotFoundFault} (client fault)
 *  <p>The specified DB shard group name wasn't found.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBShardGroupStateFault} (client fault)
 *  <p>The DB shard group must be in the available state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class DeleteDBShardGroupCommand extends $Command
  .classBuilder<
    DeleteDBShardGroupCommandInput,
    DeleteDBShardGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeleteDBShardGroup", {})
  .n("RDSClient", "DeleteDBShardGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBShardGroupCommand)
  .de(de_DeleteDBShardGroupCommand)
  .build() {}
