// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScheduleGroupInput, CreateScheduleGroupOutput } from "../models/models_0";
import { CreateScheduleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateScheduleGroupCommand}.
 */
export interface CreateScheduleGroupCommandInput extends CreateScheduleGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateScheduleGroupCommand}.
 */
export interface CreateScheduleGroupCommandOutput extends CreateScheduleGroupOutput, __MetadataBearer {}

/**
 * Creates the specified schedule group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, CreateScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, CreateScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // CreateScheduleGroupInput
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateScheduleGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduleGroupOutput
 * //   ScheduleGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateScheduleGroupCommandInput - {@link CreateScheduleGroupCommandInput}
 * @returns {@link CreateScheduleGroupCommandOutput}
 * @see {@link CreateScheduleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateScheduleGroupCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error encountered while processing the request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link SchedulerServiceException}
 *
 * Base exception class for all service exceptions from Scheduler service.
 *
 * @public
 */
export class CreateScheduleGroupCommand extends command<CreateScheduleGroupCommandInput, CreateScheduleGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateScheduleGroup",
  CreateScheduleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduleGroupInput;
      output: CreateScheduleGroupOutput;
    };
    sdk: {
      input: CreateScheduleGroupCommandInput;
      output: CreateScheduleGroupCommandOutput;
    };
  };
}
