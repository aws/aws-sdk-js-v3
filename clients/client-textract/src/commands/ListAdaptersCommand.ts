// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAdaptersRequest, ListAdaptersResponse } from "../models/models_0";
import { ListAdapters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAdaptersCommand}.
 */
export interface ListAdaptersCommandInput extends ListAdaptersRequest {}
/**
 * @public
 *
 * The output of {@link ListAdaptersCommand}.
 */
export interface ListAdaptersCommandOutput extends ListAdaptersResponse, __MetadataBearer {}

/**
 * Lists all adapters that match the specified filtration criteria.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, ListAdaptersCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, ListAdaptersCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // ListAdaptersRequest
 *   AfterCreationTime: new Date("TIMESTAMP"),
 *   BeforeCreationTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAdaptersCommand(input);
 * const response = await client.send(command);
 * // { // ListAdaptersResponse
 * //   Adapters: [ // AdapterList
 * //     { // AdapterOverview
 * //       AdapterId: "STRING_VALUE",
 * //       AdapterName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FeatureTypes: [ // FeatureTypes
 * //         "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdaptersCommandInput - {@link ListAdaptersCommandInput}
 * @returns {@link ListAdaptersCommandOutput}
 * @see {@link ListAdaptersCommandInput} for command's `input` shape.
 * @see {@link ListAdaptersCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You aren't authorized to perform the action. Use the Amazon Resource Name (ARN) of an authorized user or IAM role to perform the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter violated a constraint. For example, in synchronous operations, an `InvalidParameterException` exception occurs when neither of the `S3Object` or `Bytes` values are supplied in the `Document` request parameter. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Textract is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that a request was not valid. Check request for proper formatting.
 *
 * @throws {@link TextractServiceException}
 *
 * Base exception class for all service exceptions from Textract service.
 *
 * @public
 */
export class ListAdaptersCommand extends command<ListAdaptersCommandInput, ListAdaptersCommandOutput>(
  _ep0,
  _mw0,
  "ListAdapters",
  ListAdapters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdaptersRequest;
      output: ListAdaptersResponse;
    };
    sdk: {
      input: ListAdaptersCommandInput;
      output: ListAdaptersCommandOutput;
    };
  };
}
