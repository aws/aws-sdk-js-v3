// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStorageProfilesRequest, ListStorageProfilesResponse } from "../models/models_0";
import { de_ListStorageProfilesCommand, se_ListStorageProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStorageProfilesCommand}.
 */
export interface ListStorageProfilesCommandInput extends ListStorageProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListStorageProfilesCommand}.
 */
export interface ListStorageProfilesCommandOutput extends ListStorageProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists storage profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListStorageProfilesCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListStorageProfilesCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // ListStorageProfilesRequest
 *   farmId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStorageProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListStorageProfilesResponse
 * //   storageProfiles: [ // StorageProfileSummaries // required
 * //     { // StorageProfileSummary
 * //       storageProfileId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       osFamily: "WINDOWS" || "LINUX" || "MACOS", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStorageProfilesCommandInput - {@link ListStorageProfilesCommandInput}
 * @returns {@link ListStorageProfilesCommandOutput}
 * @see {@link ListStorageProfilesCommandInput} for command's `input` shape.
 * @see {@link ListStorageProfilesCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class ListStorageProfilesCommand extends $Command
  .classBuilder<
    ListStorageProfilesCommandInput,
    ListStorageProfilesCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListStorageProfiles", {})
  .n("DeadlineClient", "ListStorageProfilesCommand")
  .f(void 0, void 0)
  .ser(se_ListStorageProfilesCommand)
  .de(de_ListStorageProfilesCommand)
  .build() {}
