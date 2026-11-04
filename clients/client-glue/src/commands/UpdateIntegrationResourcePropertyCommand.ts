// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateIntegrationResourcePropertyRequest,
  UpdateIntegrationResourcePropertyResponse,
} from "../models/models_3";
import { UpdateIntegrationResourceProperty$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIntegrationResourcePropertyCommand}.
 */
export interface UpdateIntegrationResourcePropertyCommandInput extends UpdateIntegrationResourcePropertyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIntegrationResourcePropertyCommand}.
 */
export interface UpdateIntegrationResourcePropertyCommandOutput extends UpdateIntegrationResourcePropertyResponse, __MetadataBearer {}

/**
 * This API can be used for updating the `ResourceProperty` of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. Since the same resource can be used across multiple integrations, updating resource properties will impact all the integrations using it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateIntegrationResourcePropertyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateIntegrationResourcePropertyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateIntegrationResourcePropertyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   SourceProcessingProperties: { // SourceProcessingProperties
 *     RoleArn: "STRING_VALUE",
 *   },
 *   TargetProcessingProperties: { // TargetProcessingProperties
 *     RoleArn: "STRING_VALUE",
 *     KmsArn: "STRING_VALUE",
 *     ConnectionName: "STRING_VALUE",
 *     EventBusArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateIntegrationResourcePropertyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntegrationResourcePropertyResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   ResourcePropertyArn: "STRING_VALUE",
 * //   SourceProcessingProperties: { // SourceProcessingProperties
 * //     RoleArn: "STRING_VALUE",
 * //   },
 * //   TargetProcessingProperties: { // TargetProcessingProperties
 * //     RoleArn: "STRING_VALUE",
 * //     KmsArn: "STRING_VALUE",
 * //     ConnectionName: "STRING_VALUE",
 * //     EventBusArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIntegrationResourcePropertyCommandInput - {@link UpdateIntegrationResourcePropertyCommandInput}
 * @returns {@link UpdateIntegrationResourcePropertyCommandOutput}
 * @see {@link UpdateIntegrationResourcePropertyCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationResourcePropertyCommandOutput} for command's `response` shape.
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
export class UpdateIntegrationResourcePropertyCommand extends command<UpdateIntegrationResourcePropertyCommandInput, UpdateIntegrationResourcePropertyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIntegrationResourceProperty",
  UpdateIntegrationResourceProperty$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntegrationResourcePropertyRequest;
      output: UpdateIntegrationResourcePropertyResponse;
    };
    sdk: {
      input: UpdateIntegrationResourcePropertyCommandInput;
      output: UpdateIntegrationResourcePropertyCommandOutput;
    };
  };
}
