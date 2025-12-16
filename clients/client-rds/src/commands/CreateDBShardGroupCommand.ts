// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDBShardGroupMessage, DBShardGroup } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBShardGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBShardGroupCommand}.
 */
export interface CreateDBShardGroupCommandInput extends CreateDBShardGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBShardGroupCommand}.
 */
export interface CreateDBShardGroupCommandOutput extends DBShardGroup, __MetadataBearer {}

/**
 * <p>Creates a new DB shard group for Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.</p>
 *          <p>Valid for: Aurora DB clusters only</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBShardGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBShardGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBShardGroupMessage
 *   DBShardGroupIdentifier: "STRING_VALUE", // required
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   ComputeRedundancy: Number("int"),
 *   MaxACU: Number("double"), // required
 *   MinACU: Number("double"),
 *   PubliclyAccessible: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBShardGroupCommand(input);
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
 * @param CreateDBShardGroupCommandInput - {@link CreateDBShardGroupCommandInput}
 * @returns {@link CreateDBShardGroupCommandOutput}
 * @see {@link CreateDBShardGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBShardGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBShardGroupAlreadyExistsFault} (client fault)
 *  <p>The specified DB shard group name must be unique in your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
 *
 * @throws {@link MaxDBShardGroupLimitReached} (client fault)
 *  <p>The maximum number of DB shard groups for your Amazon Web Services account in the specified Amazon Web Services Region has been reached.</p>
 *
 * @throws {@link NetworkTypeNotSupported} (client fault)
 *  <p>The network type is invalid for the DB instance. Valid nework type values are <code>IPV4</code> and <code>DUAL</code>.</p>
 *
 * @throws {@link UnsupportedDBEngineVersionFault} (client fault)
 *  <p>The specified DB engine version isn't supported for Aurora Limitless Database.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class CreateDBShardGroupCommand extends $Command
  .classBuilder<
    CreateDBShardGroupCommandInput,
    CreateDBShardGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "CreateDBShardGroup", {})
  .n("RDSClient", "CreateDBShardGroupCommand")
  .sc(CreateDBShardGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBShardGroupMessage;
      output: DBShardGroup;
    };
    sdk: {
      input: CreateDBShardGroupCommandInput;
      output: CreateDBShardGroupCommandOutput;
    };
  };
}
