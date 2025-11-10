// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CreateIntegrationResourcePropertyRequest,
  CreateIntegrationResourcePropertyResponse,
} from "../models/models_1";
import { CreateIntegrationResourceProperty } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateIntegrationResourcePropertyCommandOutput
  extends CreateIntegrationResourcePropertyResponse,
    __MetadataBearer {}

/**
 * <p>This API can be used for setting up the <code>ResourceProperty</code> of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. To set both source and target properties the same API needs to be invoked with the Glue connection ARN as <code>ResourceArn</code> with <code>SourceProcessingProperties</code> and the Glue database ARN as <code>ResourceArn</code> with <code>TargetProcessingProperties</code> respectively.</p>
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
 * };
 * const command = new CreateIntegrationResourcePropertyCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationResourcePropertyResponse
 * //   ResourceArn: "STRING_VALUE", // required
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
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
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
export class CreateIntegrationResourcePropertyCommand extends $Command
  .classBuilder<
    CreateIntegrationResourcePropertyCommandInput,
    CreateIntegrationResourcePropertyCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreateIntegrationResourceProperty", {})
  .n("GlueClient", "CreateIntegrationResourcePropertyCommand")
  .sc(CreateIntegrationResourceProperty)
  .build() {
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
