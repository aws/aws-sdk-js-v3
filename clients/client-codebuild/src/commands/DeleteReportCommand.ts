// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReportInput, DeleteReportOutput } from "../models/models_0";
import { DeleteReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReportCommand}.
 */
export interface DeleteReportCommandInput extends DeleteReportInput {}
/**
 * @public
 *
 * The output of {@link DeleteReportCommand}.
 */
export interface DeleteReportCommandOutput extends DeleteReportOutput, __MetadataBearer {}

/**
 * <p>
 *       Deletes a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // DeleteReportInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReportCommandInput - {@link DeleteReportCommandInput}
 * @returns {@link DeleteReportCommandOutput}
 * @see {@link DeleteReportCommandInput} for command's `input` shape.
 * @see {@link DeleteReportCommandOutput} for command's `response` shape.
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
export class DeleteReportCommand extends command<DeleteReportCommandInput, DeleteReportCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReport",
  DeleteReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReportInput;
      output: {};
    };
    sdk: {
      input: DeleteReportCommandInput;
      output: DeleteReportCommandOutput;
    };
  };
}
