// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBClusterEndpointMessage, CreateDBClusterEndpointOutput } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBClusterEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.</p>
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
 *  <p>The specified custom endpoint cannot be created because it already exists.</p>
 *
 * @throws {@link DBClusterEndpointQuotaExceededFault} (client fault)
 *  <p>The cluster already has the maximum number of custom endpoints.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The specified DB instance is not in the <i>available</i> state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class CreateDBClusterEndpointCommand extends $Command
  .classBuilder<
    CreateDBClusterEndpointCommandInput,
    CreateDBClusterEndpointCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "CreateDBClusterEndpoint", {})
  .n("NeptuneClient", "CreateDBClusterEndpointCommand")
  .sc(CreateDBClusterEndpoint)
  .build() {
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
