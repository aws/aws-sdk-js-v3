// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAnnotationImportJobsRequest, ListAnnotationImportJobsResponse } from "../models/models_0";
import { ListAnnotationImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Retrieves a list of annotation import jobs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListAnnotationImportJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListAnnotationImportJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
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
export class ListAnnotationImportJobsCommand extends command<ListAnnotationImportJobsCommandInput, ListAnnotationImportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListAnnotationImportJobs",
  ListAnnotationImportJobs$
) {
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
