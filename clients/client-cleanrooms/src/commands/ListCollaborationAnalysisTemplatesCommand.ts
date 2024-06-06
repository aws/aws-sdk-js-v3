// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCollaborationAnalysisTemplatesInput, ListCollaborationAnalysisTemplatesOutput } from "../models/models_0";
import {
  de_ListCollaborationAnalysisTemplatesCommand,
  se_ListCollaborationAnalysisTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationAnalysisTemplatesCommand}.
 */
export interface ListCollaborationAnalysisTemplatesCommandInput extends ListCollaborationAnalysisTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationAnalysisTemplatesCommand}.
 */
export interface ListCollaborationAnalysisTemplatesCommandOutput
  extends ListCollaborationAnalysisTemplatesOutput,
    __MetadataBearer {}

/**
 * <p>Lists analysis templates within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationAnalysisTemplatesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationAnalysisTemplatesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationAnalysisTemplatesInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollaborationAnalysisTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationAnalysisTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   collaborationAnalysisTemplateSummaries: [ // CollaborationAnalysisTemplateSummaryList // required
 * //     { // CollaborationAnalysisTemplateSummary
 * //       arn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationAnalysisTemplatesCommandInput - {@link ListCollaborationAnalysisTemplatesCommandInput}
 * @returns {@link ListCollaborationAnalysisTemplatesCommandOutput}
 * @see {@link ListCollaborationAnalysisTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationAnalysisTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
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
 * @public
 */
export class ListCollaborationAnalysisTemplatesCommand extends $Command
  .classBuilder<
    ListCollaborationAnalysisTemplatesCommandInput,
    ListCollaborationAnalysisTemplatesCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListCollaborationAnalysisTemplates", {})
  .n("CleanRoomsClient", "ListCollaborationAnalysisTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListCollaborationAnalysisTemplatesCommand)
  .de(de_ListCollaborationAnalysisTemplatesCommand)
  .build() {}
