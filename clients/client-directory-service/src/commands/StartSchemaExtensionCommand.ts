// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartSchemaExtensionRequest, StartSchemaExtensionResult } from "../models/models_0";
import { StartSchemaExtension } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSchemaExtensionCommand}.
 */
export interface StartSchemaExtensionCommandInput extends StartSchemaExtensionRequest {}
/**
 * @public
 *
 * The output of {@link StartSchemaExtensionCommand}.
 */
export interface StartSchemaExtensionCommandOutput extends StartSchemaExtensionResult, __MetadataBearer {}

/**
 * <p>Applies a schema extension to a Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, StartSchemaExtensionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, StartSchemaExtensionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // StartSchemaExtensionRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   CreateSnapshotBeforeSchemaExtension: true || false, // required
 *   LdifContent: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 * };
 * const command = new StartSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * // { // StartSchemaExtensionResult
 * //   SchemaExtensionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSchemaExtensionCommandInput - {@link StartSchemaExtensionCommandInput}
 * @returns {@link StartSchemaExtensionCommandOutput}
 * @see {@link StartSchemaExtensionCommandInput} for command's `input` shape.
 * @see {@link StartSchemaExtensionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link SnapshotLimitExceededException} (client fault)
 *  <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To start a schema extension
 * ```javascript
 * // The following example applies a schema extension to a specified Microsoft AD directory.
 * const input = {
 *   CreateSnapshotBeforeSchemaExtension: true,
 *   Description: "Adds maycontain attribute to user class. Precede each line as it would be formatted in an ldif file.",
 *   DirectoryId: "d-92654abfed",
 *   LdifContent: "dn: CN=User,CN=Schema,CN=Configuration,DC=sales,DC=example,DC=com
 * changetype: modify
 * add: mayContain
 * mayContain: drink
 * -
 *
 * DN:
 * changetype: modify
 * replace: schemaupdatenow
 * schemaupdatenow: 1
 * -"
 * };
 * const command = new StartSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SchemaExtensionId: "e-926731dc50"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartSchemaExtensionCommand extends $Command
  .classBuilder<
    StartSchemaExtensionCommandInput,
    StartSchemaExtensionCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "StartSchemaExtension", {})
  .n("DirectoryServiceClient", "StartSchemaExtensionCommand")
  .sc(StartSchemaExtension)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSchemaExtensionRequest;
      output: StartSchemaExtensionResult;
    };
    sdk: {
      input: StartSchemaExtensionCommandInput;
      output: StartSchemaExtensionCommandOutput;
    };
  };
}
