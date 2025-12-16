// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeIntegrationsMessage, IntegrationsMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIntegrationsCommand}.
 */
export interface DescribeIntegrationsCommandInput extends DescribeIntegrationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeIntegrationsCommand}.
 */
export interface DescribeIntegrationsCommandOutput extends IntegrationsMessage, __MetadataBearer {}

/**
 * <p>Describes one or more zero-ETL or S3 event integrations with Amazon Redshift.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeIntegrationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeIntegrationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeIntegrationsMessage
 *   IntegrationArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   Filters: [ // DescribeIntegrationsFilterList
 *     { // DescribeIntegrationsFilter
 *       Name: "integration-arn" || "source-arn" || "source-types" || "status", // required
 *       Values: [ // DescribeIntegrationsFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // IntegrationsMessage
 * //   Marker: "STRING_VALUE",
 * //   Integrations: [ // IntegrationList
 * //     { // Integration
 * //       IntegrationArn: "STRING_VALUE",
 * //       IntegrationName: "STRING_VALUE",
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
 * //       Description: "STRING_VALUE",
 * //       KMSKeyId: "STRING_VALUE",
 * //       AdditionalEncryptionContext: { // EncryptionContextMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIntegrationsCommandInput - {@link DescribeIntegrationsCommandInput}
 * @returns {@link DescribeIntegrationsCommandOutput}
 * @see {@link DescribeIntegrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The integration can't be found.</p>
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
export class DescribeIntegrationsCommand extends $Command
  .classBuilder<
    DescribeIntegrationsCommandInput,
    DescribeIntegrationsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeIntegrations", {})
  .n("RedshiftClient", "DescribeIntegrationsCommand")
  .sc(DescribeIntegrations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIntegrationsMessage;
      output: IntegrationsMessage;
    };
    sdk: {
      input: DescribeIntegrationsCommandInput;
      output: DescribeIntegrationsCommandOutput;
    };
  };
}
