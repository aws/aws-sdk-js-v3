// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIntegrationRequest, CreateIntegrationResponse } from "../models/models_1";
import { CreateIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandInput extends CreateIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandOutput extends CreateIntegrationResponse, __MetadataBearer {}

/**
 * Creates a Zero-ETL integration in the caller's account between two resources with Amazon Resource Names (ARNs): the `SourceArn` and `TargetArn`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateIntegrationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateIntegrationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateIntegrationRequest
 *   IntegrationName: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE", // required
 *   TargetArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DataFilter: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   AdditionalEncryptionContext: { // IntegrationAdditionalEncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [ // IntegrationTagsList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   IntegrationConfig: { // IntegrationConfig
 *     RefreshInterval: "STRING_VALUE",
 *     SourceProperties: { // IntegrationSourcePropertiesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     ContinuousSync: true || false,
 *     TargetNamespace: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationResponse
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
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
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
 * @throws {@link IntegrationQuotaExceededFault} (client fault)
 *
 * The data processed through your integration exceeded your quota.
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
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * The KMS key specified is not accessible.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
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
export class CreateIntegrationCommand extends command<CreateIntegrationCommandInput, CreateIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIntegration",
  CreateIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationRequest;
      output: CreateIntegrationResponse;
    };
    sdk: {
      input: CreateIntegrationCommandInput;
      output: CreateIntegrationCommandOutput;
    };
  };
}
