// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSchemaExtensionsRequest, ListSchemaExtensionsResult } from "../models/models_0";
import { ListSchemaExtensions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all schema extensions applied to a Microsoft AD Directory.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
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
export class ListSchemaExtensionsCommand extends command<ListSchemaExtensionsCommandInput, ListSchemaExtensionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSchemaExtensions",
  ListSchemaExtensions$
) {
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
