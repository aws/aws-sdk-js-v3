// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBShardGroup } from "../models/models_0";
import { ModifyDBShardGroupMessage } from "../models/models_1";
import { de_ModifyDBShardGroupCommand, se_ModifyDBShardGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ModifyDBShardGroup", {})
  .n("RDSClient", "ModifyDBShardGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBShardGroupCommand)
  .de(de_ModifyDBShardGroupCommand)
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
