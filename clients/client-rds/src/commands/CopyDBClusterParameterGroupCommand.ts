// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyDBClusterParameterGroupMessage, CopyDBClusterParameterGroupResult } from "../models/models_0";
import { de_CopyDBClusterParameterGroupCommand, se_CopyDBClusterParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 *          <note>
 *             <p>You can't copy a default DB cluster parameter group. Instead, create a new custom DB cluster parameter group, which copies
 *                 the default parameters and values for the specified DB cluster parameter group family.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A DB parameter group with the same name exists.</p>
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To copy a DB cluster parameter group
 * ```javascript
 * // This example copies a DB cluster parameter group.
 * const input = {
 *   SourceDBClusterParameterGroupIdentifier: "mydbclusterparametergroup",
 *   TargetDBClusterParameterGroupDescription: "My DB cluster parameter group copy",
 *   TargetDBClusterParameterGroupIdentifier: "mydbclusterparametergroup-copy"
 * };
 * const command = new CopyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterParameterGroup: {
 *     DBClusterParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:cluster-pg:mydbclusterparametergroup-copy",
 *     DBClusterParameterGroupName: "mydbclusterparametergroup-copy",
 *     DBParameterGroupFamily: "aurora-mysql5.7",
 *     Description: "My DB cluster parameter group copy"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopyDBClusterParameterGroupCommand extends $Command
  .classBuilder<
    CopyDBClusterParameterGroupCommandInput,
    CopyDBClusterParameterGroupCommandOutput,
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
  .s("AmazonRDSv19", "CopyDBClusterParameterGroup", {})
  .n("RDSClient", "CopyDBClusterParameterGroupCommand")
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
