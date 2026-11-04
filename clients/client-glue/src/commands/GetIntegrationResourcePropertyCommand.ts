// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIntegrationResourcePropertyRequest, GetIntegrationResourcePropertyResponse } from "../models/models_2";
import { GetIntegrationResourceProperty$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIntegrationResourcePropertyCommand}.
 */
export interface GetIntegrationResourcePropertyCommandInput extends GetIntegrationResourcePropertyRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationResourcePropertyCommand}.
 */
export interface GetIntegrationResourcePropertyCommandOutput extends GetIntegrationResourcePropertyResponse, __MetadataBearer {}

/**
 * This API is used for fetching the `ResourceProperty` of the Glue connection (for the source) or Glue database ARN (for the target)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetIntegrationResourcePropertyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetIntegrationResourcePropertyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetIntegrationResourcePropertyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationResourcePropertyCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationResourcePropertyResponse
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
 * @param GetIntegrationResourcePropertyCommandInput - {@link GetIntegrationResourcePropertyCommandInput}
 * @returns {@link GetIntegrationResourcePropertyCommandOutput}
 * @see {@link GetIntegrationResourcePropertyCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResourcePropertyCommandOutput} for command's `response` shape.
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
export class GetIntegrationResourcePropertyCommand extends command<GetIntegrationResourcePropertyCommandInput, GetIntegrationResourcePropertyCommandOutput>(
  _ep0,
  _mw0,
  "GetIntegrationResourceProperty",
  GetIntegrationResourceProperty$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntegrationResourcePropertyRequest;
      output: GetIntegrationResourcePropertyResponse;
    };
    sdk: {
      input: GetIntegrationResourcePropertyCommandInput;
      output: GetIntegrationResourcePropertyCommandOutput;
    };
  };
}
