// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRetrieversRequest, ListRetrieversResponse } from "../models/models_0";
import { ListRetrievers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRetrieversCommand}.
 */
export interface ListRetrieversCommandInput extends ListRetrieversRequest {}
/**
 * @public
 *
 * The output of {@link ListRetrieversCommand}.
 */
export interface ListRetrieversCommandOutput extends ListRetrieversResponse, __MetadataBearer {}

/**
 * Lists the retriever used by an Amazon Q Business application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListRetrieversCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListRetrieversCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListRetrieversRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRetrieversCommand(input);
 * const response = await client.send(command);
 * // { // ListRetrieversResponse
 * //   retrievers: [ // Retrievers
 * //     { // Retriever
 * //       applicationId: "STRING_VALUE",
 * //       retrieverId: "STRING_VALUE",
 * //       type: "NATIVE_INDEX" || "KENDRA_INDEX",
 * //       status: "CREATING" || "ACTIVE" || "FAILED",
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRetrieversCommandInput - {@link ListRetrieversCommandInput}
 * @returns {@link ListRetrieversCommandOutput}
 * @see {@link ListRetrieversCommandInput} for command's `input` shape.
 * @see {@link ListRetrieversCommandOutput} for command's `response` shape.
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
export class ListRetrieversCommand extends command<ListRetrieversCommandInput, ListRetrieversCommandOutput>(
  _ep0,
  _mw0,
  "ListRetrievers",
  ListRetrievers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRetrieversRequest;
      output: ListRetrieversResponse;
    };
    sdk: {
      input: ListRetrieversCommandInput;
      output: ListRetrieversCommandOutput;
    };
  };
}
