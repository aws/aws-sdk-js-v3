// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTagsRequest } from "../models/models_0";
import { AddTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddTagsCommand}.
 */
export interface AddTagsCommandInput extends AddTagsRequest {}
/**
 * @public
 *
 * The output of {@link AddTagsCommand}.
 */
export interface AddTagsCommandOutput extends __MetadataBearer {}

/**
 * Attaches tags to an existing Amazon OpenSearch Service domain, data source, or application.
 *
 * Tags are a set of case-sensitive key-value pairs. A domain, data source, or application can have up to 10 tags. For more information, see [Tagging Amazon OpenSearch Service resources](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-awsresourcetagging.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AddTagsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AddTagsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // AddTagsRequest
 *   ARN: "STRING_VALUE", // required
 *   TagList: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsCommandInput - {@link AddTagsCommandInput}
 * @returns {@link AddTagsCommandOutput}
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An exception for trying to create more than the allowed number of resources or sub-resources.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class AddTagsCommand extends command<AddTagsCommandInput, AddTagsCommandOutput>(
  _ep0,
  _mw0,
  "AddTags",
  AddTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsRequest;
      output: {};
    };
    sdk: {
      input: AddTagsCommandInput;
      output: AddTagsCommandOutput;
    };
  };
}
