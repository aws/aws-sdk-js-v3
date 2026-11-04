// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLicenseConversionTaskRequest, GetLicenseConversionTaskResponse } from "../models/models_0";
import { GetLicenseConversionTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLicenseConversionTaskCommand}.
 */
export interface GetLicenseConversionTaskCommandInput extends GetLicenseConversionTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseConversionTaskCommand}.
 */
export interface GetLicenseConversionTaskCommandOutput extends GetLicenseConversionTaskResponse, __MetadataBearer {}

/**
 * Gets information about the specified license type conversion task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseConversionTaskCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseConversionTaskCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // GetLicenseConversionTaskRequest
 *   LicenseConversionTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetLicenseConversionTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseConversionTaskResponse
 * //   LicenseConversionTaskId: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   SourceLicenseContext: { // LicenseConversionContext
 * //     UsageOperation: "STRING_VALUE",
 * //     ProductCodes: [ // ProductCodeList
 * //       { // ProductCodeListItem
 * //         ProductCodeId: "STRING_VALUE", // required
 * //         ProductCodeType: "marketplace", // required
 * //       },
 * //     ],
 * //   },
 * //   DestinationLicenseContext: {
 * //     UsageOperation: "STRING_VALUE",
 * //     ProductCodes: [
 * //       {
 * //         ProductCodeId: "STRING_VALUE", // required
 * //         ProductCodeType: "marketplace", // required
 * //       },
 * //     ],
 * //   },
 * //   StatusMessage: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   LicenseConversionTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetLicenseConversionTaskCommandInput - {@link GetLicenseConversionTaskCommandInput}
 * @returns {@link GetLicenseConversionTaskCommandOutput}
 * @see {@link GetLicenseConversionTaskCommandInput} for command's `input` shape.
 * @see {@link GetLicenseConversionTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class GetLicenseConversionTaskCommand extends command<GetLicenseConversionTaskCommandInput, GetLicenseConversionTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetLicenseConversionTask",
  GetLicenseConversionTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseConversionTaskRequest;
      output: GetLicenseConversionTaskResponse;
    };
    sdk: {
      input: GetLicenseConversionTaskCommandInput;
      output: GetLicenseConversionTaskCommandOutput;
    };
  };
}
