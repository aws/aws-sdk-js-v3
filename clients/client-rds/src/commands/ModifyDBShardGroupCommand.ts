// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBShardGroup } from "../models/models_0";
import type { ModifyDBShardGroupMessage } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBShardGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBShardGroupCommand}.
 */
export interface ModifyDBShardGroupCommandInput extends ModifyDBShardGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBShardGroupCommand}.
 */
export interface ModifyDBShardGroupCommandOutput extends DBShardGroup, __MetadataBearer {}

/**
 * <p>Modifies the settings of an Aurora Limitless Database DB shard group. You can change one or more settings by
 *             specifying these parameters and the new values in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBShardGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBShardGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyDBShardGroupMessage
 *   DBShardGroupIdentifier: "STRING_VALUE", // required
 *   MaxACU: Number("double"),
 *   MinACU: Number("double"),
 *   ComputeRedundancy: Number("int"),
 * };
 * const command = new ModifyDBShardGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBShardGroup
 * //   DBShardGroupResourceId: "STRING_VALUE",
 * //   DBShardGroupIdentifier: "STRING_VALUE",
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   MaxACU: Number("double"),
 * //   MinACU: Number("double"),
 * //   ComputeRedundancy: Number("int"),
 * //   Status: "STRING_VALUE",
 * //   PubliclyAccessible: true || false,
 * //   Endpoint: "STRING_VALUE",
 * //   DBShardGroupArn: "STRING_VALUE",
 * //   TagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyDBShardGroupCommandInput - {@link ModifyDBShardGroupCommandInput}
 * @returns {@link ModifyDBShardGroupCommandOutput}
 * @see {@link ModifyDBShardGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBShardGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBShardGroupAlreadyExistsFault} (client fault)
 *  <p>The specified DB shard group name must be unique in your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBShardGroupNotFoundFault} (client fault)
 *  <p>The specified DB shard group name wasn't found.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class ModifyDBShardGroupCommand extends $Command
  .classBuilder<
    ModifyDBShardGroupCommandInput,
    ModifyDBShardGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyDBShardGroup", {})
  .n("RDSClient", "ModifyDBShardGroupCommand")
  .sc(ModifyDBShardGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBShardGroupMessage;
      output: DBShardGroup;
    };
    sdk: {
      input: ModifyDBShardGroupCommandInput;
      output: ModifyDBShardGroupCommandOutput;
    };
  };
}
