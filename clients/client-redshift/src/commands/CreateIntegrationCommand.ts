// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateIntegrationMessage, Integration } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateIntegration$ } from "../schemas/schemas_0";

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
 * <p>Creates a zero-ETL integration or S3 event integration with Amazon Redshift.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateIntegrationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateIntegrationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateIntegrationMessage
 *   SourceArn: "STRING_VALUE", // required
 *   TargetArn: "STRING_VALUE", // required
 *   IntegrationName: "STRING_VALUE", // required
 *   KMSKeyId: "STRING_VALUE",
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AdditionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // Integration
 * //   IntegrationArn: "STRING_VALUE",
 * //   IntegrationName: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   TargetArn: "STRING_VALUE",
 * //   Status: "creating" || "active" || "modifying" || "failed" || "deleting" || "syncing" || "needs_attention",
 * //   Errors: [ // IntegrationErrorList
 * //     { // IntegrationError
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   KMSKeyId: "STRING_VALUE",
 * //   AdditionalEncryptionContext: { // EncryptionContextMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link IntegrationAlreadyExistsFault} (client fault)
 *  <p>The integration you are trying to create already exists.</p>
 *
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *  <p>A conflicting conditional operation is currently in progress against this resource.
 *             This typically occurs when there are multiple requests being made to the same resource at the same time,
 *             and these requests conflict with each other.</p>
 *
 * @throws {@link IntegrationQuotaExceededFault} (client fault)
 *  <p>You can't create any more zero-ETL or S3 event integrations because the quota has been reached.</p>
 *
 * @throws {@link IntegrationSourceNotFoundFault} (client fault)
 *  <p>The specified integration source can't be found.</p>
 *
 * @throws {@link IntegrationTargetNotFoundFault} (client fault)
 *  <p>The specified integration target can't be found.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
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
export class CreateIntegrationCommand extends $Command
  .classBuilder<
    CreateIntegrationCommandInput,
    CreateIntegrationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateIntegration", {})
  .n("RedshiftClient", "CreateIntegrationCommand")
  .sc(CreateIntegration$)
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
