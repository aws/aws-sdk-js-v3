// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRoleCustomPermissionRequest, DescribeRoleCustomPermissionResponse } from "../models/models_4";
import {
  de_DescribeRoleCustomPermissionCommand,
  se_DescribeRoleCustomPermissionCommand,
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
 * The input for {@link DescribeRoleCustomPermissionCommand}.
 */
export interface DescribeRoleCustomPermissionCommandInput extends DescribeRoleCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRoleCustomPermissionCommand}.
 */
export interface DescribeRoleCustomPermissionCommandOutput
  extends DescribeRoleCustomPermissionResponse,
    __MetadataBearer {}

/**
 * <p>Describes all custom permissions that are  mapped to a role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeRoleCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeRoleCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeRoleCustomPermissionRequest
 *   Role: "ADMIN" || "AUTHOR" || "READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeRoleCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRoleCustomPermissionResponse
 * //   CustomPermissionsName: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeRoleCustomPermissionCommandInput - {@link DescribeRoleCustomPermissionCommandInput}
 * @returns {@link DescribeRoleCustomPermissionCommandOutput}
 * @see {@link DescribeRoleCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeRoleCustomPermissionCommandOutput} for command's `response` shape.
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
export class DescribeRoleCustomPermissionCommand extends $Command
  .classBuilder<
    DescribeRoleCustomPermissionCommandInput,
    DescribeRoleCustomPermissionCommandOutput,
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
  .s("QuickSight_20180401", "DescribeRoleCustomPermission", {})
  .n("QuickSightClient", "DescribeRoleCustomPermissionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRoleCustomPermissionCommand)
  .de(de_DescribeRoleCustomPermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRoleCustomPermissionRequest;
      output: DescribeRoleCustomPermissionResponse;
    };
    sdk: {
      input: DescribeRoleCustomPermissionCommandInput;
      output: DescribeRoleCustomPermissionCommandOutput;
    };
  };
}
