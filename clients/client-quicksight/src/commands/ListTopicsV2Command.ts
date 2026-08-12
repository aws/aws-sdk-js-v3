// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTopicsV2Request, ListTopicsV2Response } from "../models/models_5";
import { ListTopicsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTopicsV2Command}.
 */
export interface ListTopicsV2CommandInput extends ListTopicsV2Request {}
/**
 * @public
 *
 * The output of {@link ListTopicsV2Command}.
 */
export interface ListTopicsV2CommandOutput extends ListTopicsV2Response, __MetadataBearer {}

/**
 * <p>Lists all of the Q topics in the specified Amazon Web Services account in an Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTopicsV2Command } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTopicsV2Command } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListTopicsV2Request
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTopicsV2Command(input);
 * const response = await client.send(command);
 * // { // ListTopicsV2Response
 * //   TopicSummaryList: [ // TopicV2Summaries
 * //     { // TopicV2Summary
 * //       Arn: "STRING_VALUE",
 * //       TopicId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListTopicsV2CommandInput - {@link ListTopicsV2CommandInput}
 * @returns {@link ListTopicsV2CommandOutput}
 * @see {@link ListTopicsV2CommandInput} for command's `input` shape.
 * @see {@link ListTopicsV2CommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
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
export class ListTopicsV2Command extends command<ListTopicsV2CommandInput, ListTopicsV2CommandOutput>(
  _ep0,
  _mw0,
  "ListTopicsV2",
  ListTopicsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicsV2Request;
      output: ListTopicsV2Response;
    };
    sdk: {
      input: ListTopicsV2CommandInput;
      output: ListTopicsV2CommandOutput;
    };
  };
}
