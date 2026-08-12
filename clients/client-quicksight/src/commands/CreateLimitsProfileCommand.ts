// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLimitsProfileRequest, CreateLimitsProfileResponse } from "../models/models_3";
import { CreateLimitsProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLimitsProfileCommand}.
 */
export interface CreateLimitsProfileCommandInput extends CreateLimitsProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateLimitsProfileCommand}.
 */
export interface CreateLimitsProfileCommandOutput extends CreateLimitsProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a limits profile that defines resource usage limits for Amazon Quick Sight users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateLimitsProfileCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateLimitsProfileCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateLimitsProfileRequest
 *   accountId: "STRING_VALUE", // required
 *   profileName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   resourceLimits: { // CreateLimitsProfileRequestResourceLimitsMap // required
 *     "<keys>": { // ProfileLimitValue
 *       maxValue: Number("long"), // required
 *       unit: "MB" || "GB" || "HOURS" || "DAYS", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLimitsProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateLimitsProfileResponse
 * //   arn: "STRING_VALUE", // required
 * //   profileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLimitsProfileCommandInput - {@link CreateLimitsProfileCommandInput}
 * @returns {@link CreateLimitsProfileCommandOutput}
 * @see {@link CreateLimitsProfileCommandInput} for command's `input` shape.
 * @see {@link CreateLimitsProfileCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class CreateLimitsProfileCommand extends command<CreateLimitsProfileCommandInput, CreateLimitsProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateLimitsProfile",
  CreateLimitsProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLimitsProfileRequest;
      output: CreateLimitsProfileResponse;
    };
    sdk: {
      input: CreateLimitsProfileCommandInput;
      output: CreateLimitsProfileCommandOutput;
    };
  };
}
