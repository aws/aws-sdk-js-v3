// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRoomsRequest, ListRoomsResponse } from "../models/models_0";
import { ListRooms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRoomsCommand}.
 */
export interface ListRoomsCommandInput extends ListRoomsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoomsCommand}.
 */
export interface ListRoomsCommandOutput extends ListRoomsResponse, __MetadataBearer {}

/**
 * Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of `updateTime`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, ListRoomsCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, ListRoomsCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
 * const client = new IvschatClient(config);
 * const input = { // ListRoomsRequest
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   messageReviewHandlerUri: "STRING_VALUE",
 *   loggingConfigurationIdentifier: "STRING_VALUE",
 * };
 * const command = new ListRoomsCommand(input);
 * const response = await client.send(command);
 * // { // ListRoomsResponse
 * //   rooms: [ // RoomList // required
 * //     { // RoomSummary
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       messageReviewHandler: { // MessageReviewHandler
 * //         uri: "STRING_VALUE",
 * //         fallbackResult: "STRING_VALUE",
 * //       },
 * //       createTime: new Date("TIMESTAMP"),
 * //       updateTime: new Date("TIMESTAMP"),
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       loggingConfigurationIdentifiers: [ // LoggingConfigurationIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoomsCommandInput - {@link ListRoomsCommandInput}
 * @returns {@link ListRoomsCommandOutput}
 * @see {@link ListRoomsCommandInput} for command's `input` shape.
 * @see {@link ListRoomsCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link IvschatServiceException}
 *
 * Base exception class for all service exceptions from Ivschat service.
 *
 * @public
 */
export class ListRoomsCommand extends command<ListRoomsCommandInput, ListRoomsCommandOutput>(
  _ep0,
  _mw0,
  "ListRooms",
  ListRooms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoomsRequest;
      output: ListRoomsResponse;
    };
    sdk: {
      input: ListRoomsCommandInput;
      output: ListRoomsCommandOutput;
    };
  };
}
