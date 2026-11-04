// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGrantVersionRequest, CreateGrantVersionResponse } from "../models/models_0";
import { CreateGrantVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGrantVersionCommand}.
 */
export interface CreateGrantVersionCommandInput extends CreateGrantVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateGrantVersionCommand}.
 */
export interface CreateGrantVersionCommandOutput extends CreateGrantVersionResponse, __MetadataBearer {}

/**
 * Creates a new version of the specified grant. For more information, see [Granted licenses in License Manager](https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html) in the *License Manager User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateGrantVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateGrantVersionRequest
 *   ClientToken: "STRING_VALUE", // required
 *   GrantArn: "STRING_VALUE", // required
 *   GrantName: "STRING_VALUE",
 *   AllowedOperations: [ // AllowedOperationList
 *     "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken" || "ListReceivedLicenses",
 *   ],
 *   Status: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 *   StatusReason: "STRING_VALUE",
 *   SourceVersion: "STRING_VALUE",
 *   Options: { // Options
 *     ActivationOverrideBehavior: "DISTRIBUTED_GRANTS_ONLY" || "ALL_GRANTS_PERMITTED_BY_ISSUER",
 *     DesiredStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 *   },
 * };
 * const command = new CreateGrantVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateGrantVersionResponse
 * //   GrantArn: "STRING_VALUE",
 * //   Status: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGrantVersionCommandInput - {@link CreateGrantVersionCommandInput}
 * @returns {@link CreateGrantVersionCommandOutput}
 * @see {@link CreateGrantVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGrantVersionCommandOutput} for command's `response` shape.
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
export class CreateGrantVersionCommand extends command<CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateGrantVersion",
  CreateGrantVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGrantVersionRequest;
      output: CreateGrantVersionResponse;
    };
    sdk: {
      input: CreateGrantVersionCommandInput;
      output: CreateGrantVersionCommandOutput;
    };
  };
}
