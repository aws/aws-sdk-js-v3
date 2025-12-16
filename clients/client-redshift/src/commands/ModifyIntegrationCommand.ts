// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Integration, ModifyIntegrationMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyIntegration$ } from "../schemas/schemas_0";

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
 * <p>Modifies a zero-ETL integration or S3 event integration with Amazon Redshift.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyIntegrationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyIntegrationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyIntegrationMessage
 *   IntegrationArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   IntegrationName: "STRING_VALUE",
 * };
 * const command = new ModifyIntegrationCommand(input);
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
 * @param ModifyIntegrationCommandInput - {@link ModifyIntegrationCommandInput}
 * @returns {@link ModifyIntegrationCommandOutput}
 * @see {@link ModifyIntegrationCommandInput} for command's `input` shape.
 * @see {@link ModifyIntegrationCommandOutput} for command's `response` shape.
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
 * @throws {@link IntegrationConflictStateFault} (client fault)
 *  <p>The integration is in an invalid state and can't perform the requested operation.</p>
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
export class ModifyIntegrationCommand extends $Command
  .classBuilder<
    ModifyIntegrationCommandInput,
    ModifyIntegrationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifyIntegration", {})
  .n("RedshiftClient", "ModifyIntegrationCommand")
  .sc(ModifyIntegration$)
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
