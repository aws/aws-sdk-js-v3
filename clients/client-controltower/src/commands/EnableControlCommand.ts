// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableControlInput, EnableControlOutput } from "../models/models_0";
import { EnableControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableControlCommand}.
 */
export interface EnableControlCommandInput extends EnableControlInput {}
/**
 * @public
 *
 * The output of {@link EnableControlCommand}.
 */
export interface EnableControlCommandOutput extends EnableControlOutput, __MetadataBearer {}

/**
 * This API call activates a control. It starts an asynchronous operation that creates Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify. For usage examples, see the [*Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, EnableControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, EnableControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // EnableControlInput
 *   controlIdentifier: "STRING_VALUE", // required
 *   targetIdentifier: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   parameters: [ // EnabledControlParameters
 *     { // EnabledControlParameter
 *       key: "STRING_VALUE", // required
 *       value: "DOCUMENT_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new EnableControlCommand(input);
 * const response = await client.send(command);
 * // { // EnableControlOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableControlCommandInput - {@link EnableControlCommandInput}
 * @returns {@link EnableControlCommandOutput}
 * @see {@link EnableControlCommandInput} for command's `input` shape.
 * @see {@link EnableControlCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded. See [Service quotas](https://docs.aws.amazon.com/controltower/latest/userguide/request-an-increase.html).
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
export class EnableControlCommand extends command<EnableControlCommandInput, EnableControlCommandOutput>(
  _ep0,
  _mw0,
  "EnableControl",
  EnableControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableControlInput;
      output: EnableControlOutput;
    };
    sdk: {
      input: EnableControlCommandInput;
      output: EnableControlCommandOutput;
    };
  };
}
