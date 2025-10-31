// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVariantImportJobsRequest, ListVariantImportJobsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListVariantImportJobsCommand, se_ListVariantImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVariantImportJobsCommand}.
 */
export interface ListVariantImportJobsCommandInput extends ListVariantImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListVariantImportJobsCommand}.
 */
export interface ListVariantImportJobsCommandOutput extends ListVariantImportJobsResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Retrieves a list of variant import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListVariantImportJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListVariantImportJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListVariantImportJobsRequest
 *   maxResults: Number("int"),
 *   ids: [ // IdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   filter: { // ListVariantImportJobsFilter
 *     status: "STRING_VALUE",
 *     storeName: "STRING_VALUE",
 *   },
 * };
 * const command = new ListVariantImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListVariantImportJobsResponse
 * //   variantImportJobs: [ // VariantImportJobItems
 * //     { // VariantImportJobItem
 * //       id: "STRING_VALUE", // required
 * //       destinationName: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       completionTime: new Date("TIMESTAMP"),
 * //       runLeftNormalization: true || false,
 * //       annotationFields: { // AnnotationFieldMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVariantImportJobsCommandInput - {@link ListVariantImportJobsCommandInput}
 * @returns {@link ListVariantImportJobsCommandOutput}
 * @see {@link ListVariantImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListVariantImportJobsCommandOutput} for command's `response` shape.
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
export class ListVariantImportJobsCommand extends $Command
  .classBuilder<
    ListVariantImportJobsCommandInput,
    ListVariantImportJobsCommandOutput,
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
  .s("Omics", "ListVariantImportJobs", {})
  .n("OmicsClient", "ListVariantImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListVariantImportJobsCommand)
  .de(de_ListVariantImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVariantImportJobsRequest;
      output: ListVariantImportJobsResponse;
    };
    sdk: {
      input: ListVariantImportJobsCommandInput;
      output: ListVariantImportJobsCommandOutput;
    };
  };
}
