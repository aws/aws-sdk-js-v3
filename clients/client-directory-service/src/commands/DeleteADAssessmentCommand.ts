// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteADAssessmentRequest, DeleteADAssessmentResult } from "../models/models_0";
import { DeleteADAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a directory assessment and all associated data. This operation permanently removes the assessment results, validation reports, and configuration information.
 *
 * You cannot delete system-initiated assessments. You can delete customer-created assessments even if they are in progress.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class DeleteADAssessmentCommand extends command<DeleteADAssessmentCommandInput, DeleteADAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteADAssessment",
  DeleteADAssessment$
) {
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
