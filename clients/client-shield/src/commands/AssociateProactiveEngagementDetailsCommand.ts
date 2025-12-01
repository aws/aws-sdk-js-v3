// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateProactiveEngagementDetailsRequest,
  AssociateProactiveEngagementDetailsResponse,
} from "../models/models_0";
import { AssociateProactiveEngagementDetails } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface AssociateProactiveEngagementDetailsCommandOutput
  extends AssociateProactiveEngagementDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p>
 *          <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>.  </p>
 *          <note>
 *             <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p>
 *             <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call.  </p>
 *          </note>
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
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>Exception that indicates that the operation would not cause any change to occur.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class AssociateProactiveEngagementDetailsCommand extends $Command
  .classBuilder<
    AssociateProactiveEngagementDetailsCommandInput,
    AssociateProactiveEngagementDetailsCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "AssociateProactiveEngagementDetails", {})
  .n("ShieldClient", "AssociateProactiveEngagementDetailsCommand")
  .sc(AssociateProactiveEngagementDetails)
  .build() {
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
