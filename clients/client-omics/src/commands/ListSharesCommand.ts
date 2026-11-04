// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSharesRequest, ListSharesResponse } from "../models/models_0";
import { ListShares$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSharesCommand}.
 */
export interface ListSharesCommandInput extends ListSharesRequest {}
/**
 * @public
 *
 * The output of {@link ListSharesCommand}.
 */
export interface ListSharesCommandOutput extends ListSharesResponse, __MetadataBearer {}

/**
 * Retrieves the resource shares associated with an account. Use the filter parameter to retrieve a specific subset of the shares.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListSharesCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListSharesCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListSharesRequest
 *   resourceOwner: "STRING_VALUE", // required
 *   filter: { // Filter
 *     resourceArns: [ // ArnList
 *       "STRING_VALUE",
 *     ],
 *     status: [ // StatusList
 *       "STRING_VALUE",
 *     ],
 *     type: [ // TypeList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListSharesResponse
 * //   shares: [ // ShareDetailsList // required
 * //     { // ShareDetails
 * //       shareId: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       principalSubscriber: "STRING_VALUE",
 * //       ownerId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       shareName: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       updateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSharesCommandInput - {@link ListSharesCommandInput}
 * @returns {@link ListSharesCommandOutput}
 * @see {@link ListSharesCommandInput} for command's `input` shape.
 * @see {@link ListSharesCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class ListSharesCommand extends command<ListSharesCommandInput, ListSharesCommandOutput>(
  _ep0,
  _mw0,
  "ListShares",
  ListShares$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSharesRequest;
      output: ListSharesResponse;
    };
    sdk: {
      input: ListSharesCommandInput;
      output: ListSharesCommandOutput;
    };
  };
}
