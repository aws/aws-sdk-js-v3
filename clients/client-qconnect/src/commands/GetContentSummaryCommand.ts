// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContentSummaryRequest, GetContentSummaryResponse } from "../models/models_0";
import { GetContentSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContentSummaryCommand}.
 */
export interface GetContentSummaryCommandInput extends GetContentSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetContentSummaryCommand}.
 */
export interface GetContentSummaryCommandOutput extends GetContentSummaryResponse, __MetadataBearer {}

/**
 * Retrieves summary information about the content.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetContentSummaryCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetContentSummaryCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // GetContentSummaryRequest
 *   contentId: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetContentSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetContentSummaryResponse
 * //   contentSummary: { // ContentSummary
 * //     contentArn: "STRING_VALUE", // required
 * //     contentId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     revisionId: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     metadata: { // ContentMetadata // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContentSummaryCommandInput - {@link GetContentSummaryCommandInput}
 * @returns {@link GetContentSummaryCommandOutput}
 * @see {@link GetContentSummaryCommandInput} for command's `input` shape.
 * @see {@link GetContentSummaryCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class GetContentSummaryCommand extends command<GetContentSummaryCommandInput, GetContentSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetContentSummary",
  GetContentSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContentSummaryRequest;
      output: GetContentSummaryResponse;
    };
    sdk: {
      input: GetContentSummaryCommandInput;
      output: GetContentSummaryCommandOutput;
    };
  };
}
