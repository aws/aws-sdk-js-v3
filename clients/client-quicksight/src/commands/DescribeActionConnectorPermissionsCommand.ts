// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeActionConnectorPermissionsRequest,
  DescribeActionConnectorPermissionsResponse,
} from "../models/models_4";
import {
  de_DescribeActionConnectorPermissionsCommand,
  se_DescribeActionConnectorPermissionsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActionConnectorPermissionsCommand}.
 */
export interface DescribeActionConnectorPermissionsCommandInput extends DescribeActionConnectorPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionConnectorPermissionsCommand}.
 */
export interface DescribeActionConnectorPermissionsCommandOutput
  extends DescribeActionConnectorPermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the permissions configuration for an action connector, showing which users, groups, and namespaces have access and what operations they can perform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeActionConnectorPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeActionConnectorPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeActionConnectorPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ActionConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DescribeActionConnectorPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionConnectorPermissionsResponse
 * //   Arn: "STRING_VALUE",
 * //   ActionConnectorId: "STRING_VALUE",
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeActionConnectorPermissionsCommandInput - {@link DescribeActionConnectorPermissionsCommandInput}
 * @returns {@link DescribeActionConnectorPermissionsCommandOutput}
 * @see {@link DescribeActionConnectorPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeActionConnectorPermissionsCommandOutput} for command's `response` shape.
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
export class DescribeActionConnectorPermissionsCommand extends $Command
  .classBuilder<
    DescribeActionConnectorPermissionsCommandInput,
    DescribeActionConnectorPermissionsCommandOutput,
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
  .s("QuickSight_20180401", "DescribeActionConnectorPermissions", {})
  .n("QuickSightClient", "DescribeActionConnectorPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeActionConnectorPermissionsCommand)
  .de(de_DescribeActionConnectorPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActionConnectorPermissionsRequest;
      output: DescribeActionConnectorPermissionsResponse;
    };
    sdk: {
      input: DescribeActionConnectorPermissionsCommandInput;
      output: DescribeActionConnectorPermissionsCommandOutput;
    };
  };
}
