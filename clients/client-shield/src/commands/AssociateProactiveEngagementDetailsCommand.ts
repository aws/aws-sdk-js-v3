// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateProactiveEngagementDetailsRequest,
  AssociateProactiveEngagementDetailsResponse,
} from "../models/models_0";
import { AssociateProactiveEngagementDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateProactiveEngagementDetailsCommand}.
 */
export interface AssociateProactiveEngagementDetailsCommandInput extends AssociateProactiveEngagementDetailsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateProactiveEngagementDetailsCommand}.
 */
export interface AssociateProactiveEngagementDetailsCommandOutput extends AssociateProactiveEngagementDetailsResponse, __MetadataBearer {}

/**
 * Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list.
 *
 * After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls `DisableProactiveEngagement` and `EnableProactiveEngagement`.
 *
 * > **Note:**
 * >
 * > This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.
 * >
 * > The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using `DescribeEmergencyContactSettings` and then provide it to this call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateProactiveEngagementDetailsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateProactiveEngagementDetailsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // AssociateProactiveEngagementDetailsRequest
 *   EmergencyContactList: [ // EmergencyContactList // required
 *     { // EmergencyContact
 *       EmailAddress: "STRING_VALUE", // required
 *       PhoneNumber: "STRING_VALUE",
 *       ContactNotes: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AssociateProactiveEngagementDetailsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateProactiveEngagementDetailsCommandInput - {@link AssociateProactiveEngagementDetailsCommandInput}
 * @returns {@link AssociateProactiveEngagementDetailsCommandOutput}
 * @see {@link AssociateProactiveEngagementDetailsCommandInput} for command's `input` shape.
 * @see {@link AssociateProactiveEngagementDetailsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * Exception that indicates that the operation would not cause any change to occur.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties.
 *
 * @throws {@link OptimisticLockException} (client fault)
 *
 * Exception that indicates that the resource state has been modified by another client. Retrieve the resource and then retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties.
 *
 * @throws {@link ShieldServiceException}
 *
 * Base exception class for all service exceptions from Shield service.
 *
 * @public
 */
export class AssociateProactiveEngagementDetailsCommand extends command<AssociateProactiveEngagementDetailsCommandInput, AssociateProactiveEngagementDetailsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateProactiveEngagementDetails",
  AssociateProactiveEngagementDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateProactiveEngagementDetailsRequest;
      output: {};
    };
    sdk: {
      input: AssociateProactiveEngagementDetailsCommandInput;
      output: AssociateProactiveEngagementDetailsCommandOutput;
    };
  };
}
