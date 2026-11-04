// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDBClusterEndpointMessage, CreateDBClusterEndpointOutput } from "../models/models_0";
import { CreateDBClusterEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDBClusterEndpointCommand}.
 */
export interface CreateDBClusterEndpointCommandInput extends CreateDBClusterEndpointMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterEndpointCommand}.
 */
export interface CreateDBClusterEndpointCommandOutput extends CreateDBClusterEndpointOutput, __MetadataBearer {}

/**
 * Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterEndpointCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterEndpointCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // CreateDBClusterEndpointMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   DBClusterEndpointIdentifier: "STRING_VALUE", // required
 *   EndpointType: "STRING_VALUE", // required
 *   StaticMembers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ExcludedMembers: [
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterEndpointOutput
 * //   DBClusterEndpointIdentifier: "STRING_VALUE",
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //   Endpoint: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   EndpointType: "STRING_VALUE",
 * //   CustomEndpointType: "STRING_VALUE",
 * //   StaticMembers: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ExcludedMembers: [
 * //     "STRING_VALUE",
 * //   ],
 * //   DBClusterEndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDBClusterEndpointCommandInput - {@link CreateDBClusterEndpointCommandInput}
 * @returns {@link CreateDBClusterEndpointCommandOutput}
 * @see {@link CreateDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterEndpointAlreadyExistsFault} (client fault)
 *
 * The specified custom endpoint cannot be created because it already exists.
 *
 * @throws {@link DBClusterEndpointQuotaExceededFault} (client fault)
 *
 * The cluster already has the maximum number of custom endpoints.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * *DBClusterIdentifier* does not refer to an existing DB cluster.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *
 * *DBInstanceIdentifier* does not refer to an existing DB instance.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The DB cluster is not in a valid state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The specified DB instance is not in the *available* state.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class CreateDBClusterEndpointCommand extends command<CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateDBClusterEndpoint",
  CreateDBClusterEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBClusterEndpointMessage;
      output: CreateDBClusterEndpointOutput;
    };
    sdk: {
      input: CreateDBClusterEndpointCommandInput;
      output: CreateDBClusterEndpointCommandOutput;
    };
  };
}
