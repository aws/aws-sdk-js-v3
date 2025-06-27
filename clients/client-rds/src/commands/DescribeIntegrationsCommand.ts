// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIntegrationsMessage, DescribeIntegrationsResponse } from "../models/models_1";
import { de_DescribeIntegrationsCommand, se_DescribeIntegrationsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
export interface DescribeIntegrationsCommandOutput extends DescribeIntegrationsResponse, __MetadataBearer {}

/**
 * <p>Describe one or more zero-ETL integrations with Amazon Redshift.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeIntegrationsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeIntegrationsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeIntegrationsMessage
 *   IntegrationIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIntegrationsResponse
 * //   Marker: "STRING_VALUE",
 * //   Integrations: [ // IntegrationList
 * //     { // Integration
 * //       SourceArn: "STRING_VALUE",
 * //       TargetArn: "STRING_VALUE",
 * //       IntegrationName: "STRING_VALUE",
 * //       IntegrationArn: "STRING_VALUE",
 * //       KMSKeyId: "STRING_VALUE",
 * //       AdditionalEncryptionContext: { // EncryptionContextMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Status: "creating" || "active" || "modifying" || "failed" || "deleting" || "syncing" || "needs_attention",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       Errors: [ // IntegrationErrorList
 * //         { // IntegrationError
 * //           ErrorCode: "STRING_VALUE", // required
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DataFilter: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The specified integration could not be found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe a zero-ETL integration
 * ```javascript
 * // The following example retrieves information about a zero-ETL integration with Amazon Redshift.
 * const input = {
 *   IntegrationIdentifier: "5b9f3d79-7392-4a3e-896c-58eaa1b53231"
 * };
 * const command = new DescribeIntegrationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Integrations: [
 *     {
 *       CreateTime: "2023-12-28T17:20:20.629Z",
 *       IntegrationArn: "arn:aws:rds:us-east-1:123456789012:integration:5b9f3d79-7392-4a3e-896c-58eaa1b53231",
 *       IntegrationName: "my-integration",
 *       KMSKeyId: "arn:aws:kms:us-east-1:123456789012:key/a1b2c3d4-5678-90ab-cdef-EXAMPLEaaaaa",
 *       SourceArn: "arn:aws:rds:us-east-1:123456789012:cluster:my-cluster",
 *       Status: "active",
 *       Tags:       [],
 *       TargetArn: "arn:aws:redshift-serverless:us-east-1:123456789012:namespace/62c70612-0302-4db7-8414-b5e3e049f0d8"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeIntegrationsCommand extends $Command
  .classBuilder<
    DescribeIntegrationsCommandInput,
    DescribeIntegrationsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeIntegrations", {})
  .n("RDSClient", "DescribeIntegrationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIntegrationsCommand)
  .de(de_DescribeIntegrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIntegrationsMessage;
      output: DescribeIntegrationsResponse;
    };
    sdk: {
      input: DescribeIntegrationsCommandInput;
      output: DescribeIntegrationsCommandOutput;
    };
  };
}
