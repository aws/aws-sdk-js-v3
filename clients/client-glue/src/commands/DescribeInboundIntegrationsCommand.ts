// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInboundIntegrationsRequest, DescribeInboundIntegrationsResponse } from "../models/models_1";
import { DescribeInboundIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInboundIntegrationsCommand}.
 */
export interface DescribeInboundIntegrationsCommandInput extends DescribeInboundIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInboundIntegrationsCommand}.
 */
export interface DescribeInboundIntegrationsCommandOutput extends DescribeInboundIntegrationsResponse, __MetadataBearer {}

/**
 * Returns a list of inbound integrations for the specified integration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DescribeInboundIntegrationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DescribeInboundIntegrationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DescribeInboundIntegrationsRequest
 *   IntegrationArn: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   TargetArn: "STRING_VALUE",
 * };
 * const command = new DescribeInboundIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInboundIntegrationsResponse
 * //   InboundIntegrations: [ // InboundIntegrationsList
 * //     { // InboundIntegration
 * //       SourceArn: "STRING_VALUE", // required
 * //       TargetArn: "STRING_VALUE", // required
 * //       IntegrationArn: "STRING_VALUE", // required
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
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInboundIntegrationsCommandInput - {@link DescribeInboundIntegrationsCommandInput}
 * @returns {@link DescribeInboundIntegrationsCommandOutput}
 * @see {@link DescribeInboundIntegrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundIntegrationsCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not available in the region.
 *
 * @throws {@link TargetResourceNotFound} (client fault)
 *
 * The target resource could not be found.
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
export class DescribeInboundIntegrationsCommand extends command<DescribeInboundIntegrationsCommandInput, DescribeInboundIntegrationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInboundIntegrations",
  DescribeInboundIntegrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInboundIntegrationsRequest;
      output: DescribeInboundIntegrationsResponse;
    };
    sdk: {
      input: DescribeInboundIntegrationsCommandInput;
      output: DescribeInboundIntegrationsCommandOutput;
    };
  };
}
