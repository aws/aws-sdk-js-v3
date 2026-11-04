// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTemplatePermissionsRequest, DescribeTemplatePermissionsResponse } from "../models/models_4";
import { DescribeTemplatePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeTemplatePermissionsCommandOutput extends DescribeTemplatePermissionsResponse, __MetadataBearer {}

/**
 * Describes read and write permissions on a template.
 *
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
 *
 * Updating or deleting a resource can cause an inconsistent state.
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
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeTemplatePermissionsCommand extends command<DescribeTemplatePermissionsCommandInput, DescribeTemplatePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTemplatePermissions",
  DescribeTemplatePermissions$
) {
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
