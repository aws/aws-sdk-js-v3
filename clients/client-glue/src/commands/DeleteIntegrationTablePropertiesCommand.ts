// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteIntegrationTablePropertiesRequest,
  DeleteIntegrationTablePropertiesResponse,
} from "../models/models_1";
import { DeleteIntegrationTableProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationTablePropertiesCommand}.
 */
export interface DeleteIntegrationTablePropertiesCommandInput extends DeleteIntegrationTablePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationTablePropertiesCommand}.
 */
export interface DeleteIntegrationTablePropertiesCommandOutput extends DeleteIntegrationTablePropertiesResponse, __MetadataBearer {}

/**
 * Deletes the table properties that have been created for the tables that need to be replicated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteIntegrationTablePropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteIntegrationTablePropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteIntegrationTablePropertiesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationTablePropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationTablePropertiesCommandInput - {@link DeleteIntegrationTablePropertiesCommandInput}
 * @returns {@link DeleteIntegrationTablePropertiesCommandOutput}
 * @see {@link DeleteIntegrationTablePropertiesCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationTablePropertiesCommandOutput} for command's `response` shape.
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
export class DeleteIntegrationTablePropertiesCommand extends command<DeleteIntegrationTablePropertiesCommandInput, DeleteIntegrationTablePropertiesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIntegrationTableProperties",
  DeleteIntegrationTableProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationTablePropertiesRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationTablePropertiesCommandInput;
      output: DeleteIntegrationTablePropertiesCommandOutput;
    };
  };
}
