// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnnotationStoreVersionsRequest, ListAnnotationStoreVersionsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_ListAnnotationStoreVersionsCommand,
  se_ListAnnotationStoreVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnnotationStoreVersionsCommand}.
 */
export interface ListAnnotationStoreVersionsCommandInput extends ListAnnotationStoreVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnnotationStoreVersionsCommand}.
 */
export interface ListAnnotationStoreVersionsCommandOutput
  extends ListAnnotationStoreVersionsResponse,
    __MetadataBearer {}

/**
 * <p> Lists the versions of an annotation store. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListAnnotationStoreVersionsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListAnnotationStoreVersionsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListAnnotationStoreVersionsRequest
 *   name: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ListAnnotationStoreVersionsFilter
 *     status: "STRING_VALUE",
 *   },
 * };
 * const command = new ListAnnotationStoreVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnnotationStoreVersionsResponse
 * //   annotationStoreVersions: [ // AnnotationStoreVersionItems
 * //     { // AnnotationStoreVersionItem
 * //       storeId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       versionArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       versionName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       statusMessage: "STRING_VALUE", // required
 * //       versionSizeBytes: Number("long"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnnotationStoreVersionsCommandInput - {@link ListAnnotationStoreVersionsCommandInput}
 * @returns {@link ListAnnotationStoreVersionsCommandOutput}
 * @see {@link ListAnnotationStoreVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAnnotationStoreVersionsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
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
export class ListAnnotationStoreVersionsCommand extends $Command
  .classBuilder<
    ListAnnotationStoreVersionsCommandInput,
    ListAnnotationStoreVersionsCommandOutput,
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
  .s("Omics", "ListAnnotationStoreVersions", {})
  .n("OmicsClient", "ListAnnotationStoreVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAnnotationStoreVersionsCommand)
  .de(de_ListAnnotationStoreVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnnotationStoreVersionsRequest;
      output: ListAnnotationStoreVersionsResponse;
    };
    sdk: {
      input: ListAnnotationStoreVersionsCommandInput;
      output: ListAnnotationStoreVersionsCommandOutput;
    };
  };
}
