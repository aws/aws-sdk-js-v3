// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshotRequest, CreateSnapshotResult } from "../models/models_0";
import { CreateSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p>
 *          <note>
 *             <p>You cannot take snapshots of AD Connector directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateSnapshotRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotResult
 * //   SnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapshotLimitExceededException} (client fault)
 *  <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To create a snapshot of a directory
 * ```javascript
 * // The following example creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Name: "ad.example.com"
 * };
 * const command = new CreateSnapshotCommand(input);
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
export class CreateSnapshotCommand extends $Command
  .classBuilder<
    CreateSnapshotCommandInput,
    CreateSnapshotCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "CreateSnapshot", {})
  .n("DirectoryServiceClient", "CreateSnapshotCommand")
  .sc(CreateSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotRequest;
      output: CreateSnapshotResult;
    };
    sdk: {
      input: CreateSnapshotCommandInput;
      output: CreateSnapshotCommandOutput;
    };
  };
}
