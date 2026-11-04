// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteLicenseManagerReportGeneratorRequest,
  DeleteLicenseManagerReportGeneratorResponse,
} from "../models/models_0";
import { DeleteLicenseManagerReportGenerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLicenseManagerReportGeneratorCommand}.
 */
export interface DeleteLicenseManagerReportGeneratorCommandInput extends DeleteLicenseManagerReportGeneratorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseManagerReportGeneratorCommand}.
 */
export interface DeleteLicenseManagerReportGeneratorCommandOutput extends DeleteLicenseManagerReportGeneratorResponse, __MetadataBearer {}

/**
 * Deletes the specified report generator.
 *
 * This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // DeleteLicenseManagerReportGeneratorRequest
 *   LicenseManagerReportGeneratorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLicenseManagerReportGeneratorCommandInput - {@link DeleteLicenseManagerReportGeneratorCommandInput}
 * @returns {@link DeleteLicenseManagerReportGeneratorCommandOutput}
 * @see {@link DeleteLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class DeleteLicenseManagerReportGeneratorCommand extends command<DeleteLicenseManagerReportGeneratorCommandInput, DeleteLicenseManagerReportGeneratorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLicenseManagerReportGenerator",
  DeleteLicenseManagerReportGenerator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseManagerReportGeneratorRequest;
      output: {};
    };
    sdk: {
      input: DeleteLicenseManagerReportGeneratorCommandInput;
      output: DeleteLicenseManagerReportGeneratorCommandOutput;
    };
  };
}
