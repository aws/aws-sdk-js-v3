// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UnlabelParameterVersionRequest, UnlabelParameterVersionResult } from "../models/models_1";
import { UnlabelParameterVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UnlabelParameterVersionCommand}.
 */
export interface UnlabelParameterVersionCommandInput extends UnlabelParameterVersionRequest {}
/**
 * @public
 *
 * The output of {@link UnlabelParameterVersionCommand}.
 */
export interface UnlabelParameterVersionCommandOutput extends UnlabelParameterVersionResult, __MetadataBearer {}

/**
 * Remove a label or labels from a parameter.
 *
 * Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a `ValidationException` error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UnlabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UnlabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UnlabelParameterVersionRequest
 *   Name: "STRING_VALUE", // required
 *   ParameterVersion: Number("long"), // required
 *   Labels: [ // ParameterLabelList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UnlabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * // { // UnlabelParameterVersionResult
 * //   RemovedLabels: [ // ParameterLabelList
 * //     "STRING_VALUE",
 * //   ],
 * //   InvalidLabels: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnlabelParameterVersionCommandInput - {@link UnlabelParameterVersionCommandInput}
 * @returns {@link UnlabelParameterVersionCommandOutput}
 * @see {@link UnlabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link UnlabelParameterVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link ParameterNotFound} (client fault)
 *
 * The parameter couldn't be found. Verify the name and try again.
 *
 * > **Note:** For the `DeleteParameter` and `GetParameter` actions, if the specified parameter doesn't exist, the `ParameterNotFound` exception is *not* recorded in CloudTrail event logs.
 *
 * @throws {@link ParameterVersionNotFound} (client fault)
 *
 * The specified parameter version wasn't found. Verify the parameter name and version, and try again.
 *
 * @throws {@link TooManyUpdates} (client fault)
 *
 * There are concurrent updates for a resource that supports one update at a time.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class UnlabelParameterVersionCommand extends command<UnlabelParameterVersionCommandInput, UnlabelParameterVersionCommandOutput>(
  _ep0,
  _mw0,
  "UnlabelParameterVersion",
  UnlabelParameterVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnlabelParameterVersionRequest;
      output: UnlabelParameterVersionResult;
    };
    sdk: {
      input: UnlabelParameterVersionCommandInput;
      output: UnlabelParameterVersionCommandOutput;
    };
  };
}
