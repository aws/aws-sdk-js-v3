// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateLicenseConversionTaskForResourceRequest,
  CreateLicenseConversionTaskForResourceResponse,
} from "../models/models_0";
import { CreateLicenseConversionTaskForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLicenseConversionTaskForResourceCommand}.
 */
export interface CreateLicenseConversionTaskForResourceCommandInput extends CreateLicenseConversionTaskForResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseConversionTaskForResourceCommand}.
 */
export interface CreateLicenseConversionTaskForResourceCommandOutput extends CreateLicenseConversionTaskForResourceResponse, __MetadataBearer {}

/**
 * Creates a new license conversion task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseConversionTaskForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   SourceLicenseContext: { // LicenseConversionContext
 *     UsageOperation: "STRING_VALUE",
 *     ProductCodes: [ // ProductCodeList
 *       { // ProductCodeListItem
 *         ProductCodeId: "STRING_VALUE", // required
 *         ProductCodeType: "marketplace", // required
 *       },
 *     ],
 *   },
 *   DestinationLicenseContext: {
 *     UsageOperation: "STRING_VALUE",
 *     ProductCodes: [
 *       {
 *         ProductCodeId: "STRING_VALUE", // required
 *         ProductCodeType: "marketplace", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateLicenseConversionTaskForResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseConversionTaskForResourceResponse
 * //   LicenseConversionTaskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLicenseConversionTaskForResourceCommandInput - {@link CreateLicenseConversionTaskForResourceCommandInput}
 * @returns {@link CreateLicenseConversionTaskForResourceCommandOutput}
 * @see {@link CreateLicenseConversionTaskForResourceCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseConversionTaskForResourceCommandOutput} for command's `response` shape.
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
export class CreateLicenseConversionTaskForResourceCommand extends command<CreateLicenseConversionTaskForResourceCommandInput, CreateLicenseConversionTaskForResourceCommandOutput>(
  _ep0,
  _mw0,
  "CreateLicenseConversionTaskForResource",
  CreateLicenseConversionTaskForResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseConversionTaskForResourceRequest;
      output: CreateLicenseConversionTaskForResourceResponse;
    };
    sdk: {
      input: CreateLicenseConversionTaskForResourceCommandInput;
      output: CreateLicenseConversionTaskForResourceCommandOutput;
    };
  };
}
