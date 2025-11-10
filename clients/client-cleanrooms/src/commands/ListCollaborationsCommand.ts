// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCollaborationsInput, ListCollaborationsOutput } from "../models/models_0";
import { ListCollaborations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationsCommand}.
 */
export interface ListCollaborationsCommandInput extends ListCollaborationsInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationsCommand}.
 */
export interface ListCollaborationsCommandOutput extends ListCollaborationsOutput, __MetadataBearer {}

/**
 * <p>Lists collaborations the caller owns, is active in, or has been invited to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   memberStatus: "STRING_VALUE",
 * };
 * const command = new ListCollaborationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   collaborationList: [ // CollaborationSummaryList // required
 * //     { // CollaborationSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       creatorDisplayName: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       memberStatus: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE",
 * //       membershipArn: "STRING_VALUE",
 * //       analyticsEngine: "SPARK" || "CLEAN_ROOMS_SQL",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationsCommandInput - {@link ListCollaborationsCommandInput}
 * @returns {@link ListCollaborationsCommandOutput}
 * @see {@link ListCollaborationsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListCollaborationsCommand extends $Command
  .classBuilder<
    ListCollaborationsCommandInput,
    ListCollaborationsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListCollaborations", {})
  .n("CleanRoomsClient", "ListCollaborationsCommand")
  .sc(ListCollaborations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationsInput;
      output: ListCollaborationsOutput;
    };
    sdk: {
      input: ListCollaborationsCommandInput;
      output: ListCollaborationsCommandOutput;
    };
  };
}
