// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivityTypeDetail, DescribeActivityTypeInput } from "../models/models_0";
import { DescribeActivityType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeActivityTypeCommand}.
 */
export interface DescribeActivityTypeCommandInput extends DescribeActivityTypeInput {}
/**
 * @public
 *
 * The output of {@link DescribeActivityTypeCommand}.
 */
export interface DescribeActivityTypeCommandOutput extends ActivityTypeDetail, __MetadataBearer {}

/**
 * Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `activityType.name`: String constraint. The key is `swf:activityType.name`.
 *   - `activityType.version`: String constraint. The key is `swf:activityType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, DescribeActivityTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DescribeActivityTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DescribeActivityTypeInput
 *   domain: "STRING_VALUE", // required
 *   activityType: { // ActivityType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeActivityTypeCommand(input);
 * const response = await client.send(command);
 * // { // ActivityTypeDetail
 * //   typeInfo: { // ActivityTypeInfo
 * //     activityType: { // ActivityType
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     status: "REGISTERED" || "DEPRECATED", // required
 * //     description: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"), // required
 * //     deprecationDate: new Date("TIMESTAMP"),
 * //   },
 * //   configuration: { // ActivityTypeConfiguration
 * //     defaultTaskStartToCloseTimeout: "STRING_VALUE",
 * //     defaultTaskHeartbeatTimeout: "STRING_VALUE",
 * //     defaultTaskList: { // TaskList
 * //       name: "STRING_VALUE", // required
 * //     },
 * //     defaultTaskPriority: "STRING_VALUE",
 * //     defaultTaskScheduleToStartTimeout: "STRING_VALUE",
 * //     defaultTaskScheduleToCloseTimeout: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeActivityTypeCommandInput - {@link DescribeActivityTypeCommandInput}
 * @returns {@link DescribeActivityTypeCommandOutput}
 * @see {@link DescribeActivityTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeActivityTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *
 * Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class DescribeActivityTypeCommand extends command<DescribeActivityTypeCommandInput, DescribeActivityTypeCommandOutput>(
  _ep0,
  _mw0,
  "DescribeActivityType",
  DescribeActivityType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActivityTypeInput;
      output: ActivityTypeDetail;
    };
    sdk: {
      input: DescribeActivityTypeCommandInput;
      output: DescribeActivityTypeCommandOutput;
    };
  };
}
