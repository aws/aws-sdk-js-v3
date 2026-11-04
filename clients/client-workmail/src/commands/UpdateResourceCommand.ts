// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResourceRequest, UpdateResourceResponse } from "../models/models_0";
import { UpdateResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResourceCommand}.
 */
export interface UpdateResourceCommandInput extends UpdateResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceCommand}.
 */
export interface UpdateResourceCommandOutput extends UpdateResourceResponse, __MetadataBearer {}

/**
 * Updates data for the resource. To have the latest information, it must be preceded by a DescribeResource call. The dataset in the request should be the one expected when performing another `DescribeResource` call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // UpdateResourceRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   BookingOptions: { // BookingOptions
 *     AutoAcceptRequests: true || false,
 *     AutoDeclineRecurringRequests: true || false,
 *     AutoDeclineConflictingRequests: true || false,
 *   },
 *   Description: "STRING_VALUE",
 *   Type: "ROOM" || "EQUIPMENT",
 *   HiddenFromGlobalAddressList: true || false,
 * };
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceCommandInput - {@link UpdateResourceCommandInput}
 * @returns {@link UpdateResourceCommandOutput}
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The directory is unavailable. It might be located in another Region or deleted.
 *
 * @throws {@link EmailAddressInUseException} (client fault)
 *
 * The email address that you're trying to assign is already created for a different user, group, or resource.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * The identifier supplied for the user, group, or resource does not exist in your organization.
 *
 * @throws {@link EntityStateException} (client fault)
 *
 * You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.
 *
 * @throws {@link InvalidConfigurationException} (client fault)
 *
 * The configuration for a resource isn't valid. A resource must either be able to auto-respond to requests or have at least one delegate associated that can do so on its behalf.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link MailDomainNotFoundException} (client fault)
 *
 * The domain specified is not found in your organization.
 *
 * @throws {@link MailDomainStateException} (client fault)
 *
 * After a domain has been added to the organization, it must be verified. The domain is not yet verified.
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *
 * The user, group, or resource name isn't unique in WorkMail.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * You can't perform a write operation against a read-only directory.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class UpdateResourceCommand extends command<UpdateResourceCommandInput, UpdateResourceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResource",
  UpdateResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceCommandInput;
      output: UpdateResourceCommandOutput;
    };
  };
}
