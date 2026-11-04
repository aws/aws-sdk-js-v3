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
 * Gets a Recovery Plan by ARN.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
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
