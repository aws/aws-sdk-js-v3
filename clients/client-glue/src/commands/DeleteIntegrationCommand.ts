// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteIntegrationRequest, DeleteIntegrationResponse } from "../models/models_1";
import { de_DeleteIntegrationCommand, se_DeleteIntegrationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationCommand}.
 */
export interface DeleteIntegrationCommandInput extends DeleteIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationCommand}.
 */
export interface DeleteIntegrationCommandOutput extends DeleteIntegrationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified Zero-ETL integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteIntegrationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteIntegrationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteIntegrationRequest
 *   IntegrationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIntegrationResponse
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
 * @param DeleteIntegrationCommandInput - {@link DeleteIntegrationCommandInput}
 * @returns {@link DeleteIntegrationCommandOutput}
 * @see {@link DeleteIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidIntegrationStateFault} (client fault)
 *  <p>The integration is in an invalid state.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An error that indicates your data is in an invalid state.</p>
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
export class DeleteIntegrationCommand extends $Command
  .classBuilder<
    DeleteIntegrationCommandInput,
    DeleteIntegrationCommandOutput,
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
  .s("AWSGlue", "DeleteIntegration", {})
  .n("GlueClient", "DeleteIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIntegrationCommand)
  .de(de_DeleteIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationRequest;
      output: DeleteIntegrationResponse;
    };
    sdk: {
      input: DeleteIntegrationCommandInput;
      output: DeleteIntegrationCommandOutput;
    };
  };
}
