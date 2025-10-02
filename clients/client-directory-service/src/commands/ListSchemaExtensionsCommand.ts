// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSchemaExtensionsRequest, ListSchemaExtensionsResult } from "../models/models_0";
import { de_ListSchemaExtensionsCommand, se_ListSchemaExtensionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchemaExtensionsCommand}.
 */
export interface ListSchemaExtensionsCommandInput extends ListSchemaExtensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSchemaExtensionsCommand}.
 */
export interface ListSchemaExtensionsCommandOutput extends ListSchemaExtensionsResult, __MetadataBearer {}

/**
 * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListSchemaExtensionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListSchemaExtensionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListSchemaExtensionsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSchemaExtensionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemaExtensionsResult
 * //   SchemaExtensionsInfo: [ // SchemaExtensionsInfo
 * //     { // SchemaExtensionInfo
 * //       DirectoryId: "STRING_VALUE",
 * //       SchemaExtensionId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       SchemaExtensionStatus: "Initializing" || "CreatingSnapshot" || "UpdatingSchema" || "Replicating" || "CancelInProgress" || "RollbackInProgress" || "Cancelled" || "Failed" || "Completed",
 * //       SchemaExtensionStatusReason: "STRING_VALUE",
 * //       StartDateTime: new Date("TIMESTAMP"),
 * //       EndDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchemaExtensionsCommandInput - {@link ListSchemaExtensionsCommandInput}
 * @returns {@link ListSchemaExtensionsCommandOutput}
 * @see {@link ListSchemaExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaExtensionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To list schema extensions
 * ```javascript
 * // The following example lists all schema extensions applied to a specified Microsoft AD Directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Limit: 0
 * };
 * const command = new ListSchemaExtensionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SchemaExtensionsInfo: [
 *     {
 *       Description: "example text",
 *       DirectoryId: "d-92654abfed",
 *       EndDateTime: 1.481586088301E9,
 *       SchemaExtensionId: "e-926731d2a0",
 *       SchemaExtensionStatus: "Cancelled",
 *       SchemaExtensionStatusReason: "Cancellation is complete. No schema updates were applied to your directory.",
 *       StartDateTime: 1.481584463548E9
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSchemaExtensionsCommand extends $Command
  .classBuilder<
    ListSchemaExtensionsCommandInput,
    ListSchemaExtensionsCommandOutput,
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
  .s("DirectoryService_20150416", "ListSchemaExtensions", {})
  .n("DirectoryServiceClient", "ListSchemaExtensionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSchemaExtensionsCommand)
  .de(de_ListSchemaExtensionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchemaExtensionsRequest;
      output: ListSchemaExtensionsResult;
    };
    sdk: {
      input: ListSchemaExtensionsCommandInput;
      output: ListSchemaExtensionsCommandOutput;
    };
  };
}
