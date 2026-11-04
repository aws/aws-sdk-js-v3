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
 * Creates a Recovery Plan to orchestrate multi-server disaster recovery.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because its exceeded the service quota.
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
