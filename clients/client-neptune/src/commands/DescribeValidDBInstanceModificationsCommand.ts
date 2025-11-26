// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
} from "../models/models_0";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DescribeValidDBInstanceModifications } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeValidDBInstanceModificationsCommand}.
 */
export interface DescribeValidDBInstanceModificationsCommandInput extends DescribeValidDBInstanceModificationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeValidDBInstanceModificationsCommand}.
 */
export interface DescribeValidDBInstanceModificationsCommandOutput
  extends DescribeValidDBInstanceModificationsResult,
    __MetadataBearer {}

/**
 * <p>You can call <a>DescribeValidDBInstanceModifications</a>
 *       to learn what modifications you can make to your DB instance. You can use this
 *       information when you call <a>ModifyDBInstance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeValidDBInstanceModificationsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeValidDBInstanceModificationsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeValidDBInstanceModificationsMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeValidDBInstanceModificationsResult
 * //   ValidDBInstanceModificationsMessage: { // ValidDBInstanceModificationsMessage
 * //     Storage: [ // ValidStorageOptionsList
 * //       { // ValidStorageOptions
 * //         StorageType: "STRING_VALUE",
 * //         StorageSize: [ // RangeList
 * //           { // Range
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         ProvisionedIops: [
 * //           {
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         IopsToStorageRatio: [ // DoubleRangeList
 * //           { // DoubleRange
 * //             From: Number("double"),
 * //             To: Number("double"),
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeValidDBInstanceModificationsCommandInput - {@link DescribeValidDBInstanceModificationsCommandInput}
 * @returns {@link DescribeValidDBInstanceModificationsCommandOutput}
 * @see {@link DescribeValidDBInstanceModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeValidDBInstanceModificationsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
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
export class DescribeValidDBInstanceModificationsCommand extends $Command
  .classBuilder<
    DescribeValidDBInstanceModificationsCommandInput,
    DescribeValidDBInstanceModificationsCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeValidDBInstanceModifications", {})
  .n("NeptuneClient", "DescribeValidDBInstanceModificationsCommand")
  .sc(DescribeValidDBInstanceModifications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeValidDBInstanceModificationsMessage;
      output: DescribeValidDBInstanceModificationsResult;
    };
    sdk: {
      input: DescribeValidDBInstanceModificationsCommandInput;
      output: DescribeValidDBInstanceModificationsCommandOutput;
    };
  };
}
