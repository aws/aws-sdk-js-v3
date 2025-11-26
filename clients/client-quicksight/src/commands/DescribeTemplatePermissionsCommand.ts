// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTemplatePermissionsRequest, DescribeTemplatePermissionsResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeTemplatePermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTemplatePermissionsCommand}.
 */
export interface DescribeTemplatePermissionsCommandInput extends DescribeTemplatePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTemplatePermissionsCommand}.
 */
export interface DescribeTemplatePermissionsCommandOutput
  extends DescribeTemplatePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes read and write permissions on a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplatePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplatePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTemplatePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTemplatePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTemplatePermissionsResponse
 * //   TemplateId: "STRING_VALUE",
 * //   TemplateArn: "STRING_VALUE",
 * //   Permissions: [ // UpdateResourcePermissionList
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
 * @param DescribeTemplatePermissionsCommandInput - {@link DescribeTemplatePermissionsCommandInput}
 * @returns {@link DescribeTemplatePermissionsCommandOutput}
 * @see {@link DescribeTemplatePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplatePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeTemplatePermissionsCommand extends $Command
  .classBuilder<
    DescribeTemplatePermissionsCommandInput,
    DescribeTemplatePermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeTemplatePermissions", {})
  .n("QuickSightClient", "DescribeTemplatePermissionsCommand")
  .sc(DescribeTemplatePermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTemplatePermissionsRequest;
      output: DescribeTemplatePermissionsResponse;
    };
    sdk: {
      input: DescribeTemplatePermissionsCommandInput;
      output: DescribeTemplatePermissionsCommandOutput;
    };
  };
}
