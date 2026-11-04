// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAnalysisTemplatesInput, ListAnalysisTemplatesOutput } from "../models/models_0";
import { ListAnalysisTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAnalysisTemplatesCommand}.
 */
export interface ListAnalysisTemplatesCommandInput extends ListAnalysisTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListAnalysisTemplatesCommand}.
 */
export interface ListAnalysisTemplatesCommandOutput extends ListAnalysisTemplatesOutput, __MetadataBearer {}

/**
 * Lists analysis templates that the caller owns.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListAnalysisTemplatesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListAnalysisTemplatesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListAnalysisTemplatesInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAnalysisTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalysisTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   analysisTemplateSummaries: [ // AnalysisTemplateSummaryList // required
 * //     { // AnalysisTemplateSummary
 * //       arn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       isSyntheticData: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAnalysisTemplatesCommandInput - {@link ListAnalysisTemplatesCommandInput}
 * @returns {@link ListAnalysisTemplatesCommandOutput}
 * @see {@link ListAnalysisTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListAnalysisTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class ListAnalysisTemplatesCommand extends command<ListAnalysisTemplatesCommandInput, ListAnalysisTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListAnalysisTemplates",
  ListAnalysisTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnalysisTemplatesInput;
      output: ListAnalysisTemplatesOutput;
    };
    sdk: {
      input: ListAnalysisTemplatesCommandInput;
      output: ListAnalysisTemplatesCommandOutput;
    };
  };
}
