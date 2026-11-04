// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateIntegrationResourcePropertyRequest,
  CreateIntegrationResourcePropertyResponse,
} from "../models/models_1";
import { CreateIntegrationResourceProperty$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIntegrationResourcePropertyCommand}.
 */
export interface CreateIntegrationResourcePropertyCommandInput extends CreateIntegrationResourcePropertyRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationResourcePropertyCommand}.
 */
export interface CreateIntegrationResourcePropertyCommandOutput extends CreateIntegrationResourcePropertyResponse, __MetadataBearer {}

/**
 * This API can be used for setting up the `ResourceProperty` of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. To set both source and target properties the same API needs to be invoked with the Glue connection ARN as `ResourceArn` with `SourceProcessingProperties` and the Glue database ARN as `ResourceArn` with `TargetProcessingProperties` respectively.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateIntegrationResourcePropertyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateIntegrationResourcePropertyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateIntegrationResourcePropertyRequest
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
 *   Tags: [ // IntegrationTagsList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateIntegrationResourcePropertyCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationResourcePropertyResponse
 * //   ResourceArn: "STRING_VALUE", // required
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
 * @param CreateIntegrationResourcePropertyCommandInput - {@link CreateIntegrationResourcePropertyCommandInput}
 * @returns {@link CreateIntegrationResourcePropertyCommandOutput}
 * @see {@link CreateIntegrationResourcePropertyCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationResourcePropertyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The `CreatePartitions` API was called on a table that has indexes enabled.
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
export class CreateIntegrationResourcePropertyCommand extends command<CreateIntegrationResourcePropertyCommandInput, CreateIntegrationResourcePropertyCommandOutput>(
  _ep0,
  _mw0,
  "CreateIntegrationResourceProperty",
  CreateIntegrationResourceProperty$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationResourcePropertyRequest;
      output: CreateIntegrationResourcePropertyResponse;
    };
    sdk: {
      input: CreateIntegrationResourcePropertyCommandInput;
      output: CreateIntegrationResourcePropertyCommandOutput;
    };
  };
}
