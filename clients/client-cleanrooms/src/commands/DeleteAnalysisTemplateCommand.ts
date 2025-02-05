// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAnalysisTemplateInput, DeleteAnalysisTemplateOutput } from "../models/models_0";
import { de_DeleteAnalysisTemplateCommand, se_DeleteAnalysisTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnalysisTemplateCommand}.
 */
export interface DeleteAnalysisTemplateCommandInput extends DeleteAnalysisTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteAnalysisTemplateCommand}.
 */
export interface DeleteAnalysisTemplateCommandOutput extends DeleteAnalysisTemplateOutput, __MetadataBearer {}

/**
 * <p>Deletes an analysis template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteAnalysisTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteAnalysisTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteAnalysisTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   analysisTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAnalysisTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnalysisTemplateCommandInput - {@link DeleteAnalysisTemplateCommandInput}
 * @returns {@link DeleteAnalysisTemplateCommandOutput}
 * @see {@link DeleteAnalysisTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class DeleteAnalysisTemplateCommand extends $Command
  .classBuilder<
    DeleteAnalysisTemplateCommandInput,
    DeleteAnalysisTemplateCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteAnalysisTemplate", {})
  .n("CleanRoomsClient", "DeleteAnalysisTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAnalysisTemplateCommand)
  .de(de_DeleteAnalysisTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnalysisTemplateInput;
      output: {};
    };
    sdk: {
      input: DeleteAnalysisTemplateCommandInput;
      output: DeleteAnalysisTemplateCommandOutput;
    };
  };
}
