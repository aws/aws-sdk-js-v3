// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInboundIntegrationsMessage, InboundIntegrationsMessage } from "../models/models_1";
import { de_DescribeInboundIntegrationsCommand, se_DescribeInboundIntegrationsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeInboundIntegrations", {})
  .n("RedshiftClient", "DescribeInboundIntegrationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInboundIntegrationsCommand)
  .de(de_DescribeInboundIntegrationsCommand)
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
