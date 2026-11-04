// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIndicesRequest, ListIndicesResponse } from "../models/models_0";
import { ListIndices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIndicesCommand}.
 */
export interface ListIndicesCommandInput extends ListIndicesRequest {}
/**
 * @public
 *
 * The output of {@link ListIndicesCommand}.
 */
export interface ListIndicesCommandOutput extends ListIndicesResponse, __MetadataBearer {}

/**
 * Lists the Amazon Q Business indices you have created.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListIndicesCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListIndicesCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListIndicesRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIndicesCommand(input);
 * const response = await client.send(command);
 * // { // ListIndicesResponse
 * //   nextToken: "STRING_VALUE",
 * //   indices: [ // Indices
 * //     { // Index
 * //       displayName: "STRING_VALUE",
 * //       indexId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIndicesCommandInput - {@link ListIndicesCommandInput}
 * @returns {@link ListIndicesCommandOutput}
 * @see {@link ListIndicesCommandInput} for command's `input` shape.
 * @see {@link ListIndicesCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class ListIndicesCommand extends command<ListIndicesCommandInput, ListIndicesCommandOutput>(
  _ep0,
  _mw0,
  "ListIndices",
  ListIndices$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIndicesRequest;
      output: ListIndicesResponse;
    };
    sdk: {
      input: ListIndicesCommandInput;
      output: ListIndicesCommandOutput;
    };
  };
}
