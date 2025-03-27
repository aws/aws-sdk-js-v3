// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnnotationImportJobsRequest, ListAnnotationImportJobsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListAnnotationImportJobsCommand, se_ListAnnotationImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnnotationImportJobsCommand}.
 */
export interface ListAnnotationImportJobsCommandInput extends ListAnnotationImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnnotationImportJobsCommand}.
 */
export interface ListAnnotationImportJobsCommandOutput extends ListAnnotationImportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of annotation import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListAnnotationImportJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListAnnotationImportJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListAnnotationImportJobsRequest
 *   maxResults: Number("int"),
 *   ids: [ // IdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   filter: { // ListAnnotationImportJobsFilter
 *     status: "STRING_VALUE",
 *     storeName: "STRING_VALUE",
 *   },
 * };
 * const command = new ListAnnotationImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnnotationImportJobsResponse
 * //   annotationImportJobs: [ // AnnotationImportJobItems
 * //     { // AnnotationImportJobItem
 * //       id: "STRING_VALUE", // required
 * //       destinationName: "STRING_VALUE", // required
 * //       versionName: "STRING_VALUE", // required
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
 * @param ListAnnotationImportJobsCommandInput - {@link ListAnnotationImportJobsCommandInput}
 * @returns {@link ListAnnotationImportJobsCommandOutput}
 * @see {@link ListAnnotationImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListAnnotationImportJobsCommandOutput} for command's `response` shape.
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
export class ListAnnotationImportJobsCommand extends $Command
  .classBuilder<
    ListAnnotationImportJobsCommandInput,
    ListAnnotationImportJobsCommandOutput,
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
  .s("Omics", "ListAnnotationImportJobs", {})
  .n("OmicsClient", "ListAnnotationImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListAnnotationImportJobsCommand)
  .de(de_ListAnnotationImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnnotationImportJobsRequest;
      output: ListAnnotationImportJobsResponse;
    };
    sdk: {
      input: ListAnnotationImportJobsCommandInput;
      output: ListAnnotationImportJobsCommandOutput;
    };
  };
}
