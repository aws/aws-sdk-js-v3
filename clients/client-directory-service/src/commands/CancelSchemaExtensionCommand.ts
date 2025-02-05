// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSchemaExtensionRequest, CancelSchemaExtensionResult } from "../models/models_0";
import { de_CancelSchemaExtensionCommand, se_CancelSchemaExtensionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSchemaExtensionCommand}.
 */
export interface CancelSchemaExtensionCommandInput extends CancelSchemaExtensionRequest {}
/**
 * @public
 *
 * The output of {@link CancelSchemaExtensionCommand}.
 */
export interface CancelSchemaExtensionCommandOutput extends CancelSchemaExtensionResult, __MetadataBearer {}

/**
 * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema
 *       extension has started replicating to all domain controllers, the task can no longer be
 *       canceled. A schema extension can be canceled during any of the following states;
 *         <code>Initializing</code>, <code>CreatingSnapshot</code>, and
 *       <code>UpdatingSchema</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CancelSchemaExtensionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CancelSchemaExtensionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectoryServiceClient(config);
 * const input = { // CancelSchemaExtensionRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   SchemaExtensionId: "STRING_VALUE", // required
 * };
 * const command = new CancelSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelSchemaExtensionCommandInput - {@link CancelSchemaExtensionCommandInput}
 * @returns {@link CancelSchemaExtensionCommandOutput}
 * @see {@link CancelSchemaExtensionCommandInput} for command's `input` shape.
 * @see {@link CancelSchemaExtensionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 * @public
 */
export class CancelSchemaExtensionCommand extends $Command
  .classBuilder<
    CancelSchemaExtensionCommandInput,
    CancelSchemaExtensionCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "CancelSchemaExtension", {})
  .n("DirectoryServiceClient", "CancelSchemaExtensionCommand")
  .f(void 0, void 0)
  .ser(se_CancelSchemaExtensionCommand)
  .de(de_CancelSchemaExtensionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSchemaExtensionRequest;
      output: {};
    };
    sdk: {
      input: CancelSchemaExtensionCommandInput;
      output: CancelSchemaExtensionCommandOutput;
    };
  };
}
