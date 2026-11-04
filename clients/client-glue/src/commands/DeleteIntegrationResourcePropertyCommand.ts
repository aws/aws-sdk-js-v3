// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteIntegrationResourcePropertyRequest,
  DeleteIntegrationResourcePropertyResponse,
} from "../models/models_1";
import { DeleteIntegrationResourceProperty$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationResourcePropertyCommand}.
 */
export interface DeleteIntegrationResourcePropertyCommandInput extends DeleteIntegrationResourcePropertyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationResourcePropertyCommand}.
 */
export interface DeleteIntegrationResourcePropertyCommandOutput extends DeleteIntegrationResourcePropertyResponse, __MetadataBearer {}

/**
 * This API is used for deleting the `ResourceProperty` of the Glue connection (for the source) or Glue database ARN (for the target).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteIntegrationResourcePropertyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteIntegrationResourcePropertyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteIntegrationResourcePropertyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationResourcePropertyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationResourcePropertyCommandInput - {@link DeleteIntegrationResourcePropertyCommandInput}
 * @returns {@link DeleteIntegrationResourcePropertyCommandOutput}
 * @see {@link DeleteIntegrationResourcePropertyCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationResourcePropertyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A value could not be validated.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DeleteIntegrationResourcePropertyCommand extends command<DeleteIntegrationResourcePropertyCommandInput, DeleteIntegrationResourcePropertyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIntegrationResourceProperty",
  DeleteIntegrationResourceProperty$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationResourcePropertyRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationResourcePropertyCommandInput;
      output: DeleteIntegrationResourcePropertyCommandOutput;
    };
  };
}
