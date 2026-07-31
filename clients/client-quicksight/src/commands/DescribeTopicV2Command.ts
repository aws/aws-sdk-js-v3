// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTopicV2Request, DescribeTopicV2Response } from "../models/models_4";
import { DescribeTopicV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTopicV2Command}.
 */
export interface DescribeTopicV2CommandInput extends DescribeTopicV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeTopicV2Command}.
 */
export interface DescribeTopicV2CommandOutput extends DescribeTopicV2Response, __MetadataBearer {}

/**
 * <p>Describes a Q topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTopicV2Command } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTopicV2Command } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTopicV2Request
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeTopicV2Response
 * //   Arn: "STRING_VALUE",
 * //   TopicId: "STRING_VALUE",
 * //   Topic: { // TopicV2Details
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DataSets: [ // TopicV2DataSetReferences
 * //       { // TopicV2DataSetReference
 * //         DataSetArn: "STRING_VALUE", // required
 * //         DataSetName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DataSetRelations: [ // TopicV2DataSetRelationList
 * //       { // TopicV2DataSetRelation
 * //         Left: { // TopicV2DataSetRelationEndpoint
 * //           DataSetArn: "STRING_VALUE", // required
 * //           ColumnNames: [ // TopicV2DataSetRelationColumnNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Right: {
 * //           DataSetArn: "STRING_VALUE", // required
 * //           ColumnNames: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   CustomInstructions: { // CustomInstructions
 * //     CustomInstructionsString: "STRING_VALUE", // required
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTopicV2CommandInput - {@link DescribeTopicV2CommandInput}
 * @returns {@link DescribeTopicV2CommandOutput}
 * @see {@link DescribeTopicV2CommandInput} for command's `input` shape.
 * @see {@link DescribeTopicV2CommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
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
export class DescribeTopicV2Command extends command<DescribeTopicV2CommandInput, DescribeTopicV2CommandOutput>(
  _ep0,
  _mw0,
  "DescribeTopicV2",
  DescribeTopicV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicV2Request;
      output: DescribeTopicV2Response;
    };
    sdk: {
      input: DescribeTopicV2CommandInput;
      output: DescribeTopicV2CommandOutput;
    };
  };
}
