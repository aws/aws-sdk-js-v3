// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAgentPermissionsRequest, DescribeAgentPermissionsResponse } from "../models/models_3";
import { DescribeAgentPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAgentPermissionsCommand}.
 */
export interface DescribeAgentPermissionsCommandInput extends DescribeAgentPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentPermissionsCommand}.
 */
export interface DescribeAgentPermissionsCommandOutput extends DescribeAgentPermissionsResponse, __MetadataBearer {}

/**
 * <p>Describes the resource permissions for an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAgentPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAgentPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAgentPermissionsRequest
 *   AgentId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgentPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentPermissionsResponse
 * //   Arn: "STRING_VALUE", // required
 * //   AgentId: "STRING_VALUE", // required
 * //   Permissions: [ // ResourcePermissionList // required
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeAgentPermissionsCommandInput - {@link DescribeAgentPermissionsCommandInput}
 * @returns {@link DescribeAgentPermissionsCommandOutput}
 * @see {@link DescribeAgentPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentPermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeAgentPermissionsCommand extends command<DescribeAgentPermissionsCommandInput, DescribeAgentPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAgentPermissions",
  DescribeAgentPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgentPermissionsRequest;
      output: DescribeAgentPermissionsResponse;
    };
    sdk: {
      input: DescribeAgentPermissionsCommandInput;
      output: DescribeAgentPermissionsCommandOutput;
    };
  };
}
