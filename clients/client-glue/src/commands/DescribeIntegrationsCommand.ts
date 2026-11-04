// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeIntegrationsRequest, DescribeIntegrationsResponse } from "../models/models_1";
import { DescribeIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeIntegrationsCommand}.
 */
export interface DescribeIntegrationsCommandInput extends DescribeIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIntegrationsCommand}.
 */
export interface DescribeIntegrationsCommandOutput extends DescribeIntegrationsResponse, __MetadataBearer {}

/**
 * The API is used to retrieve a list of integrations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DescribeIntegrationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DescribeIntegrationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DescribeIntegrationsRequest
 *   IntegrationIdentifier: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Filters: [ // IntegrationFilterList
 *     { // IntegrationFilter
 *       Name: "STRING_VALUE",
 *       Values: [ // IntegrationFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIntegrationsResponse
 * //   Integrations: [ // IntegrationsList
 * //     { // Integration
 * //       SourceArn: "STRING_VALUE", // required
 * //       TargetArn: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       IntegrationName: "STRING_VALUE", // required
 * //       IntegrationArn: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //       AdditionalEncryptionContext: { // IntegrationAdditionalEncryptionContextMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Tags: [ // IntegrationTagsList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "CREATING" || "ACTIVE" || "MODIFYING" || "FAILED" || "DELETING" || "SYNCING" || "NEEDS_ATTENTION", // required
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       IntegrationConfig: { // IntegrationConfig
 * //         RefreshInterval: "STRING_VALUE",
 * //         SourceProperties: { // IntegrationSourcePropertiesMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         ContinuousSync: true || false,
 * //         TargetNamespace: "STRING_VALUE",
 * //       },
 * //       Errors: [ // IntegrationErrorList
 * //         { // IntegrationError
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DataFilter: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIntegrationsCommandInput - {@link DescribeIntegrationsCommandInput}
 * @returns {@link DescribeIntegrationsCommandOutput}
 * @see {@link DescribeIntegrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIntegrationsCommandOutput} for command's `response` shape.
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
export class DescribeIntegrationsCommand extends command<DescribeIntegrationsCommandInput, DescribeIntegrationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIntegrations",
  DescribeIntegrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIntegrationsRequest;
      output: DescribeIntegrationsResponse;
    };
    sdk: {
      input: DescribeIntegrationsCommandInput;
      output: DescribeIntegrationsCommandOutput;
    };
  };
}
