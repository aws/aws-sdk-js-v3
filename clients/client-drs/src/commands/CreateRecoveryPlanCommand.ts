// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRecoveryPlanRequest, CreateRecoveryPlanResponse } from "../models/models_0";
import { CreateRecoveryPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRecoveryPlanCommand}.
 */
export interface CreateRecoveryPlanCommandInput extends CreateRecoveryPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecoveryPlanCommand}.
 */
export interface CreateRecoveryPlanCommandOutput extends CreateRecoveryPlanResponse, __MetadataBearer {}

/**
 * <p>Creates a Recovery Plan to orchestrate multi-server disaster recovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateRecoveryPlanCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateRecoveryPlanCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // CreateRecoveryPlanRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRecoveryPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecoveryPlanResponse
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
 * @param CreateRecoveryPlanCommandInput - {@link CreateRecoveryPlanCommandInput}
 * @returns {@link CreateRecoveryPlanCommandOutput}
 * @see {@link CreateRecoveryPlanCommandInput} for command's `input` shape.
 * @see {@link CreateRecoveryPlanCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
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
export class CreateRecoveryPlanCommand extends command<CreateRecoveryPlanCommandInput, CreateRecoveryPlanCommandOutput>(
  _ep0,
  _mw0,
  "CreateRecoveryPlan",
  CreateRecoveryPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecoveryPlanRequest;
      output: CreateRecoveryPlanResponse;
    };
    sdk: {
      input: CreateRecoveryPlanCommandInput;
      output: CreateRecoveryPlanCommandOutput;
    };
  };
}
