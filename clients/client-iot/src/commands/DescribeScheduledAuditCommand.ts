// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeScheduledAuditRequest, DescribeScheduledAuditResponse } from "../models/models_1";
import { DescribeScheduledAudit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeScheduledAuditCommand}.
 */
export interface DescribeScheduledAuditCommandInput extends DescribeScheduledAuditRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledAuditCommand}.
 */
export interface DescribeScheduledAuditCommandOutput extends DescribeScheduledAuditResponse, __MetadataBearer {}

/**
 * Gets information about a scheduled audit.
 *
 * Requires permission to access the [DescribeScheduledAudit](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeScheduledAuditRequest
 *   scheduledAuditName: "STRING_VALUE", // required
 * };
 * const command = new DescribeScheduledAuditCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduledAuditResponse
 * //   frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY",
 * //   dayOfMonth: "STRING_VALUE",
 * //   dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 * //   targetCheckNames: [ // TargetAuditCheckNames
 * //     "STRING_VALUE",
 * //   ],
 * //   scheduledAuditName: "STRING_VALUE",
 * //   scheduledAuditArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScheduledAuditCommandInput - {@link DescribeScheduledAuditCommandInput}
 * @returns {@link DescribeScheduledAuditCommandOutput}
 * @see {@link DescribeScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeScheduledAuditCommand extends command<DescribeScheduledAuditCommandInput, DescribeScheduledAuditCommandOutput>(
  _ep0,
  _mw0,
  "DescribeScheduledAudit",
  DescribeScheduledAudit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScheduledAuditRequest;
      output: DescribeScheduledAuditResponse;
    };
    sdk: {
      input: DescribeScheduledAuditCommandInput;
      output: DescribeScheduledAuditCommandOutput;
    };
  };
}
