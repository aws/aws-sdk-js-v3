// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTopicV2Request, CreateTopicV2Response } from "../models/models_3";
import { CreateTopicV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTopicV2Command}.
 */
export interface CreateTopicV2CommandInput extends CreateTopicV2Request {}
/**
 * @public
 *
 * The output of {@link CreateTopicV2Command}.
 */
export interface CreateTopicV2CommandOutput extends CreateTopicV2Response, __MetadataBearer {}

/**
 * <p>Creates a new Q topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTopicV2Command } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTopicV2Command } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateTopicV2Request
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   FolderArns: [ // FolderArnList
 *     "STRING_VALUE",
 *   ],
 *   CustomInstructions: { // CustomInstructions
 *     CustomInstructionsString: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateTopicV2Command(input);
 * const response = await client.send(command);
 * // { // CreateTopicV2Response
 * //   Arn: "STRING_VALUE",
 * //   TopicId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateTopicV2CommandInput - {@link CreateTopicV2CommandInput}
 * @returns {@link CreateTopicV2CommandOutput}
 * @see {@link CreateTopicV2CommandInput} for command's `input` shape.
 * @see {@link CreateTopicV2CommandOutput} for command's `response` shape.
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
export class CreateTopicV2Command extends command<CreateTopicV2CommandInput, CreateTopicV2CommandOutput>(
  _ep0,
  _mw0,
  "CreateTopicV2",
  CreateTopicV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTopicV2Request;
      output: CreateTopicV2Response;
    };
    sdk: {
      input: CreateTopicV2CommandInput;
      output: CreateTopicV2CommandOutput;
    };
  };
}
