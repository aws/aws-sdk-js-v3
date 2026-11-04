// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSpacePermissionsRequest, DescribeSpacePermissionsResponse } from "../models/models_4";
import { DescribeSpacePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSpacePermissionsCommand}.
 */
export interface DescribeSpacePermissionsCommandInput extends DescribeSpacePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpacePermissionsCommand}.
 */
export interface DescribeSpacePermissionsCommandOutput extends DescribeSpacePermissionsResponse, __MetadataBearer {}

/**
 * Describes the permissions for an Amazon QuickSight space.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeSpacePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeSpacePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeSpacePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SpaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSpacePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpacePermissionsResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   spaceArn: "STRING_VALUE",
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSpacePermissionsCommandInput - {@link DescribeSpacePermissionsCommandInput}
 * @returns {@link DescribeSpacePermissionsCommandOutput}
 * @see {@link DescribeSpacePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpacePermissionsCommandOutput} for command's `response` shape.
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
export class DescribeSpacePermissionsCommand extends command<DescribeSpacePermissionsCommandInput, DescribeSpacePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSpacePermissions",
  DescribeSpacePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSpacePermissionsRequest;
      output: DescribeSpacePermissionsResponse;
    };
    sdk: {
      input: DescribeSpacePermissionsCommandInput;
      output: DescribeSpacePermissionsCommandOutput;
    };
  };
}
