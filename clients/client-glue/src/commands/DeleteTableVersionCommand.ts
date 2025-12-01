// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteTableVersionRequest, DeleteTableVersionResponse } from "../models/models_1";
import { DeleteTableVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTableVersionCommand}.
 */
export interface DeleteTableVersionCommandInput extends DeleteTableVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableVersionCommand}.
 */
export interface DeleteTableVersionCommandOutput extends DeleteTableVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified version of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteTableVersionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTableVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableVersionCommandInput - {@link DeleteTableVersionCommandInput}
 * @returns {@link DeleteTableVersionCommandOutput}
 * @see {@link DeleteTableVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteTableVersionCommand extends $Command
  .classBuilder<
    DeleteTableVersionCommandInput,
    DeleteTableVersionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteTableVersion", {})
  .n("GlueClient", "DeleteTableVersionCommand")
  .sc(DeleteTableVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableVersionCommandInput;
      output: DeleteTableVersionCommandOutput;
    };
  };
}
