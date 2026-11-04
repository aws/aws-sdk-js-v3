// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyIntegrationRequest, ModifyIntegrationResponse } from "../models/models_2";
import { ModifyIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies a Zero-ETL integration in the caller's account.
 *
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
 *     TargetNamespace: "STRING_VALUE",
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
 * //     TargetNamespace: "STRING_VALUE",
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
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *
 * The requested operation conflicts with another operation.
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *
 * The specified integration could not be found.
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
 * @throws {@link InvalidIntegrationStateFault} (client fault)
 *
 * The integration is in an invalid state.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * An error that indicates your data is in an invalid state.
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
export class ModifyIntegrationCommand extends command<ModifyIntegrationCommandInput, ModifyIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyIntegration",
  ModifyIntegration$
) {
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
