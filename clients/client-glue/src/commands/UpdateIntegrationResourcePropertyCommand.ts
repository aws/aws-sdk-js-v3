// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  UpdateIntegrationResourcePropertyRequest,
  UpdateIntegrationResourcePropertyResponse,
} from "../models/models_2";
import { UpdateIntegrationResourceProperty$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This API can be used for updating the <code>ResourceProperty</code> of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. Since the same resource can be used across multiple integrations, updating resource properties will impact all the integrations using it.</p>
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
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateIntegrationResourcePropertyCommand extends $Command
  .classBuilder<
    UpdateIntegrationResourcePropertyCommandInput,
    UpdateIntegrationResourcePropertyCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateIntegrationResourceProperty", {})
  .n("GlueClient", "UpdateIntegrationResourcePropertyCommand")
  .sc(UpdateIntegrationResourceProperty$)
  .build() {
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
