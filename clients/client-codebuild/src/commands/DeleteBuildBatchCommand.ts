// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBuildBatchInput, DeleteBuildBatchOutput } from "../models/models_0";
import { DeleteBuildBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBuildBatchCommand}.
 */
export interface DeleteBuildBatchCommandInput extends DeleteBuildBatchInput {}
/**
 * @public
 *
 * The output of {@link DeleteBuildBatchCommand}.
 */
export interface DeleteBuildBatchCommandOutput extends DeleteBuildBatchOutput, __MetadataBearer {}

/**
 * <p>Deletes a batch build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // DeleteBuildBatchInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteBuildBatchCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBuildBatchOutput
 * //   statusCode: "STRING_VALUE",
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
 * @param DeleteBuildBatchCommandInput - {@link DeleteBuildBatchCommandInput}
 * @returns {@link DeleteBuildBatchCommandOutput}
 * @see {@link DeleteBuildBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteBuildBatchCommandOutput} for command's `response` shape.
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
export class DeleteBuildBatchCommand extends $Command
  .classBuilder<
    DeleteBuildBatchCommandInput,
    DeleteBuildBatchCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "DeleteBuildBatch", {})
  .n("CodeBuildClient", "DeleteBuildBatchCommand")
  .sc(DeleteBuildBatch$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBuildBatchInput;
      output: DeleteBuildBatchOutput;
    };
    sdk: {
      input: DeleteBuildBatchCommandInput;
      output: DeleteBuildBatchCommandOutput;
    };
  };
}
