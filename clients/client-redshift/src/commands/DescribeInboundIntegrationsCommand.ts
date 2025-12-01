// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeInboundIntegrationsMessage, InboundIntegrationsMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeInboundIntegrations } from "../schemas/schemas_0";

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
export interface DescribeInboundIntegrationsCommandInput extends DescribeInboundIntegrationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeInboundIntegrationsCommand}.
 */
export interface DescribeInboundIntegrationsCommandOutput extends InboundIntegrationsMessage, __MetadataBearer {}

/**
 * <p>Returns a list of inbound integrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeInboundIntegrationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeInboundIntegrationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeInboundIntegrationsMessage
 *   IntegrationArn: "STRING_VALUE",
 *   TargetArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeInboundIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // InboundIntegrationsMessage
 * //   Marker: "STRING_VALUE",
 * //   InboundIntegrations: [ // InboundIntegrationList
 * //     { // InboundIntegration
 * //       IntegrationArn: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       TargetArn: "STRING_VALUE",
 * //       Status: "creating" || "active" || "modifying" || "failed" || "deleting" || "syncing" || "needs_attention",
 * //       Errors: [ // IntegrationErrorList
 * //         { // IntegrationError
 * //           ErrorCode: "STRING_VALUE", // required
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInboundIntegrationsCommandInput - {@link DescribeInboundIntegrationsCommandInput}
 * @returns {@link DescribeInboundIntegrationsCommandOutput}
 * @see {@link DescribeInboundIntegrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The integration can't be found.</p>
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *  <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeInboundIntegrationsCommand extends $Command
  .classBuilder<
    DescribeInboundIntegrationsCommandInput,
    DescribeInboundIntegrationsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeInboundIntegrations", {})
  .n("RedshiftClient", "DescribeInboundIntegrationsCommand")
  .sc(DescribeInboundIntegrations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInboundIntegrationsMessage;
      output: InboundIntegrationsMessage;
    };
    sdk: {
      input: DescribeInboundIntegrationsCommandInput;
      output: DescribeInboundIntegrationsCommandOutput;
    };
  };
}
