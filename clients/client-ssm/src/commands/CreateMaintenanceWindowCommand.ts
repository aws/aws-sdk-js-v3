// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMaintenanceWindowRequest, CreateMaintenanceWindowResult } from "../models/models_0";
import { CreateMaintenanceWindow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMaintenanceWindowCommand}.
 */
export interface CreateMaintenanceWindowCommandInput extends CreateMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link CreateMaintenanceWindowCommand}.
 */
export interface CreateMaintenanceWindowCommandOutput extends CreateMaintenanceWindowResult, __MetadataBearer {}

/**
 * Creates a new maintenance window.
 *
 * > **Note:** The value you specify for `Duration` determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for `Cutoff`. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for `Cutoff` is one hour, no maintenance window tasks can start after 5 PM.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreateMaintenanceWindowRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Schedule: "STRING_VALUE", // required
 *   ScheduleTimezone: "STRING_VALUE",
 *   ScheduleOffset: Number("int"),
 *   Duration: Number("int"), // required
 *   Cutoff: Number("int"), // required
 *   AllowUnassociatedTargets: true || false, // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // CreateMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMaintenanceWindowCommandInput - {@link CreateMaintenanceWindowCommandInput}
 * @returns {@link CreateMaintenanceWindowCommandOutput}
 * @see {@link CreateMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link CreateMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *
 * Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Error returned when the caller has exceeded the default resource quotas. For example, too many maintenance windows or patch baselines have been created.
 *
 * For information about resource quotas in Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class CreateMaintenanceWindowCommand extends command<CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput>(
  _ep0,
  _mw0,
  "CreateMaintenanceWindow",
  CreateMaintenanceWindow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMaintenanceWindowRequest;
      output: CreateMaintenanceWindowResult;
    };
    sdk: {
      input: CreateMaintenanceWindowCommandInput;
      output: CreateMaintenanceWindowCommandOutput;
    };
  };
}
