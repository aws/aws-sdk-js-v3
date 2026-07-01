// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteParametersRequest, DeleteParametersResult } from "../models/models_0";
import { DeleteParameters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteParametersCommand}.
 */
export interface DeleteParametersCommandInput extends DeleteParametersRequest {}
/**
 * @public
 *
 * The output of {@link DeleteParametersCommand}.
 */
export interface DeleteParametersCommandOutput extends DeleteParametersResult, __MetadataBearer {}

/**
 * <p>Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to
 *    create a parameter with the same name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteParametersRequest
 *   Names: [ // ParameterNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteParametersCommand(input);
 * const response = await client.send(command);
 * // { // DeleteParametersResult
 * //   DeletedParameters: [ // ParameterNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   InvalidParameters: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteParametersCommandInput - {@link DeleteParametersCommandInput}
 * @returns {@link DeleteParametersCommandOutput}
 * @see {@link DeleteParametersCommandInput} for command's `input` shape.
 * @see {@link DeleteParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteParametersCommand extends command<DeleteParametersCommandInput, DeleteParametersCommandOutput>(
  _ep0,
  _mw0,
  "DeleteParameters",
  DeleteParameters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteParametersRequest;
      output: DeleteParametersResult;
    };
    sdk: {
      input: DeleteParametersCommandInput;
      output: DeleteParametersCommandOutput;
    };
  };
}
