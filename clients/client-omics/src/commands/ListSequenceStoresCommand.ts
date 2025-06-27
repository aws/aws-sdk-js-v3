// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSequenceStoresRequest, ListSequenceStoresResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListSequenceStoresCommand, se_ListSequenceStoresCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSequenceStoresCommand}.
 */
export interface ListSequenceStoresCommandInput extends ListSequenceStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListSequenceStoresCommand}.
 */
export interface ListSequenceStoresCommandOutput extends ListSequenceStoresResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of sequence stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListSequenceStoresCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListSequenceStoresCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListSequenceStoresRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // SequenceStoreFilter
 *     name: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *     status: "STRING_VALUE",
 *     updatedAfter: new Date("TIMESTAMP"),
 *     updatedBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListSequenceStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListSequenceStoresResponse
 * //   nextToken: "STRING_VALUE",
 * //   sequenceStores: [ // SequenceStoreDetailList // required
 * //     { // SequenceStoreDetail
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       sseConfig: { // SseConfig
 * //         type: "STRING_VALUE", // required
 * //         keyArn: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       fallbackLocation: "STRING_VALUE",
 * //       eTagAlgorithmFamily: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       updateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSequenceStoresCommandInput - {@link ListSequenceStoresCommandInput}
 * @returns {@link ListSequenceStoresCommandOutput}
 * @see {@link ListSequenceStoresCommandInput} for command's `input` shape.
 * @see {@link ListSequenceStoresCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
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
export class ListSequenceStoresCommand extends $Command
  .classBuilder<
    ListSequenceStoresCommandInput,
    ListSequenceStoresCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "ListSequenceStores", {})
  .n("OmicsClient", "ListSequenceStoresCommand")
  .f(void 0, void 0)
  .ser(se_ListSequenceStoresCommand)
  .de(de_ListSequenceStoresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSequenceStoresRequest;
      output: ListSequenceStoresResponse;
    };
    sdk: {
      input: ListSequenceStoresCommandInput;
      output: ListSequenceStoresCommandOutput;
    };
  };
}
