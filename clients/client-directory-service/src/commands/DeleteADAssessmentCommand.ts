// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteADAssessmentRequest, DeleteADAssessmentResult } from "../models/models_0";
import { DeleteADAssessment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteADAssessmentCommand}.
 */
export interface DeleteADAssessmentCommandInput extends DeleteADAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteADAssessmentCommand}.
 */
export interface DeleteADAssessmentCommandOutput extends DeleteADAssessmentResult, __MetadataBearer {}

/**
 * <p>Deletes a directory assessment and all associated data. This operation permanently
 *             removes the assessment results, validation reports, and configuration
 *             information.</p>
 *          <p>You cannot delete system-initiated assessments. You can delete customer-created
 *             assessments even if they are in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteADAssessmentCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteADAssessmentCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeleteADAssessmentRequest
 *   AssessmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteADAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteADAssessmentResult
 * //   AssessmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteADAssessmentCommandInput - {@link DeleteADAssessmentCommandInput}
 * @returns {@link DeleteADAssessmentCommandOutput}
 * @see {@link DeleteADAssessmentCommandInput} for command's `input` shape.
 * @see {@link DeleteADAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DeleteADAssessmentCommand extends $Command
  .classBuilder<
    DeleteADAssessmentCommandInput,
    DeleteADAssessmentCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DeleteADAssessment", {})
  .n("DirectoryServiceClient", "DeleteADAssessmentCommand")
  .sc(DeleteADAssessment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteADAssessmentRequest;
      output: DeleteADAssessmentResult;
    };
    sdk: {
      input: DeleteADAssessmentCommandInput;
      output: DeleteADAssessmentCommandOutput;
    };
  };
}
