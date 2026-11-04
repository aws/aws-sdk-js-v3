// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CopyDBParameterGroupMessage, CopyDBParameterGroupResult } from "../models/models_0";
import { CopyDBParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Copies the specified DB parameter group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
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
 *
 * A DB parameter group with the same name exists.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *
 * *DBParameterGroupName* does not refer to an existing DB parameter group.
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *
 * Request would result in user exceeding the allowed number of DB parameter groups.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class CopyDBParameterGroupCommand extends command<CopyDBParameterGroupCommandInput, CopyDBParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "CopyDBParameterGroup",
  CopyDBParameterGroup$
) {
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
