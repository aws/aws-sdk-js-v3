// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAutomationJobRequest, StartAutomationJobResponse } from "../models/models_5";
import { StartAutomationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAutomationJobCommand}.
 */
export interface StartAutomationJobCommandInput extends StartAutomationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAutomationJobCommand}.
 */
export interface StartAutomationJobCommandOutput extends StartAutomationJobResponse, __MetadataBearer {}

/**
 * <p>Starts a new job for a specified automation. The job runs the automation with the provided input payload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, StartAutomationJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, StartAutomationJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // StartAutomationJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AutomationGroupId: "STRING_VALUE", // required
 *   AutomationId: "STRING_VALUE", // required
 *   InputPayload: "STRING_VALUE",
 * };
 * const command = new StartAutomationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAutomationJobResponse
 * //   Arn: "STRING_VALUE", // required
 * //   JobId: "STRING_VALUE", // required
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAutomationJobCommandInput - {@link StartAutomationJobCommandInput}
 * @returns {@link StartAutomationJobCommandOutput}
 * @see {@link StartAutomationJobCommandInput} for command's `input` shape.
 * @see {@link StartAutomationJobCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class StartAutomationJobCommand extends command<StartAutomationJobCommandInput, StartAutomationJobCommandOutput>(
  _ep0,
  _mw0,
  "StartAutomationJob",
  StartAutomationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAutomationJobRequest;
      output: StartAutomationJobResponse;
    };
    sdk: {
      input: StartAutomationJobCommandInput;
      output: StartAutomationJobCommandOutput;
    };
  };
}
