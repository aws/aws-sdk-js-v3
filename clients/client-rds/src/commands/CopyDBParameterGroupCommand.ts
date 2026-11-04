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
 * > **Note:** You can't copy a default DB parameter group. Instead, create a new custom DB parameter group, which copies the default parameters and values for the specified DB parameter group family.
 *
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
 *
 * A DB parameter group with the same name exists.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *
 * `DBParameterGroupName` doesn't refer to an existing DB parameter group.
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of DB parameter groups.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
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
