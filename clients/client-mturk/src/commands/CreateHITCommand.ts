// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHITRequest, CreateHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_CreateHITCommand, se_CreateHITCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHITCommand}.
 */
export interface CreateHITCommandInput extends CreateHITRequest {}
/**
 * @public
 *
 * The output of {@link CreateHITCommand}.
 */
export interface CreateHITCommandOutput extends CreateHITResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT).
 *             The new HIT is made available for Workers to find and accept on the Amazon Mechanical
 *             Turk website. </p>
 *         <p>
 *             This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p>
 *         <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.
 *         </p>
 *
 *         <p>CreateHIT also supports several ways to provide question data: by providing a value
 *             for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing
 *             a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
 *         </p>
 *
 *         <note>
 *             <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see
 *             <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // CreateHITRequest
 *   MaxAssignments: Number("int"),
 *   AutoApprovalDelayInSeconds: Number("long"),
 *   LifetimeInSeconds: Number("long"), // required
 *   AssignmentDurationInSeconds: Number("long"), // required
 *   Reward: "STRING_VALUE", // required
 *   Title: "STRING_VALUE", // required
 *   Keywords: "STRING_VALUE",
 *   Description: "STRING_VALUE", // required
 *   Question: "STRING_VALUE",
 *   RequesterAnnotation: "STRING_VALUE",
 *   QualificationRequirements: [ // QualificationRequirementList
 *     { // QualificationRequirement
 *       QualificationTypeId: "STRING_VALUE", // required
 *       Comparator: "LessThan" || "LessThanOrEqualTo" || "GreaterThan" || "GreaterThanOrEqualTo" || "EqualTo" || "NotEqualTo" || "Exists" || "DoesNotExist" || "In" || "NotIn", // required
 *       IntegerValues: [ // IntegerList
 *         Number("int"),
 *       ],
 *       LocaleValues: [ // LocaleList
 *         { // Locale
 *           Country: "STRING_VALUE", // required
 *           Subdivision: "STRING_VALUE",
 *         },
 *       ],
 *       RequiredToPreview: true || false,
 *       ActionsGuarded: "Accept" || "PreviewAndAccept" || "DiscoverPreviewAndAccept",
 *     },
 *   ],
 *   UniqueRequestToken: "STRING_VALUE",
 *   AssignmentReviewPolicy: { // ReviewPolicy
 *     PolicyName: "STRING_VALUE", // required
 *     Parameters: [ // PolicyParameterList
 *       { // PolicyParameter
 *         Key: "STRING_VALUE",
 *         Values: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         MapEntries: [ // ParameterMapEntryList
 *           { // ParameterMapEntry
 *             Key: "STRING_VALUE",
 *             Values: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   HITReviewPolicy: {
 *     PolicyName: "STRING_VALUE", // required
 *     Parameters: [
 *       {
 *         Key: "STRING_VALUE",
 *         Values: [
 *           "STRING_VALUE",
 *         ],
 *         MapEntries: [
 *           {
 *             Key: "STRING_VALUE",
 *             Values: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   HITLayoutId: "STRING_VALUE",
 *   HITLayoutParameters: [ // HITLayoutParameterList
 *     { // HITLayoutParameter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHITCommand(input);
 * const response = await client.send(command);
 * // { // CreateHITResponse
 * //   HIT: { // HIT
 * //     HITId: "STRING_VALUE",
 * //     HITTypeId: "STRING_VALUE",
 * //     HITGroupId: "STRING_VALUE",
 * //     HITLayoutId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Title: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Question: "STRING_VALUE",
 * //     Keywords: "STRING_VALUE",
 * //     HITStatus: "Assignable" || "Unassignable" || "Reviewable" || "Reviewing" || "Disposed",
 * //     MaxAssignments: Number("int"),
 * //     Reward: "STRING_VALUE",
 * //     AutoApprovalDelayInSeconds: Number("long"),
 * //     Expiration: new Date("TIMESTAMP"),
 * //     AssignmentDurationInSeconds: Number("long"),
 * //     RequesterAnnotation: "STRING_VALUE",
 * //     QualificationRequirements: [ // QualificationRequirementList
 * //       { // QualificationRequirement
 * //         QualificationTypeId: "STRING_VALUE", // required
 * //         Comparator: "LessThan" || "LessThanOrEqualTo" || "GreaterThan" || "GreaterThanOrEqualTo" || "EqualTo" || "NotEqualTo" || "Exists" || "DoesNotExist" || "In" || "NotIn", // required
 * //         IntegerValues: [ // IntegerList
 * //           Number("int"),
 * //         ],
 * //         LocaleValues: [ // LocaleList
 * //           { // Locale
 * //             Country: "STRING_VALUE", // required
 * //             Subdivision: "STRING_VALUE",
 * //           },
 * //         ],
 * //         RequiredToPreview: true || false,
 * //         ActionsGuarded: "Accept" || "PreviewAndAccept" || "DiscoverPreviewAndAccept",
 * //       },
 * //     ],
 * //     HITReviewStatus: "NotReviewed" || "MarkedForReview" || "ReviewedAppropriate" || "ReviewedInappropriate",
 * //     NumberOfAssignmentsPending: Number("int"),
 * //     NumberOfAssignmentsAvailable: Number("int"),
 * //     NumberOfAssignmentsCompleted: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHITCommandInput - {@link CreateHITCommandInput}
 * @returns {@link CreateHITCommandOutput}
 * @see {@link CreateHITCommandInput} for command's `input` shape.
 * @see {@link CreateHITCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateHITCommand extends $Command
  .classBuilder<
    CreateHITCommandInput,
    CreateHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "CreateHIT", {})
  .n("MTurkClient", "CreateHITCommand")
  .f(void 0, void 0)
  .ser(se_CreateHITCommand)
  .de(de_CreateHITCommand)
  .build() {}
