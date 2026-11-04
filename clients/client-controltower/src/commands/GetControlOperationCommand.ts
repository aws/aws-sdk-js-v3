// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetControlOperationInput, GetControlOperationOutput } from "../models/models_0";
import { GetControlOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetControlOperationCommand}.
 */
export interface GetControlOperationCommandInput extends GetControlOperationInput {}
/**
 * @public
 *
 * The output of {@link GetControlOperationCommand}.
 */
export interface GetControlOperationCommandOutput extends GetControlOperationOutput, __MetadataBearer {}

/**
 * Returns the status of a particular `EnableControl` or `DisableControl` operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see the [*Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetControlOperationCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetControlOperationCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // GetControlOperationInput
 *   operationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetControlOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetControlOperationOutput
 * //   controlOperation: { // ControlOperation
 * //     operationType: "ENABLE_CONTROL" || "DISABLE_CONTROL" || "UPDATE_ENABLED_CONTROL" || "RESET_ENABLED_CONTROL",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * //     statusMessage: "STRING_VALUE",
 * //     operationIdentifier: "STRING_VALUE",
 * //     controlIdentifier: "STRING_VALUE",
 * //     targetIdentifier: "STRING_VALUE",
 * //     enabledControlIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetControlOperationCommandInput - {@link GetControlOperationCommandInput}
 * @returns {@link GetControlOperationCommandOutput}
 * @see {@link GetControlOperationCommandInput} for command's `input` shape.
 * @see {@link GetControlOperationCommandOutput} for command's `response` shape.
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
export class GetControlOperationCommand extends command<GetControlOperationCommandInput, GetControlOperationCommandOutput>(
  _ep0,
  _mw0,
  "GetControlOperation",
  GetControlOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetControlOperationInput;
      output: GetControlOperationOutput;
    };
    sdk: {
      input: GetControlOperationCommandInput;
      output: GetControlOperationCommandOutput;
    };
  };
}
