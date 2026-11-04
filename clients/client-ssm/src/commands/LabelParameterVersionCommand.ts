// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LabelParameterVersionRequest, LabelParameterVersionResult } from "../models/models_1";
import { LabelParameterVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link LabelParameterVersionCommand}.
 */
export interface LabelParameterVersionCommandInput extends LabelParameterVersionRequest {}
/**
 * @public
 *
 * The output of {@link LabelParameterVersionCommand}.
 */
export interface LabelParameterVersionCommandOutput extends LabelParameterVersionResult, __MetadataBearer {}

/**
 * A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions.
 *
 * Parameter labels have the following requirements and restrictions.
 *
 * - A version of a parameter can have a maximum of 10 labels.
 * - You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.
 * - You can move a label from one version of a parameter to another.
 * - You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.
 * - If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.
 * - A label can have a maximum of 100 characters.
 * - Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).
 * - Labels can't begin with a number, "`aws`" or "`ssm`" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.
 * - Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a `ValidationException` error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, LabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, LabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // LabelParameterVersionRequest
 *   Name: "STRING_VALUE", // required
 *   ParameterVersion: Number("long"),
 *   Labels: [ // ParameterLabelList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new LabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * // { // LabelParameterVersionResult
 * //   InvalidLabels: [ // ParameterLabelList
 * //     "STRING_VALUE",
 * //   ],
 * //   ParameterVersion: Number("long"),
 * // };
 *
 * ```
 *
 * @param LabelParameterVersionCommandInput - {@link LabelParameterVersionCommandInput}
 * @returns {@link LabelParameterVersionCommandOutput}
 * @see {@link LabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link LabelParameterVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ParameterVersionLabelLimitExceeded} (client fault)
 *
 * A parameter version can have a maximum of ten labels.
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
export class LabelParameterVersionCommand extends command<LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput>(
  _ep0,
  _mw0,
  "LabelParameterVersion",
  LabelParameterVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LabelParameterVersionRequest;
      output: LabelParameterVersionResult;
    };
    sdk: {
      input: LabelParameterVersionCommandInput;
      output: LabelParameterVersionCommandOutput;
    };
  };
}
