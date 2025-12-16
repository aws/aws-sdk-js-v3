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
import type { DescribeSharedDirectoriesRequest, DescribeSharedDirectoriesResult } from "../models/models_0";
import { DescribeSharedDirectories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSharedDirectoriesCommand}.
 */
export interface DescribeSharedDirectoriesCommandInput extends DescribeSharedDirectoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSharedDirectoriesCommand}.
 */
export interface DescribeSharedDirectoriesCommandOutput extends DescribeSharedDirectoriesResult, __MetadataBearer {}

/**
 * <p>Returns the shared directories in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSharedDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSharedDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeSharedDirectoriesRequest
 *   OwnerDirectoryId: "STRING_VALUE", // required
 *   SharedDirectoryIds: [ // DirectoryIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeSharedDirectoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSharedDirectoriesResult
 * //   SharedDirectories: [ // SharedDirectories
 * //     { // SharedDirectory
 * //       OwnerAccountId: "STRING_VALUE",
 * //       OwnerDirectoryId: "STRING_VALUE",
 * //       ShareMethod: "ORGANIZATIONS" || "HANDSHAKE",
 * //       SharedAccountId: "STRING_VALUE",
 * //       SharedDirectoryId: "STRING_VALUE",
 * //       ShareStatus: "Shared" || "PendingAcceptance" || "Rejected" || "Rejecting" || "RejectFailed" || "Sharing" || "ShareFailed" || "Deleted" || "Deleting",
 * //       ShareNotes: "STRING_VALUE",
 * //       CreatedDateTime: new Date("TIMESTAMP"),
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSharedDirectoriesCommandInput - {@link DescribeSharedDirectoriesCommandInput}
 * @returns {@link DescribeSharedDirectoriesCommandOutput}
 * @see {@link DescribeSharedDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeSharedDirectoriesCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DescribeSharedDirectoriesCommand extends $Command
  .classBuilder<
    DescribeSharedDirectoriesCommandInput,
    DescribeSharedDirectoriesCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeSharedDirectories", {})
  .n("DirectoryServiceClient", "DescribeSharedDirectoriesCommand")
  .sc(DescribeSharedDirectories$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSharedDirectoriesRequest;
      output: DescribeSharedDirectoriesResult;
    };
    sdk: {
      input: DescribeSharedDirectoriesCommandInput;
      output: DescribeSharedDirectoriesCommandOutput;
    };
  };
}
