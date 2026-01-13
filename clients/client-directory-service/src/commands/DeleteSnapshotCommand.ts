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
import type { DeleteSnapshotRequest, DeleteSnapshotResult } from "../models/models_0";
import { DeleteSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandInput extends DeleteSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandOutput extends DeleteSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a directory snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeleteSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapshotResult
 * //   SnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSnapshotCommandInput - {@link DeleteSnapshotCommandInput}
 * @returns {@link DeleteSnapshotCommandOutput}
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
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
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To delete a snapshot
 * ```javascript
 * // The following example deletes a directory snapshot.
 * const input = {
 *   SnapshotId: "s-9267f8d3f0"
 * };
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SnapshotId: "s-9267f8d3f0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSnapshotCommand extends $Command
  .classBuilder<
    DeleteSnapshotCommandInput,
    DeleteSnapshotCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DeleteSnapshot", {})
  .n("DirectoryServiceClient", "DeleteSnapshotCommand")
  .sc(DeleteSnapshot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotRequest;
      output: DeleteSnapshotResult;
    };
    sdk: {
      input: DeleteSnapshotCommandInput;
      output: DeleteSnapshotCommandOutput;
    };
  };
}
