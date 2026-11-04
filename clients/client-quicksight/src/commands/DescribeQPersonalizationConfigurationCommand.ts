// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeQPersonalizationConfigurationRequest,
  DescribeQPersonalizationConfigurationResponse,
} from "../models/models_4";
import { DescribeQPersonalizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeQPersonalizationConfigurationCommand}.
 */
export interface DescribeQPersonalizationConfigurationCommandInput extends DescribeQPersonalizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQPersonalizationConfigurationCommand}.
 */
export interface DescribeQPersonalizationConfigurationCommandOutput extends DescribeQPersonalizationConfigurationResponse, __MetadataBearer {}

/**
 * Describes a personalization configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeQPersonalizationConfigurationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeQPersonalizationConfigurationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeQPersonalizationConfigurationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQPersonalizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQPersonalizationConfigurationResponse
 * //   PersonalizationMode: "ENABLED" || "DISABLED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeQPersonalizationConfigurationCommandInput - {@link DescribeQPersonalizationConfigurationCommandInput}
 * @returns {@link DescribeQPersonalizationConfigurationCommandOutput}
 * @see {@link DescribeQPersonalizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeQPersonalizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
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
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeQPersonalizationConfigurationCommand extends command<DescribeQPersonalizationConfigurationCommandInput, DescribeQPersonalizationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeQPersonalizationConfiguration",
  DescribeQPersonalizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQPersonalizationConfigurationRequest;
      output: DescribeQPersonalizationConfigurationResponse;
    };
    sdk: {
      input: DescribeQPersonalizationConfigurationCommandInput;
      output: DescribeQPersonalizationConfigurationCommandOutput;
    };
  };
}
