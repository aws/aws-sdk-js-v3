// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBaselineInput, GetBaselineOutput } from "../models/models_0";
import { GetBaseline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBaselineCommand}.
 */
export interface GetBaselineCommandInput extends GetBaselineInput {}
/**
 * @public
 *
 * The output of {@link GetBaselineCommand}.
 */
export interface GetBaselineCommandOutput extends GetBaselineOutput, __MetadataBearer {}

/**
 * Retrieve details about an existing `Baseline` resource by specifying its identifier. For usage examples, see [*the Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetBaselineCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetBaselineCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // GetBaselineInput
 *   baselineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetBaselineCommand(input);
 * const response = await client.send(command);
 * // { // GetBaselineOutput
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBaselineCommandInput - {@link GetBaselineCommandInput}
 * @returns {@link GetBaselineCommandOutput}
 * @see {@link GetBaselineCommandInput} for command's `input` shape.
 * @see {@link GetBaselineCommandOutput} for command's `response` shape.
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
export class GetBaselineCommand extends command<GetBaselineCommandInput, GetBaselineCommandOutput>(
  _ep0,
  _mw0,
  "GetBaseline",
  GetBaseline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBaselineInput;
      output: GetBaselineOutput;
    };
    sdk: {
      input: GetBaselineCommandInput;
      output: GetBaselineCommandOutput;
    };
  };
}
