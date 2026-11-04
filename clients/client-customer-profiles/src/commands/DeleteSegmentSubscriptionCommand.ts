// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSegmentSubscriptionRequest, DeleteSegmentSubscriptionResponse } from "../models/models_0";
import { DeleteSegmentSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSegmentSubscriptionCommand}.
 */
export interface DeleteSegmentSubscriptionCommandInput extends DeleteSegmentSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSegmentSubscriptionCommand}.
 */
export interface DeleteSegmentSubscriptionCommandOutput extends DeleteSegmentSubscriptionResponse, __MetadataBearer {}

/**
 * Deletes a segment subscription for membership events. All active event notifications for this segment are stopped.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteSegmentSubscriptionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteSegmentSubscriptionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteSegmentSubscriptionRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSegmentSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSegmentSubscriptionResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSegmentSubscriptionCommandInput - {@link DeleteSegmentSubscriptionCommandInput}
 * @returns {@link DeleteSegmentSubscriptionCommandOutput}
 * @see {@link DeleteSegmentSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteSegmentSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class DeleteSegmentSubscriptionCommand extends command<DeleteSegmentSubscriptionCommandInput, DeleteSegmentSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSegmentSubscription",
  DeleteSegmentSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSegmentSubscriptionRequest;
      output: DeleteSegmentSubscriptionResponse;
    };
    sdk: {
      input: DeleteSegmentSubscriptionCommandInput;
      output: DeleteSegmentSubscriptionCommandOutput;
    };
  };
}
