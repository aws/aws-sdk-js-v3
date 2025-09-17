// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyDBClusterParameterGroupMessage, CopyDBClusterParameterGroupResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_CopyDBClusterParameterGroupCommand, se_CopyDBClusterParameterGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyDBClusterParameterGroupCommand}.
 */
export interface CopyDBClusterParameterGroupCommandInput extends CopyDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBClusterParameterGroupCommand}.
 */
export interface CopyDBClusterParameterGroupCommandOutput extends CopyDBClusterParameterGroupResult, __MetadataBearer {}

/**
 * <p>Copies the specified DB cluster parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // CopyDBClusterParameterGroupMessage
 *   SourceDBClusterParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBClusterParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBClusterParameterGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBClusterParameterGroupResult
 * //   DBClusterParameterGroup: { // DBClusterParameterGroup
 * //     DBClusterParameterGroupName: "STRING_VALUE",
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DBClusterParameterGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBClusterParameterGroupCommandInput - {@link CopyDBClusterParameterGroupCommandInput}
 * @returns {@link CopyDBClusterParameterGroupCommandOutput}
 * @see {@link CopyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A DB parameter group with the same name exists.</p>
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class CopyDBClusterParameterGroupCommand extends $Command
  .classBuilder<
    CopyDBClusterParameterGroupCommandInput,
    CopyDBClusterParameterGroupCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CopyDBClusterParameterGroup", {})
  .n("NeptuneClient", "CopyDBClusterParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_CopyDBClusterParameterGroupCommand)
  .de(de_CopyDBClusterParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyDBClusterParameterGroupMessage;
      output: CopyDBClusterParameterGroupResult;
    };
    sdk: {
      input: CopyDBClusterParameterGroupCommandInput;
      output: CopyDBClusterParameterGroupCommandOutput;
    };
  };
}
