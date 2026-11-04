// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetScheduleGroupInput, GetScheduleGroupOutput } from "../models/models_0";
import { GetScheduleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetScheduleGroupCommand}.
 */
export interface GetScheduleGroupCommandInput extends GetScheduleGroupInput {}
/**
 * @public
 *
 * The output of {@link GetScheduleGroupCommand}.
 */
export interface GetScheduleGroupCommandOutput extends GetScheduleGroupOutput, __MetadataBearer {}

/**
 * Retrieves the specified schedule group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, GetScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, GetScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // GetScheduleGroupInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetScheduleGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetScheduleGroupOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastModificationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetScheduleGroupCommandInput - {@link GetScheduleGroupCommandInput}
 * @returns {@link GetScheduleGroupCommandOutput}
 * @see {@link GetScheduleGroupCommandInput} for command's `input` shape.
 * @see {@link GetScheduleGroupCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error encountered while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
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
export class GetScheduleGroupCommand extends command<GetScheduleGroupCommandInput, GetScheduleGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetScheduleGroup",
  GetScheduleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScheduleGroupInput;
      output: GetScheduleGroupOutput;
    };
    sdk: {
      input: GetScheduleGroupCommandInput;
      output: GetScheduleGroupCommandOutput;
    };
  };
}
