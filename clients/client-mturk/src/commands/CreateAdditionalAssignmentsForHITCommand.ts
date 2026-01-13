// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateAdditionalAssignmentsForHITRequest,
  CreateAdditionalAssignmentsForHITResponse,
} from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateAdditionalAssignmentsForHIT$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAdditionalAssignmentsForHITCommand}.
 */
export interface CreateAdditionalAssignmentsForHITCommandInput extends CreateAdditionalAssignmentsForHITRequest {}
/**
 * @public
 *
 * The output of {@link CreateAdditionalAssignmentsForHITCommand}.
 */
export interface CreateAdditionalAssignmentsForHITCommandOutput extends CreateAdditionalAssignmentsForHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>CreateAdditionalAssignmentsForHIT</code>
 *             operation increases the maximum number of assignments of an existing HIT.
 *         </p>
 *         <p>
 *             To extend the maximum number of assignments, specify the number of additional assignments.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more
 *                         assignments will result in an
 *                         <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code>
 *                         exception.</p>
 *                 </li>
 *                <li>
 *                     <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an
 *                         <code>AWS.MechanicalTurk.HITTooOldForExtension</code>
 *                         exception.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateAdditionalAssignmentsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateAdditionalAssignmentsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // CreateAdditionalAssignmentsForHITRequest
 *   HITId: "STRING_VALUE", // required
 *   NumberOfAdditionalAssignments: Number("int"), // required
 *   UniqueRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateAdditionalAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAdditionalAssignmentsForHITCommandInput - {@link CreateAdditionalAssignmentsForHITCommandInput}
 * @returns {@link CreateAdditionalAssignmentsForHITCommandOutput}
 * @see {@link CreateAdditionalAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link CreateAdditionalAssignmentsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class CreateAdditionalAssignmentsForHITCommand extends $Command
  .classBuilder<
    CreateAdditionalAssignmentsForHITCommandInput,
    CreateAdditionalAssignmentsForHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "CreateAdditionalAssignmentsForHIT", {})
  .n("MTurkClient", "CreateAdditionalAssignmentsForHITCommand")
  .sc(CreateAdditionalAssignmentsForHIT$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAdditionalAssignmentsForHITRequest;
      output: {};
    };
    sdk: {
      input: CreateAdditionalAssignmentsForHITCommandInput;
      output: CreateAdditionalAssignmentsForHITCommandOutput;
    };
  };
}
