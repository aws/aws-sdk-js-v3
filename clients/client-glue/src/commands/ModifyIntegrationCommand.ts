// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ModifyIntegrationRequest, ModifyIntegrationResponse } from "../models/models_2";
import { ModifyIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIntegrationCommand}.
 */
export interface ModifyIntegrationCommandInput extends ModifyIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIntegrationCommand}.
 */
export interface ModifyIntegrationCommandOutput extends ModifyIntegrationResponse, __MetadataBearer {}

/**
 * <p>Modifies a Zero-ETL integration in the caller's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ModifyIntegrationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ModifyIntegrationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ModifyIntegrationRequest
 *   IntegrationIdentifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DataFilter: "STRING_VALUE",
 *   IntegrationConfig: { // IntegrationConfig
 *     RefreshInterval: "STRING_VALUE",
 *     SourceProperties: { // IntegrationSourcePropertiesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     ContinuousSync: true || false,
 *   },
 *   IntegrationName: "STRING_VALUE",
 * };
 * const command = new ModifyIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIntegrationResponse
 * //   SourceArn: "STRING_VALUE", // required
 * //   TargetArn: "STRING_VALUE", // required
 * //   IntegrationName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   IntegrationArn: "STRING_VALUE", // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   AdditionalEncryptionContext: { // IntegrationAdditionalEncryptionContextMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: [ // IntegrationTagsList
 * //     { // Tag
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Status: "CREATING" || "ACTIVE" || "MODIFYING" || "FAILED" || "DELETING" || "SYNCING" || "NEEDS_ATTENTION", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   Errors: [ // IntegrationErrorList
 * //     { // IntegrationError
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   DataFilter: "STRING_VALUE",
 * //   IntegrationConfig: { // IntegrationConfig
 * //     RefreshInterval: "STRING_VALUE",
 * //     SourceProperties: { // IntegrationSourcePropertiesMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ContinuousSync: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIntegrationCommandInput - {@link ModifyIntegrationCommandInput}
 * @returns {@link ModifyIntegrationCommandOutput}
 * @see {@link ModifyIntegrationCommandInput} for command's `input` shape.
 * @see {@link ModifyIntegrationCommandOutput} for command's `response` shape.
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
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *  <p>The requested operation conflicts with another operation.</p>
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The specified integration could not be found.</p>
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
 * @throws {@link InvalidIntegrationStateFault} (client fault)
 *  <p>The integration is in an invalid state.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An error that indicates your data is in an invalid state.</p>
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
export class ModifyIntegrationCommand extends $Command
  .classBuilder<
    ModifyIntegrationCommandInput,
    ModifyIntegrationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ModifyIntegration", {})
  .n("GlueClient", "ModifyIntegrationCommand")
  .sc(ModifyIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIntegrationRequest;
      output: ModifyIntegrationResponse;
    };
    sdk: {
      input: ModifyIntegrationCommandInput;
      output: ModifyIntegrationCommandOutput;
    };
  };
}
