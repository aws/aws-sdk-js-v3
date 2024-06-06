// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBuildBatchInput, DeleteBuildBatchOutput } from "../models/models_0";
import { de_DeleteBuildBatchCommand, se_DeleteBuildBatchCommand } from "../protocols/Aws_json1_1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "DeleteBuildBatch", {})
  .n("CodeBuildClient", "DeleteBuildBatchCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBuildBatchCommand)
  .de(de_DeleteBuildBatchCommand)
  .build() {}
