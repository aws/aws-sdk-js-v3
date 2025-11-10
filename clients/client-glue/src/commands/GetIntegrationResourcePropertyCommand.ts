// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetIntegrationResourcePropertyRequest, GetIntegrationResourcePropertyResponse } from "../models/models_2";
import { GetIntegrationResourceProperty } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetIntegrationResourcePropertyCommandOutput
  extends GetIntegrationResourcePropertyResponse,
    __MetadataBearer {}

/**
 * <p>This API is used for fetching the <code>ResourceProperty</code> of the Glue connection (for the source) or Glue database ARN (for the target)</p>
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
export class GetIntegrationResourcePropertyCommand extends $Command
  .classBuilder<
    GetIntegrationResourcePropertyCommandInput,
    GetIntegrationResourcePropertyCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetIntegrationResourceProperty", {})
  .n("GlueClient", "GetIntegrationResourcePropertyCommand")
  .sc(GetIntegrationResourceProperty)
  .build() {
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
