// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DescribeInboundIntegrationsRequest, DescribeInboundIntegrationsResponse } from "../models/models_1";
import { DescribeInboundIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeInboundIntegrationsCommandOutput
  extends DescribeInboundIntegrationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of inbound integrations for the specified integration.</p>
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
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link TargetResourceNotFound} (client fault)
 *  <p>The target resource could not be found.</p>
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
export class DescribeInboundIntegrationsCommand extends $Command
  .classBuilder<
    DescribeInboundIntegrationsCommandInput,
    DescribeInboundIntegrationsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DescribeInboundIntegrations", {})
  .n("GlueClient", "DescribeInboundIntegrationsCommand")
  .sc(DescribeInboundIntegrations$)
  .build() {
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
