// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFormRequest } from "../models/models_0";
import { DeleteForm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFormCommand}.
 */
export interface DeleteFormCommandInput extends DeleteFormRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFormCommand}.
 */
export interface DeleteFormCommandOutput extends __MetadataBearer {}

/**
 * Deletes a form from an Amplify app.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, DeleteFormCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, DeleteFormCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // DeleteFormRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteFormCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFormCommandInput - {@link DeleteFormCommandInput}
 * @returns {@link DeleteFormCommandOutput}
 * @see {@link DeleteFormCommandInput} for command's `input` shape.
 * @see {@link DeleteFormCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Please retry your request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An invalid or out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 *
 * Base exception class for all service exceptions from AmplifyUIBuilder service.
 *
 * @public
 */
export class DeleteFormCommand extends command<DeleteFormCommandInput, DeleteFormCommandOutput>(
  _ep0,
  _mw0,
  "DeleteForm",
  DeleteForm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFormRequest;
      output: {};
    };
    sdk: {
      input: DeleteFormCommandInput;
      output: DeleteFormCommandOutput;
    };
  };
}
