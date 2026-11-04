// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
} from "../models/models_0";
import { UpdateLicenseSpecificationsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLicenseSpecificationsForResourceCommand}.
 */
export interface UpdateLicenseSpecificationsForResourceCommandInput extends UpdateLicenseSpecificationsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseSpecificationsForResourceCommand}.
 */
export interface UpdateLicenseSpecificationsForResourceCommandOutput extends UpdateLicenseSpecificationsForResourceResponse, __MetadataBearer {}

/**
 * Adds or removes the specified license configurations for the specified Amazon Web Services resource.
 *
 * You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseSpecificationsForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   AddLicenseSpecifications: [ // LicenseSpecifications
 *     { // LicenseSpecification
 *       LicenseConfigurationArn: "STRING_VALUE", // required
 *       AmiAssociationScope: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveLicenseSpecifications: [
 *     {
 *       LicenseConfigurationArn: "STRING_VALUE", // required
 *       AmiAssociationScope: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateLicenseSpecificationsForResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLicenseSpecificationsForResourceCommandInput - {@link UpdateLicenseSpecificationsForResourceCommandInput}
 * @returns {@link UpdateLicenseSpecificationsForResourceCommandOutput}
 * @see {@link UpdateLicenseSpecificationsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseSpecificationsForResourceCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Try your request again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * License Manager cannot allocate a license to a resource because of its state.
 *
 * For example, you cannot allocate a license to an instance in the process of shutting down.
 *
 * @throws {@link LicenseUsageException} (client fault)
 *
 * You do not have enough licenses available to support a new resource launch.
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
export class UpdateLicenseSpecificationsForResourceCommand extends command<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLicenseSpecificationsForResource",
  UpdateLicenseSpecificationsForResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLicenseSpecificationsForResourceRequest;
      output: {};
    };
    sdk: {
      input: UpdateLicenseSpecificationsForResourceCommandInput;
      output: UpdateLicenseSpecificationsForResourceCommandOutput;
    };
  };
}
