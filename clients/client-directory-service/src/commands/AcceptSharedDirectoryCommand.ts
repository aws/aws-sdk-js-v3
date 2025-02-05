// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptSharedDirectoryRequest,
  AcceptSharedDirectoryResult,
  AcceptSharedDirectoryResultFilterSensitiveLog,
} from "../models/models_0";
import { de_AcceptSharedDirectoryCommand, se_AcceptSharedDirectoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptSharedDirectoryCommand}.
 */
export interface AcceptSharedDirectoryCommandInput extends AcceptSharedDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link AcceptSharedDirectoryCommand}.
 */
export interface AcceptSharedDirectoryCommandOutput extends AcceptSharedDirectoryResult, __MetadataBearer {}

/**
 * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AcceptSharedDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AcceptSharedDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectoryServiceClient(config);
 * const input = { // AcceptSharedDirectoryRequest
 *   SharedDirectoryId: "STRING_VALUE", // required
 * };
 * const command = new AcceptSharedDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // AcceptSharedDirectoryResult
 * //   SharedDirectory: { // SharedDirectory
 * //     OwnerAccountId: "STRING_VALUE",
 * //     OwnerDirectoryId: "STRING_VALUE",
 * //     ShareMethod: "ORGANIZATIONS" || "HANDSHAKE",
 * //     SharedAccountId: "STRING_VALUE",
 * //     SharedDirectoryId: "STRING_VALUE",
 * //     ShareStatus: "Shared" || "PendingAcceptance" || "Rejected" || "Rejecting" || "RejectFailed" || "Sharing" || "ShareFailed" || "Deleted" || "Deleting",
 * //     ShareNotes: "STRING_VALUE",
 * //     CreatedDateTime: new Date("TIMESTAMP"),
 * //     LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptSharedDirectoryCommandInput - {@link AcceptSharedDirectoryCommandInput}
 * @returns {@link AcceptSharedDirectoryCommandOutput}
 * @see {@link AcceptSharedDirectoryCommandInput} for command's `input` shape.
 * @see {@link AcceptSharedDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryAlreadySharedException} (client fault)
 *  <p>The specified directory has already been shared with this Amazon Web Services account.</p>
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
 * @public
 */
export class AcceptSharedDirectoryCommand extends $Command
  .classBuilder<
    AcceptSharedDirectoryCommandInput,
    AcceptSharedDirectoryCommandOutput,
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
  .s("DirectoryService_20150416", "AcceptSharedDirectory", {})
  .n("DirectoryServiceClient", "AcceptSharedDirectoryCommand")
  .f(void 0, AcceptSharedDirectoryResultFilterSensitiveLog)
  .ser(se_AcceptSharedDirectoryCommand)
  .de(de_AcceptSharedDirectoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptSharedDirectoryRequest;
      output: AcceptSharedDirectoryResult;
    };
    sdk: {
      input: AcceptSharedDirectoryCommandInput;
      output: AcceptSharedDirectoryCommandOutput;
    };
  };
}
