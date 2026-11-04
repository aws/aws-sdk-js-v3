// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNotificationSubscriptionRequest } from "../models/models_0";
import { DeleteNotificationSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotificationSubscriptionCommand}.
 */
export interface DeleteNotificationSubscriptionCommandInput extends DeleteNotificationSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationSubscriptionCommand}.
 */
export interface DeleteNotificationSubscriptionCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified subscription from the specified organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteNotificationSubscriptionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteNotificationSubscriptionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DeleteNotificationSubscriptionRequest
 *   SubscriptionId: "STRING_VALUE", // required
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotificationSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotificationSubscriptionCommandInput - {@link DeleteNotificationSubscriptionCommandInput}
 * @returns {@link DeleteNotificationSubscriptionCommandOutput}
 * @see {@link DeleteNotificationSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *
 * The specified document version is not in the INITIALIZED state.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *
 * The caller does not have access to perform the action on the resource.
 *
 * @throws {@link WorkDocsServiceException}
 *
 * Base exception class for all service exceptions from WorkDocs service.
 *
 * @public
 */
export class DeleteNotificationSubscriptionCommand extends command<DeleteNotificationSubscriptionCommandInput, DeleteNotificationSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotificationSubscription",
  DeleteNotificationSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotificationSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteNotificationSubscriptionCommandInput;
      output: DeleteNotificationSubscriptionCommandOutput;
    };
  };
}
