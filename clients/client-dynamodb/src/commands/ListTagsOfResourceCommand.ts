// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { ListTagsOfResourceInput, ListTagsOfResourceOutput } from "../models/models_0";
import { ListTagsOfResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsOfResourceCommand}.
 */
export interface ListTagsOfResourceCommandInput extends ListTagsOfResourceInput {}
/**
 * @public
 *
 * The output of {@link ListTagsOfResourceCommand}.
 */
export interface ListTagsOfResourceCommandOutput extends ListTagsOfResourceOutput, __MetadataBearer {}

/**
 * List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.
 *
 * For an overview on tagging DynamoDB resources, see [Tagging for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html) in the *Amazon DynamoDB Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTagsOfResourceCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTagsOfResourceCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // ListTagsOfResourceInput
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTagsOfResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsOfResourceOutput
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTagsOfResourceCommandInput - {@link ListTagsOfResourceCommandInput}
 * @returns {@link ListTagsOfResourceCommandOutput}
 * @see {@link ListTagsOfResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsOfResourceCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @public
 */
export class ListTagsOfResourceCommand extends command<ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput>(
  _ep5,
  _mw0,
  "ListTagsOfResource",
  ListTagsOfResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsOfResourceInput;
      output: ListTagsOfResourceOutput;
    };
    sdk: {
      input: ListTagsOfResourceCommandInput;
      output: ListTagsOfResourceCommandOutput;
    };
  };
}
