// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGroupRequest, DescribeGroupResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandInput extends DescribeGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandOutput extends DescribeGroupResponse, __MetadataBearer {}

/**
 * <p>Returns an Amazon Quick Sight group's description and Amazon Resource Name (ARN). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeGroupCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeGroupCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupResponse
 * //   Group: { // Group
 * //     Arn: "STRING_VALUE",
 * //     GroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     PrincipalId: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeGroupCommandInput - {@link DescribeGroupCommandInput}
 * @returns {@link DescribeGroupCommandOutput}
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
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
export class DescribeGroupCommand extends $Command
  .classBuilder<
    DescribeGroupCommandInput,
    DescribeGroupCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeGroup", {})
  .n("QuickSightClient", "DescribeGroupCommand")
  .sc(DescribeGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGroupRequest;
      output: DescribeGroupResponse;
    };
    sdk: {
      input: DescribeGroupCommandInput;
      output: DescribeGroupCommandOutput;
    };
  };
}
