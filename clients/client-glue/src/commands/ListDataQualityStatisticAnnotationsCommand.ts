// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDataQualityStatisticAnnotationsRequest,
  ListDataQualityStatisticAnnotationsResponse,
} from "../models/models_2";
import { ListDataQualityStatisticAnnotations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataQualityStatisticAnnotationsCommand}.
 */
export interface ListDataQualityStatisticAnnotationsCommandInput extends ListDataQualityStatisticAnnotationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityStatisticAnnotationsCommand}.
 */
export interface ListDataQualityStatisticAnnotationsCommandOutput extends ListDataQualityStatisticAnnotationsResponse, __MetadataBearer {}

/**
 * <p>Retrieve annotations for a data quality statistic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityStatisticAnnotationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityStatisticAnnotationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityStatisticAnnotationsRequest
 *   StatisticId: "STRING_VALUE",
 *   ProfileId: "STRING_VALUE",
 *   TimestampFilter: { // TimestampFilter
 *     RecordedBefore: new Date("TIMESTAMP"),
 *     RecordedAfter: new Date("TIMESTAMP"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDataQualityStatisticAnnotationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityStatisticAnnotationsResponse
 * //   Annotations: [ // AnnotationList
 * //     { // StatisticAnnotation
 * //       ProfileId: "STRING_VALUE",
 * //       StatisticId: "STRING_VALUE",
 * //       StatisticRecordedOn: new Date("TIMESTAMP"),
 * //       InclusionAnnotation: { // TimestampedInclusionAnnotation
 * //         Value: "INCLUDE" || "EXCLUDE",
 * //         LastModifiedOn: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityStatisticAnnotationsCommandInput - {@link ListDataQualityStatisticAnnotationsCommandInput}
 * @returns {@link ListDataQualityStatisticAnnotationsCommandOutput}
 * @see {@link ListDataQualityStatisticAnnotationsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityStatisticAnnotationsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListDataQualityStatisticAnnotationsCommand extends command<ListDataQualityStatisticAnnotationsCommandInput, ListDataQualityStatisticAnnotationsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataQualityStatisticAnnotations",
  ListDataQualityStatisticAnnotations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityStatisticAnnotationsRequest;
      output: ListDataQualityStatisticAnnotationsResponse;
    };
    sdk: {
      input: ListDataQualityStatisticAnnotationsCommandInput;
      output: ListDataQualityStatisticAnnotationsCommandOutput;
    };
  };
}
