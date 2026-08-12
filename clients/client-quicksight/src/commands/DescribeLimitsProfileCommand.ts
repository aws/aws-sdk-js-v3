// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLimitsProfileRequest, DescribeLimitsProfileResponse } from "../models/models_4";
import { DescribeLimitsProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLimitsProfileCommand}.
 */
export interface DescribeLimitsProfileCommandInput extends DescribeLimitsProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLimitsProfileCommand}.
 */
export interface DescribeLimitsProfileCommandOutput extends DescribeLimitsProfileResponse, __MetadataBearer {}

/**
 * <p>Describes the properties of an existing limits profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeLimitsProfileCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeLimitsProfileCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeLimitsProfileRequest
 *   profileId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeLimitsProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLimitsProfileResponse
 * //   profile: { // LimitsProfile
 * //     profileId: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     accountId: "STRING_VALUE", // required
 * //     profileName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     resourceLimits: { // ResourceLimitsMap // required
 * //       "<keys>": { // ProfileLimitValue
 * //         maxValue: Number("long"), // required
 * //         unit: "MB" || "GB" || "HOURS" || "DAYS", // required
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLimitsProfileCommandInput - {@link DescribeLimitsProfileCommandInput}
 * @returns {@link DescribeLimitsProfileCommandOutput}
 * @see {@link DescribeLimitsProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeLimitsProfileCommandOutput} for command's `response` shape.
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
export class DescribeLimitsProfileCommand extends command<DescribeLimitsProfileCommandInput, DescribeLimitsProfileCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLimitsProfile",
  DescribeLimitsProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLimitsProfileRequest;
      output: DescribeLimitsProfileResponse;
    };
    sdk: {
      input: DescribeLimitsProfileCommandInput;
      output: DescribeLimitsProfileCommandOutput;
    };
  };
}
