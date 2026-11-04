// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTopicRefreshRequest, DescribeTopicRefreshResponse } from "../models/models_4";
import { DescribeTopicRefresh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTopicRefreshCommand}.
 */
export interface DescribeTopicRefreshCommandInput extends DescribeTopicRefreshRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicRefreshCommand}.
 */
export interface DescribeTopicRefreshCommandOutput extends DescribeTopicRefreshResponse, __MetadataBearer {}

/**
 * Describes the status of a topic refresh.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTopicRefreshCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTopicRefreshCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTopicRefreshRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   RefreshId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicRefreshCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicRefreshResponse
 * //   RefreshDetails: { // TopicRefreshDetails
 * //     RefreshArn: "STRING_VALUE",
 * //     RefreshId: "STRING_VALUE",
 * //     RefreshStatus: "INITIALIZED" || "RUNNING" || "FAILED" || "COMPLETED" || "CANCELLED",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeTopicRefreshCommandInput - {@link DescribeTopicRefreshCommandInput}
 * @returns {@link DescribeTopicRefreshCommandOutput}
 * @see {@link DescribeTopicRefreshCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicRefreshCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeTopicRefreshCommand extends command<DescribeTopicRefreshCommandInput, DescribeTopicRefreshCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTopicRefresh",
  DescribeTopicRefresh$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicRefreshRequest;
      output: DescribeTopicRefreshResponse;
    };
    sdk: {
      input: DescribeTopicRefreshCommandInput;
      output: DescribeTopicRefreshCommandOutput;
    };
  };
}
