// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTopicV2Request, UpdateTopicV2Response } from "../models/models_5";
import { UpdateTopicV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTopicV2Command}.
 */
export interface UpdateTopicV2CommandInput extends UpdateTopicV2Request {}
/**
 * @public
 *
 * The output of {@link UpdateTopicV2Command}.
 */
export interface UpdateTopicV2CommandOutput extends UpdateTopicV2Response, __MetadataBearer {}

/**
 * <p>Updates the definition of a Q topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTopicV2Command } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTopicV2Command } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateTopicV2Request
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   Topic: { // TopicV2Details
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     DataSets: [ // TopicV2DataSetReferences
 *       { // TopicV2DataSetReference
 *         DataSetArn: "STRING_VALUE", // required
 *         DataSetName: "STRING_VALUE",
 *       },
 *     ],
 *     DataSetRelations: [ // TopicV2DataSetRelationList
 *       { // TopicV2DataSetRelation
 *         Left: { // TopicV2DataSetRelationEndpoint
 *           DataSetArn: "STRING_VALUE", // required
 *           ColumnNames: [ // TopicV2DataSetRelationColumnNames // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Right: {
 *           DataSetArn: "STRING_VALUE", // required
 *           ColumnNames: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   CustomInstructions: { // CustomInstructions
 *     CustomInstructionsString: "STRING_VALUE", // required
 *   },
 *   PublishOption: "DRAFT" || "PUBLISH",
 * };
 * const command = new UpdateTopicV2Command(input);
 * const response = await client.send(command);
 * // { // UpdateTopicV2Response
 * //   Arn: "STRING_VALUE",
 * //   TopicId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateTopicV2CommandInput - {@link UpdateTopicV2CommandInput}
 * @returns {@link UpdateTopicV2CommandOutput}
 * @see {@link UpdateTopicV2CommandInput} for command's `input` shape.
 * @see {@link UpdateTopicV2CommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateTopicV2Command extends command<UpdateTopicV2CommandInput, UpdateTopicV2CommandOutput>(
  _ep0,
  _mw0,
  "UpdateTopicV2",
  UpdateTopicV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTopicV2Request;
      output: UpdateTopicV2Response;
    };
    sdk: {
      input: UpdateTopicV2CommandInput;
      output: UpdateTopicV2CommandOutput;
    };
  };
}
