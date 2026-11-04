// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIpRestrictionRequest, UpdateIpRestrictionResponse } from "../models/models_5";
import { UpdateIpRestriction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIpRestrictionCommand}.
 */
export interface UpdateIpRestrictionCommandInput extends UpdateIpRestrictionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIpRestrictionCommand}.
 */
export interface UpdateIpRestrictionCommandOutput extends UpdateIpRestrictionResponse, __MetadataBearer {}

/**
 * Updates the content and status of IP rules. Traffic from a source is allowed when the source satisfies either the `IpRestrictionRule`, `VpcIdRestrictionRule`, or `VpcEndpointIdRestrictionRule`. To use this operation, you must provide the entire map of rules. You can use the `DescribeIpRestriction` operation to get the current rule map.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIpRestrictionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIpRestrictionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateIpRestrictionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   IpRestrictionRuleMap: { // IpRestrictionRuleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   VpcIdRestrictionRuleMap: { // VpcIdRestrictionRuleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   VpcEndpointIdRestrictionRuleMap: { // VpcEndpointIdRestrictionRuleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Enabled: true || false,
 * };
 * const command = new UpdateIpRestrictionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIpRestrictionResponse
 * //   AwsAccountId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateIpRestrictionCommandInput - {@link UpdateIpRestrictionCommandInput}
 * @returns {@link UpdateIpRestrictionCommandOutput}
 * @see {@link UpdateIpRestrictionCommandInput} for command's `input` shape.
 * @see {@link UpdateIpRestrictionCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
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
export class UpdateIpRestrictionCommand extends command<UpdateIpRestrictionCommandInput, UpdateIpRestrictionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIpRestriction",
  UpdateIpRestriction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIpRestrictionRequest;
      output: UpdateIpRestrictionResponse;
    };
    sdk: {
      input: UpdateIpRestrictionCommandInput;
      output: UpdateIpRestrictionCommandOutput;
    };
  };
}
