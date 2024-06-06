// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyDBParameterGroupMessage, CopyDBParameterGroupResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_CopyDBParameterGroupCommand, se_CopyDBParameterGroupCommand } from "../protocols/Aws_query";

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
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
 * @public
 */
export class CopyDBParameterGroupCommand extends $Command
  .classBuilder<
    CopyDBParameterGroupCommandInput,
    CopyDBParameterGroupCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CopyDBParameterGroup", {})
  .n("NeptuneClient", "CopyDBParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_CopyDBParameterGroupCommand)
  .de(de_CopyDBParameterGroupCommand)
  .build() {}
