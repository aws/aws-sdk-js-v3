// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSharesRequest, ListSharesResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListShares } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the resource shares associated with an account. Use the filter parameter to retrieve a specific subset of the shares.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class ListSharesCommand extends $Command
  .classBuilder<
    ListSharesCommandInput,
    ListSharesCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListShares", {})
  .n("OmicsClient", "ListSharesCommand")
  .sc(ListShares)
  .build() {
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
