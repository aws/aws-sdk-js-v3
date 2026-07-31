// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTopicPermissionsV2Request, DescribeTopicPermissionsV2Response } from "../models/models_4";
import { DescribeTopicPermissionsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTopicPermissionsV2Command}.
 */
export interface DescribeTopicPermissionsV2CommandInput extends DescribeTopicPermissionsV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeTopicPermissionsV2Command}.
 */
export interface DescribeTopicPermissionsV2CommandOutput extends DescribeTopicPermissionsV2Response, __MetadataBearer {}

/**
 * <p>Describes the permissions of a topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTopicPermissionsV2Command } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTopicPermissionsV2Command } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTopicPermissionsV2Request
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicPermissionsV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeTopicPermissionsV2Response
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTopicPermissionsV2CommandInput - {@link DescribeTopicPermissionsV2CommandInput}
 * @returns {@link DescribeTopicPermissionsV2CommandOutput}
 * @see {@link DescribeTopicPermissionsV2CommandInput} for command's `input` shape.
 * @see {@link DescribeTopicPermissionsV2CommandOutput} for command's `response` shape.
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
export class DescribeTopicPermissionsV2Command extends command<DescribeTopicPermissionsV2CommandInput, DescribeTopicPermissionsV2CommandOutput>(
  _ep0,
  _mw0,
  "DescribeTopicPermissionsV2",
  DescribeTopicPermissionsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicPermissionsV2Request;
      output: DescribeTopicPermissionsV2Response;
    };
    sdk: {
      input: DescribeTopicPermissionsV2CommandInput;
      output: DescribeTopicPermissionsV2CommandOutput;
    };
  };
}
