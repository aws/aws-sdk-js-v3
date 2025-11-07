// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/models_0";
import { DescribeSnapshots } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResult, __MetadataBearer {}

/**
 * <p>Obtains information about the directory snapshots that belong to this account.</p>
 *          <p>This operation supports pagination with the use of the <i>NextToken</i> request and
 *          response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i>
 *          member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to
 *          retrieve the next set of items.</p>
 *          <p>You can also specify a maximum number of return results with the <i>Limit</i>
 *          parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSnapshotsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeSnapshotsRequest
 *   DirectoryId: "STRING_VALUE",
 *   SnapshotIds: [ // SnapshotIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotsResult
 * //   Snapshots: [ // Snapshots
 * //     { // Snapshot
 * //       DirectoryId: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       Type: "Auto" || "Manual",
 * //       Name: "STRING_VALUE",
 * //       Status: "Creating" || "Completed" || "Failed",
 * //       StartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotsCommandInput - {@link DescribeSnapshotsCommandInput}
 * @returns {@link DescribeSnapshotsCommandOutput}
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
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
 * @example To describe snapshots
 * ```javascript
 * // The following example obtains information about a specified directory snapshot.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Limit: 0,
 *   SnapshotIds: [
 *     "s-9267f6da4e"
 *   ]
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Snapshots: [
 *     {
 *       DirectoryId: "d-92673c8a8f",
 *       SnapshotId: "s-9267f6da4e",
 *       StartTime: 1.481289211615E9,
 *       Status: "Completed",
 *       Type: "Auto"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSnapshotsCommand extends $Command
  .classBuilder<
    DescribeSnapshotsCommandInput,
    DescribeSnapshotsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeSnapshots", {})
  .n("DirectoryServiceClient", "DescribeSnapshotsCommand")
  .sc(DescribeSnapshots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotsRequest;
      output: DescribeSnapshotsResult;
    };
    sdk: {
      input: DescribeSnapshotsCommandInput;
      output: DescribeSnapshotsCommandOutput;
    };
  };
}
