// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateQuickResponseRequest, CreateQuickResponseResponse } from "../models/models_1";
import { CreateQuickResponse$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateQuickResponseCommand}.
 */
export interface CreateQuickResponseCommandInput extends CreateQuickResponseRequest {}
/**
 * @public
 *
 * The output of {@link CreateQuickResponseCommand}.
 */
export interface CreateQuickResponseCommandOutput extends CreateQuickResponseResponse, __MetadataBearer {}

/**
 * Creates an Amazon Q in Connect quick response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateQuickResponseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateQuickResponseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateQuickResponseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   content: { // QuickResponseDataProvider Union: only one key present
 *     content: "STRING_VALUE",
 *   },
 *   contentType: "STRING_VALUE",
 *   groupingConfiguration: { // GroupingConfiguration
 *     criteria: "STRING_VALUE",
 *     values: [ // GroupingValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   description: "STRING_VALUE",
 *   shortcutKey: "STRING_VALUE",
 *   isActive: true || false,
 *   channels: [ // Channels
 *     "STRING_VALUE",
 *   ],
 *   language: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQuickResponseCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuickResponseResponse
 * //   quickResponse: { // QuickResponseData
 * //     quickResponseArn: "STRING_VALUE", // required
 * //     quickResponseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     contents: { // QuickResponseContents
 * //       plainText: { // QuickResponseContentProvider Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //       markdown: {//  Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //     },
 * //     description: "STRING_VALUE",
 * //     groupingConfiguration: { // GroupingConfiguration
 * //       criteria: "STRING_VALUE",
 * //       values: [ // GroupingValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     shortcutKey: "STRING_VALUE",
 * //     lastModifiedBy: "STRING_VALUE",
 * //     isActive: true || false,
 * //     channels: [ // Channels
 * //       "STRING_VALUE",
 * //     ],
 * //     language: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateQuickResponseCommandInput - {@link CreateQuickResponseCommandInput}
 * @returns {@link CreateQuickResponseCommandOutput}
 * @see {@link CreateQuickResponseCommandInput} for command's `input` shape.
 * @see {@link CreateQuickResponseCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
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
export class CreateQuickResponseCommand extends command<CreateQuickResponseCommandInput, CreateQuickResponseCommandOutput>(
  _ep0,
  _mw0,
  "CreateQuickResponse",
  CreateQuickResponse$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQuickResponseRequest;
      output: CreateQuickResponseResponse;
    };
    sdk: {
      input: CreateQuickResponseCommandInput;
      output: CreateQuickResponseCommandOutput;
    };
  };
}
