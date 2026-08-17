// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecoveryPlanRequest, GetRecoveryPlanResponse } from "../models/models_0";
import { GetRecoveryPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRecoveryPlanCommand}.
 */
export interface GetRecoveryPlanCommandInput extends GetRecoveryPlanRequest {}
/**
 * @public
 *
 * The output of {@link GetRecoveryPlanCommand}.
 */
export interface GetRecoveryPlanCommandOutput extends GetRecoveryPlanResponse, __MetadataBearer {}

/**
 * <p>Gets a Recovery Plan by ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetRecoveryPlanCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetRecoveryPlanCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // GetRecoveryPlanRequest
 *   recoveryPlanArn: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryPlanResponse
 * //   recoveryPlan: { // RecoveryPlan
 * //     recoveryPlanArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     createdAt: "STRING_VALUE", // required
 * //     updatedAt: "STRING_VALUE", // required
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecoveryPlanCommandInput - {@link GetRecoveryPlanCommandInput}
 * @returns {@link GetRecoveryPlanCommandOutput}
 * @see {@link GetRecoveryPlanCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPlanCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class GetRecoveryPlanCommand extends command<GetRecoveryPlanCommandInput, GetRecoveryPlanCommandOutput>(
  _ep0,
  _mw0,
  "GetRecoveryPlan",
  GetRecoveryPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecoveryPlanRequest;
      output: GetRecoveryPlanResponse;
    };
    sdk: {
      input: GetRecoveryPlanCommandInput;
      output: GetRecoveryPlanCommandOutput;
    };
  };
}
