// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteNotificationSubscriptionRequest } from "../models/models_0";
import { DeleteNotificationSubscription } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified subscription from the specified organization.</p>
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
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class DeleteNotificationSubscriptionCommand extends $Command
  .classBuilder<
    DeleteNotificationSubscriptionCommandInput,
    DeleteNotificationSubscriptionCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "DeleteNotificationSubscription", {})
  .n("WorkDocsClient", "DeleteNotificationSubscriptionCommand")
  .sc(DeleteNotificationSubscription)
  .build() {
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
