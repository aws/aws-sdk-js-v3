// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteComponentRequest } from "../models/models_0";
import { DeleteComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteComponentCommand}.
 */
export interface DeleteComponentCommandInput extends DeleteComponentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteComponentCommand}.
 */
export interface DeleteComponentCommandOutput extends __MetadataBearer {}

/**
 * Deletes a component from an Amplify app.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, DeleteComponentCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, DeleteComponentCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // DeleteComponentRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteComponentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteComponentCommandInput - {@link DeleteComponentCommandInput}
 * @returns {@link DeleteComponentCommandOutput}
 * @see {@link DeleteComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentCommandOutput} for command's `response` shape.
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
export class DeleteComponentCommand extends command<DeleteComponentCommandInput, DeleteComponentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteComponent",
  DeleteComponent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteComponentRequest;
      output: {};
    };
    sdk: {
      input: DeleteComponentCommandInput;
      output: DeleteComponentCommandOutput;
    };
  };
}
