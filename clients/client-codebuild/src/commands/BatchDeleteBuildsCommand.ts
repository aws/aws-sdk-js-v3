// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteBuildsInput, BatchDeleteBuildsOutput } from "../models/models_0";
import { BatchDeleteBuilds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteBuildsCommand}.
 */
export interface BatchDeleteBuildsCommandInput extends BatchDeleteBuildsInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteBuildsCommand}.
 */
export interface BatchDeleteBuildsCommandOutput extends BatchDeleteBuildsOutput, __MetadataBearer {}

/**
 * <p>Deletes one or more builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchDeleteBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchDeleteBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // BatchDeleteBuildsInput
 *   ids: [ // BuildIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteBuildsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteBuildsOutput
 * //   buildsDeleted: [ // BuildIds
 * //     "STRING_VALUE",
 * //   ],
 * //   buildsNotDeleted: [ // BuildsNotDeleted
 * //     { // BuildNotDeleted
 * //       id: "STRING_VALUE",
 * //       statusCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteBuildsCommandInput - {@link BatchDeleteBuildsCommandInput}
 * @returns {@link BatchDeleteBuildsCommandOutput}
 * @see {@link BatchDeleteBuildsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteBuildsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class BatchDeleteBuildsCommand extends command<BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteBuilds",
  BatchDeleteBuilds$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteBuildsInput;
      output: BatchDeleteBuildsOutput;
    };
    sdk: {
      input: BatchDeleteBuildsCommandInput;
      output: BatchDeleteBuildsCommandOutput;
    };
  };
}
