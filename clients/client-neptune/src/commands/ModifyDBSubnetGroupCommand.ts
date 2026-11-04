// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyDBSubnetGroupMessage, ModifyDBSubnetGroupResult } from "../models/models_0";
import { ModifyDBSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandInput extends ModifyDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandOutput extends ModifyDBSubnetGroupResult, __MetadataBearer {}

/**
 * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // ModifyDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 *   DBSubnetGroupDescription: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBSubnetGroupResult
 * //   DBSubnetGroup: { // DBSubnetGroup
 * //     DBSubnetGroupName: "STRING_VALUE",
 * //     DBSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSubnetGroupArn: "STRING_VALUE",
 * //     SupportedNetworkTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBSubnetGroupCommandInput - {@link ModifyDBSubnetGroupCommandInput}
 * @returns {@link ModifyDBSubnetGroupCommandOutput}
 * @see {@link ModifyDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *
 * Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * *DBSubnetGroupName* does not refer to an existing DB subnet group.
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *
 * Request would result in user exceeding the allowed number of subnets in a DB subnet groups.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *
 * The DB subnet is already in use in the Availability Zone.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class ModifyDBSubnetGroupCommand extends command<ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput>(
  _ep0,
  _mw0,
  "ModifyDBSubnetGroup",
  ModifyDBSubnetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBSubnetGroupMessage;
      output: ModifyDBSubnetGroupResult;
    };
    sdk: {
      input: ModifyDBSubnetGroupCommandInput;
      output: ModifyDBSubnetGroupCommandOutput;
    };
  };
}
