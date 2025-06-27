// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBShardGroup } from "../models/models_0";
import { RebootDBShardGroupMessage } from "../models/models_1";
import { de_RebootDBShardGroupCommand, se_RebootDBShardGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebootDBShardGroupCommand}.
 */
export interface RebootDBShardGroupCommandInput extends RebootDBShardGroupMessage {}
/**
 * @public
 *
 * The output of {@link RebootDBShardGroupCommand}.
 */
export interface RebootDBShardGroupCommandOutput extends DBShardGroup, __MetadataBearer {}

/**
 * <p>You might need to reboot your DB shard group, usually for maintenance reasons. For example, if you make certain modifications, reboot
 *             the DB shard group for the changes to take effect.</p>
 *          <p>This operation applies only to Aurora Limitless Database DBb shard groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RebootDBShardGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RebootDBShardGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // RebootDBShardGroupMessage
 *   DBShardGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new RebootDBShardGroupCommand(input);
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
 * @param RebootDBShardGroupCommandInput - {@link RebootDBShardGroupCommandInput}
 * @returns {@link RebootDBShardGroupCommandOutput}
 * @see {@link RebootDBShardGroupCommandInput} for command's `input` shape.
 * @see {@link RebootDBShardGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBShardGroupNotFoundFault} (client fault)
 *  <p>The specified DB shard group name wasn't found.</p>
 *
 * @throws {@link InvalidDBShardGroupStateFault} (client fault)
 *  <p>The DB shard group must be in the available state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class RebootDBShardGroupCommand extends $Command
  .classBuilder<
    RebootDBShardGroupCommandInput,
    RebootDBShardGroupCommandOutput,
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
  .s("AmazonRDSv19", "RebootDBShardGroup", {})
  .n("RDSClient", "RebootDBShardGroupCommand")
  .f(void 0, void 0)
  .ser(se_RebootDBShardGroupCommand)
  .de(de_RebootDBShardGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootDBShardGroupMessage;
      output: DBShardGroup;
    };
    sdk: {
      input: RebootDBShardGroupCommandInput;
      output: RebootDBShardGroupCommandOutput;
    };
  };
}
