// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyDBParameterGroupMessage, CopyDBParameterGroupResult } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CopyDBParameterGroup } from "../schemas/schemas_30_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyDBParameterGroupCommand}.
 */
export interface CopyDBParameterGroupCommandInput extends CopyDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBParameterGroupCommand}.
 */
export interface CopyDBParameterGroupCommandOutput extends CopyDBParameterGroupResult, __MetadataBearer {}

/**
 * <p>Copies the specified DB parameter group.</p>
 *          <note>
 *             <p>You can't copy a default DB parameter group. Instead, create a new custom DB parameter group, which copies the default
 *                 parameters and values for the specified DB parameter group family.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CopyDBParameterGroupMessage
 *   SourceDBParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBParameterGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBParameterGroupResult
 * //   DBParameterGroup: { // DBParameterGroup
 * //     DBParameterGroupName: "STRING_VALUE",
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DBParameterGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBParameterGroupCommandInput - {@link CopyDBParameterGroupCommandInput}
 * @returns {@link CopyDBParameterGroupCommandOutput}
 * @see {@link CopyDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CopyDBParameterGroupCommandOutput} for command's `response` shape.
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
 * @example To copy a DB parameter group
 * ```javascript
 * // The following example makes a copy of a DB parameter group.
 * const input = {
 *   SourceDBParameterGroupIdentifier: "mydbpg",
 *   TargetDBParameterGroupDescription: "Copy of mydbpg parameter group",
 *   TargetDBParameterGroupIdentifier: "mydbpgcopy"
 * };
 * const command = new CopyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBParameterGroup: {
 *     DBParameterGroupArn: "arn:aws:rds:us-east-1:814387698303:pg:mydbpgcopy",
 *     DBParameterGroupFamily: "mysql5.7",
 *     DBParameterGroupName: "mydbpgcopy",
 *     Description: "Copy of mydbpg parameter group"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopyDBParameterGroupCommand extends $Command
  .classBuilder<
    CopyDBParameterGroupCommandInput,
    CopyDBParameterGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "CopyDBParameterGroup", {})
  .n("RDSClient", "CopyDBParameterGroupCommand")
  .sc(CopyDBParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyDBParameterGroupMessage;
      output: CopyDBParameterGroupResult;
    };
    sdk: {
      input: CopyDBParameterGroupCommandInput;
      output: CopyDBParameterGroupCommandOutput;
    };
  };
}
