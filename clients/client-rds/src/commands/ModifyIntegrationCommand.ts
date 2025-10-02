// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Integration } from "../models/models_0";
import { ModifyIntegrationMessage } from "../models/models_1";
import { de_ModifyIntegrationCommand, se_ModifyIntegrationCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIntegrationCommand}.
 */
export interface ModifyIntegrationCommandInput extends ModifyIntegrationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyIntegrationCommand}.
 */
export interface ModifyIntegrationCommandOutput extends Integration, __MetadataBearer {}

/**
 * <p>Modifies a zero-ETL integration with Amazon Redshift.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyIntegrationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyIntegrationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyIntegrationMessage
 *   IntegrationIdentifier: "STRING_VALUE", // required
 *   IntegrationName: "STRING_VALUE",
 *   DataFilter: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new ModifyIntegrationCommand(input);
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
 * //   DataFilter: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   Errors: [ // IntegrationErrorList
 * //     { // IntegrationError
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyIntegrationCommandInput - {@link ModifyIntegrationCommandInput}
 * @returns {@link ModifyIntegrationCommandOutput}
 * @see {@link ModifyIntegrationCommandInput} for command's `input` shape.
 * @see {@link ModifyIntegrationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *  <p>A conflicting conditional operation is currently in progress against this resource.
 *             Typically occurs when there are multiple requests being made to the same resource at the same time,
 *             and these requests conflict with each other.</p>
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The specified integration could not be found.</p>
 *
 * @throws {@link InvalidIntegrationStateFault} (client fault)
 *  <p>The integration is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To modify a zero-ETL integration
 * ```javascript
 * // The following example modifies the name of an existing zero-ETL integration.
 * const input = {
 *   IntegrationIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   IntegrationName: "my-renamed-integration"
 * };
 * const command = new ModifyIntegrationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreateTime: "2023-12-28T17:20:20.629Z",
 *   DataFilter: "include: *.*",
 *   IntegrationArn: "arn:aws:rds:us-east-1:123456789012:integration:5b9f3d79-7392-4a3e-896c-58eaa1b53231",
 *   IntegrationName: "my-renamed-integration",
 *   KMSKeyId: "arn:aws:kms:us-east-1:123456789012:key/a1b2c3d4-5678-90ab-cdef-EXAMPLEaaaaa",
 *   SourceArn: "arn:aws:rds:us-east-1:123456789012:cluster:my-cluster",
 *   Status: "active",
 *   Tags:   [],
 *   TargetArn: "arn:aws:redshift-serverless:us-east-1:123456789012:namespace/62c70612-0302-4db7-8414-b5e3e049f0d8"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyIntegrationCommand extends $Command
  .classBuilder<
    ModifyIntegrationCommandInput,
    ModifyIntegrationCommandOutput,
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
  .s("AmazonRDSv19", "ModifyIntegration", {})
  .n("RDSClient", "ModifyIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIntegrationCommand)
  .de(de_ModifyIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIntegrationMessage;
      output: Integration;
    };
    sdk: {
      input: ModifyIntegrationCommandInput;
      output: ModifyIntegrationCommandOutput;
    };
  };
}
