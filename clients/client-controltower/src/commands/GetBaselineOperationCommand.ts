// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBaselineOperationInput, GetBaselineOperationOutput } from "../models/models_0";
import { GetBaselineOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBaselineOperationCommand}.
 */
export interface GetBaselineOperationCommandInput extends GetBaselineOperationInput {}
/**
 * @public
 *
 * The output of {@link GetBaselineOperationCommand}.
 */
export interface GetBaselineOperationCommandOutput extends GetBaselineOperationOutput, __MetadataBearer {}

/**
 * Returns the details of an asynchronous baseline operation, as initiated by any of these APIs: `EnableBaseline`, `DisableBaseline`, `UpdateEnabledBaseline`, `ResetEnabledBaseline`. A status message is displayed in case of operation failure. For usage examples, see [*the Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetBaselineOperationCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetBaselineOperationCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // GetBaselineOperationInput
 *   operationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetBaselineOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetBaselineOperationOutput
 * //   baselineOperation: { // BaselineOperation
 * //     operationIdentifier: "STRING_VALUE",
 * //     operationType: "ENABLE_BASELINE" || "DISABLE_BASELINE" || "UPDATE_ENABLED_BASELINE" || "RESET_ENABLED_BASELINE",
 * //     status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBaselineOperationCommandInput - {@link GetBaselineOperationCommandInput}
 * @returns {@link GetBaselineOperationCommandOutput}
 * @see {@link GetBaselineOperationCommandInput} for command's `input` shape.
 * @see {@link GetBaselineOperationCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ControlTowerServiceException}
 *
 * Base exception class for all service exceptions from ControlTower service.
 *
 * @public
 */
export class GetBaselineOperationCommand extends command<GetBaselineOperationCommandInput, GetBaselineOperationCommandOutput>(
  _ep0,
  _mw0,
  "GetBaselineOperation",
  GetBaselineOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBaselineOperationInput;
      output: GetBaselineOperationOutput;
    };
    sdk: {
      input: GetBaselineOperationCommandInput;
      output: GetBaselineOperationCommandOutput;
    };
  };
}
