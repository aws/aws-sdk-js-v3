// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAutomationJobRequest, DescribeAutomationJobResponse } from "../models/models_3";
import { DescribeAutomationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAutomationJobCommand}.
 */
export interface DescribeAutomationJobCommandInput extends DescribeAutomationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAutomationJobCommand}.
 */
export interface DescribeAutomationJobCommandOutput extends DescribeAutomationJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status and details of a specified automation job, including its status and outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAutomationJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAutomationJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAutomationJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AutomationGroupId: "STRING_VALUE", // required
 *   AutomationId: "STRING_VALUE", // required
 *   IncludeInputPayload: true || false,
 *   IncludeOutputPayload: true || false,
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAutomationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutomationJobResponse
 * //   Arn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   JobStatus: "FAILED" || "RUNNING" || "SUCCEEDED" || "QUEUED" || "STOPPED", // required
 * //   InputPayload: "STRING_VALUE",
 * //   OutputPayload: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAutomationJobCommandInput - {@link DescribeAutomationJobCommandInput}
 * @returns {@link DescribeAutomationJobCommandOutput}
 * @see {@link DescribeAutomationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeAutomationJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class DescribeAutomationJobCommand extends command<DescribeAutomationJobCommandInput, DescribeAutomationJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAutomationJob",
  DescribeAutomationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAutomationJobRequest;
      output: DescribeAutomationJobResponse;
    };
    sdk: {
      input: DescribeAutomationJobCommandInput;
      output: DescribeAutomationJobCommandOutput;
    };
  };
}
