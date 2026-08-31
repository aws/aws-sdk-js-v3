// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppPermissionsRequest, DescribeAppPermissionsResponse } from "../models/models_4";
import { DescribeAppPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAppPermissionsCommand}.
 */
export interface DescribeAppPermissionsCommandInput extends DescribeAppPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppPermissionsCommand}.
 */
export interface DescribeAppPermissionsCommandOutput extends DescribeAppPermissionsResponse, __MetadataBearer {}

/**
 * <p>Describes the resource permissions for an app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAppPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAppPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAppPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AppId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppPermissionsResponse
 * //   AppId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
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
 * @param DescribeAppPermissionsCommandInput - {@link DescribeAppPermissionsCommandInput}
 * @returns {@link DescribeAppPermissionsCommandOutput}
 * @see {@link DescribeAppPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAppPermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameter has a value that isn't valid.</p>
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
export class DescribeAppPermissionsCommand extends command<DescribeAppPermissionsCommandInput, DescribeAppPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppPermissions",
  DescribeAppPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppPermissionsRequest;
      output: DescribeAppPermissionsResponse;
    };
    sdk: {
      input: DescribeAppPermissionsCommandInput;
      output: DescribeAppPermissionsCommandOutput;
    };
  };
}
