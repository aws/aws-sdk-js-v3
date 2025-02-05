// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIntegrationMessage, Integration } from "../models/models_0";
import { de_CreateIntegrationCommand, se_CreateIntegrationCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandInput extends CreateIntegrationMessage {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandOutput extends Integration, __MetadataBearer {}

/**
 * <p>Creates a zero-ETL integration with Amazon Redshift.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateIntegrationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateIntegrationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // CreateIntegrationMessage
 *   SourceArn: "STRING_VALUE", // required
 *   TargetArn: "STRING_VALUE", // required
 *   IntegrationName: "STRING_VALUE", // required
 *   KMSKeyId: "STRING_VALUE",
 *   AdditionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DataFilter: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // Integration
 * //   SourceArn: "STRING_VALUE",
 * //   TargetArn: "STRING_VALUE",
 * //   IntegrationName: "STRING_VALUE",
 * //   IntegrationArn: "STRING_VALUE",
 * //   KMSKeyId: "STRING_VALUE",
 * //   AdditionalEncryptionContext: { // EncryptionContextMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Status: "creating" || "active" || "modifying" || "failed" || "deleting" || "syncing" || "needs_attention",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   Errors: [ // IntegrationErrorList
 * //     { // IntegrationError
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   DataFilter: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link IntegrationAlreadyExistsFault} (client fault)
 *  <p>The integration you are trying to create already exists.</p>
 *
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *  <p>A conflicting conditional operation is currently in progress against this resource.
 *             Typically occurs when there are multiple requests being made to the same resource at the same time,
 *             and these requests conflict with each other.</p>
 *
 * @throws {@link IntegrationQuotaExceededFault} (client fault)
 *  <p>You can't crate any more zero-ETL integrations because the quota has been reached.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To create a zero-ETL integration
 * ```javascript
 * // The following example creates a zero-ETL integration with Amazon Redshift.
 * const input = {
 *   "IntegrationName": "my-integration",
 *   "SourceArn": "arn:aws:rds:us-east-1:123456789012:cluster:my-cluster",
 *   "TargetArn": "arn:aws:redshift-serverless:us-east-1:123456789012:namespace/62c70612-0302-4db7-8414-b5e3e049f0d8"
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreateTime": "2023-12-28T17:20:20.629Z",
 *   "IntegrationArn": "arn:aws:rds:us-east-1:123456789012:integration:5b9f3d79-7392-4a3e-896c-58eaa1b53231",
 *   "IntegrationName": "my-integration",
 *   "KMSKeyId": "arn:aws:kms:us-east-1:123456789012:key/a1b2c3d4-5678-90ab-cdef-EXAMPLEaaaaa",
 *   "SourceArn": "arn:aws:rds:us-east-1:123456789012:cluster:my-cluster",
 *   "Status": "creating",
 *   "Tags": [],
 *   "TargetArn": "arn:aws:redshift-serverless:us-east-1:123456789012:namespace/62c70612-0302-4db7-8414-b5e3e049f0d8"
 * }
 * *\/
 * // example id: to-create-a-zero-etl-integration-1679688377231
 * ```
 *
 */
export class CreateIntegrationCommand extends $Command
  .classBuilder<
    CreateIntegrationCommandInput,
    CreateIntegrationCommandOutput,
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
  .s("AmazonRDSv19", "CreateIntegration", {})
  .n("RDSClient", "CreateIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_CreateIntegrationCommand)
  .de(de_CreateIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationMessage;
      output: Integration;
    };
    sdk: {
      input: CreateIntegrationCommandInput;
      output: CreateIntegrationCommandOutput;
    };
  };
}
