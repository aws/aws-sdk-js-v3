// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReportGroupInput, DeleteReportGroupOutput } from "../models/models_0";
import { de_DeleteReportGroupCommand, se_DeleteReportGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReportGroupCommand}.
 */
export interface DeleteReportGroupCommandInput extends DeleteReportGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteReportGroupCommand}.
 */
export interface DeleteReportGroupCommandOutput extends DeleteReportGroupOutput, __MetadataBearer {}

/**
 * <p>Deletes a report group. Before you delete a report group, you must delete its reports. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // DeleteReportGroupInput
 *   arn: "STRING_VALUE", // required
 *   deleteReports: true || false,
 * };
 * const command = new DeleteReportGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReportGroupCommandInput - {@link DeleteReportGroupCommandInput}
 * @returns {@link DeleteReportGroupCommandOutput}
 * @see {@link DeleteReportGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReportGroupCommandOutput} for command's `response` shape.
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
export class DeleteReportGroupCommand extends $Command
  .classBuilder<
    DeleteReportGroupCommandInput,
    DeleteReportGroupCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "DeleteReportGroup", {})
  .n("CodeBuildClient", "DeleteReportGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReportGroupCommand)
  .de(de_DeleteReportGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReportGroupInput;
      output: {};
    };
    sdk: {
      input: DeleteReportGroupCommandInput;
      output: DeleteReportGroupCommandOutput;
    };
  };
}
