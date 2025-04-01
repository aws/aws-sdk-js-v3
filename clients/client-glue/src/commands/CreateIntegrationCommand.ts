// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateIntegrationRequest, CreateIntegrationResponse } from "../models/models_1";
import { de_CreateIntegrationCommand, se_CreateIntegrationCommand } from "../protocols/Aws_json1_1";

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
export interface CreateIntegrationCommandInput extends CreateIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandOutput extends CreateIntegrationResponse, __MetadataBearer {}

/**
 * <p>Creates a Zero-ETL integration in the caller's account between two resources with Amazon Resource Names (ARNs): the <code>SourceArn</code> and <code>TargetArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateIntegrationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateIntegrationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateIntegrationRequest
 *   IntegrationName: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE", // required
 *   TargetArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DataFilter: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   AdditionalEncryptionContext: { // IntegrationAdditionalEncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [ // IntegrationTagsList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationResponse
 * //   SourceArn: "STRING_VALUE", // required
 * //   TargetArn: "STRING_VALUE", // required
 * //   IntegrationName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   IntegrationArn: "STRING_VALUE", // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   AdditionalEncryptionContext: { // IntegrationAdditionalEncryptionContextMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: [ // IntegrationTagsList
 * //     { // Tag
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Status: "CREATING" || "ACTIVE" || "MODIFYING" || "FAILED" || "DELETING" || "SYNCING" || "NEEDS_ATTENTION", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   Errors: [ // IntegrationErrorList
 * //     { // IntegrationError
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   DataFilter: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *  <p>The requested operation conflicts with another operation.</p>
 *
 * @throws {@link IntegrationQuotaExceededFault} (client fault)
 *  <p>The data processed through your integration exceeded your quota.</p>
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
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>The KMS key specified is not accessible.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
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
export class CreateIntegrationCommand extends $Command
  .classBuilder<
    CreateIntegrationCommandInput,
    CreateIntegrationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "CreateIntegration", {})
  .n("GlueClient", "CreateIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_CreateIntegrationCommand)
  .de(de_CreateIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationRequest;
      output: CreateIntegrationResponse;
    };
    sdk: {
      input: CreateIntegrationCommandInput;
      output: CreateIntegrationCommandOutput;
    };
  };
}
