// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTopicPermissionsRequest, DescribeTopicPermissionsResponse } from "../models/models_4";
import { de_DescribeTopicPermissionsCommand, se_DescribeTopicPermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTopicPermissionsCommand}.
 */
export interface DescribeTopicPermissionsCommandInput extends DescribeTopicPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicPermissionsCommand}.
 */
export interface DescribeTopicPermissionsCommandOutput extends DescribeTopicPermissionsResponse, __MetadataBearer {}

/**
 * <p>Describes the permissions of a topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTopicPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTopicPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTopicPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicPermissionsResponse
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
 * @param DescribeTopicPermissionsCommandInput - {@link DescribeTopicPermissionsCommandInput}
 * @returns {@link DescribeTopicPermissionsCommandOutput}
 * @see {@link DescribeTopicPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicPermissionsCommandOutput} for command's `response` shape.
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
export class DescribeTopicPermissionsCommand extends $Command
  .classBuilder<
    DescribeTopicPermissionsCommandInput,
    DescribeTopicPermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeTopicPermissions", {})
  .n("QuickSightClient", "DescribeTopicPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTopicPermissionsCommand)
  .de(de_DescribeTopicPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicPermissionsRequest;
      output: DescribeTopicPermissionsResponse;
    };
    sdk: {
      input: DescribeTopicPermissionsCommandInput;
      output: DescribeTopicPermissionsCommandOutput;
    };
  };
}
