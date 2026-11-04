// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeSelfUpgradeConfigurationRequest,
  DescribeSelfUpgradeConfigurationResponse,
} from "../models/models_4";
import { DescribeSelfUpgradeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSelfUpgradeConfigurationCommand}.
 */
export interface DescribeSelfUpgradeConfigurationCommandInput extends DescribeSelfUpgradeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSelfUpgradeConfigurationCommand}.
 */
export interface DescribeSelfUpgradeConfigurationCommandOutput extends DescribeSelfUpgradeConfigurationResponse, __MetadataBearer {}

/**
 * Describes the self-upgrade configuration for a Quick account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeSelfUpgradeConfigurationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeSelfUpgradeConfigurationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeSelfUpgradeConfigurationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeSelfUpgradeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSelfUpgradeConfigurationResponse
 * //   SelfUpgradeConfiguration: { // SelfUpgradeConfiguration
 * //     SelfUpgradeStatus: "AUTO_APPROVAL" || "ADMIN_APPROVAL",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeSelfUpgradeConfigurationCommandInput - {@link DescribeSelfUpgradeConfigurationCommandInput}
 * @returns {@link DescribeSelfUpgradeConfigurationCommandOutput}
 * @see {@link DescribeSelfUpgradeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSelfUpgradeConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameter has a value that isn't valid.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *
 * This resource is currently unavailable.
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
export class DescribeSelfUpgradeConfigurationCommand extends command<DescribeSelfUpgradeConfigurationCommandInput, DescribeSelfUpgradeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSelfUpgradeConfiguration",
  DescribeSelfUpgradeConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSelfUpgradeConfigurationRequest;
      output: DescribeSelfUpgradeConfigurationResponse;
    };
    sdk: {
      input: DescribeSelfUpgradeConfigurationCommandInput;
      output: DescribeSelfUpgradeConfigurationCommandOutput;
    };
  };
}
