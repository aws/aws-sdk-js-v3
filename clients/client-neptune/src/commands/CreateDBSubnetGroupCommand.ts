// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDBSubnetGroupMessage, CreateDBSubnetGroupResult } from "../models/models_0";
import { CreateDBSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandInput extends CreateDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandOutput extends CreateDBSubnetGroupResult, __MetadataBearer {}

/**
 * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // CreateDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 *   DBSubnetGroupDescription: "STRING_VALUE", // required
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBSubnetGroupResult
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
 * @param CreateDBSubnetGroupCommandInput - {@link CreateDBSubnetGroupCommandInput}
 * @returns {@link CreateDBSubnetGroupCommandOutput}
 * @see {@link CreateDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupAlreadyExistsFault} (client fault)
 *
 * *DBSubnetGroupName* is already used by an existing DB subnet group.
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *
 * Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.
 *
 * @throws {@link DBSubnetGroupQuotaExceededFault} (client fault)
 *
 * Request would result in user exceeding the allowed number of DB subnet groups.
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *
 * Request would result in user exceeding the allowed number of subnets in a DB subnet groups.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class CreateDBSubnetGroupCommand extends command<CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateDBSubnetGroup",
  CreateDBSubnetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBSubnetGroupMessage;
      output: CreateDBSubnetGroupResult;
    };
    sdk: {
      input: CreateDBSubnetGroupCommandInput;
      output: CreateDBSubnetGroupCommandOutput;
    };
  };
}
