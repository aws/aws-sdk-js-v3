// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeResourcePermissionsRequest, DescribeResourcePermissionsResponse } from "../models/models_4";
import { DescribeResourcePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeResourcePermissionsCommand}.
 */
export interface DescribeResourcePermissionsCommandInput extends DescribeResourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourcePermissionsCommand}.
 */
export interface DescribeResourcePermissionsCommandOutput extends DescribeResourcePermissionsResponse, __MetadataBearer {}

/**
 * <p>Describes the service role configuration for your Amazon Quick Sight account.</p>
 *          <p>Call this operation in the Amazon Web Services Region where your Amazon Quick Sight account is
 *             registered (the home Region).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeResourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeResourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeResourcePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePermissionsResponse
 * //   RoleType: "QUICKSIGHT_MANAGED" || "CUSTOMER_MANAGED",
 * //   CustomerManagedRoleArn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeResourcePermissionsCommandInput - {@link DescribeResourcePermissionsCommandInput}
 * @returns {@link DescribeResourcePermissionsCommandOutput}
 * @see {@link DescribeResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePermissionsCommandOutput} for command's `response` shape.
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
export class DescribeResourcePermissionsCommand extends command<DescribeResourcePermissionsCommandInput, DescribeResourcePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeResourcePermissions",
  DescribeResourcePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourcePermissionsRequest;
      output: DescribeResourcePermissionsResponse;
    };
    sdk: {
      input: DescribeResourcePermissionsCommandInput;
      output: DescribeResourcePermissionsCommandOutput;
    };
  };
}
