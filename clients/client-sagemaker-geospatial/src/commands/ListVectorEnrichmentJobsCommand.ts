// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListVectorEnrichmentJobInput,
  ListVectorEnrichmentJobInputFilterSensitiveLog,
  ListVectorEnrichmentJobOutput,
  ListVectorEnrichmentJobOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListVectorEnrichmentJobsCommand, se_ListVectorEnrichmentJobsCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVectorEnrichmentJobsCommand}.
 */
export interface ListVectorEnrichmentJobsCommandInput extends ListVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link ListVectorEnrichmentJobsCommand}.
 */
export interface ListVectorEnrichmentJobsCommandOutput extends ListVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of vector enrichment jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ListVectorEnrichmentJobsCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ListVectorEnrichmentJobsCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ListVectorEnrichmentJobInput
 *   StatusEquals: "STRING_VALUE",
 *   SortOrder: "STRING_VALUE",
 *   SortBy: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVectorEnrichmentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListVectorEnrichmentJobOutput
 * //   VectorEnrichmentJobSummaries: [ // VectorEnrichmentJobList // required
 * //     { // ListVectorEnrichmentJobOutputConfig
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Type: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       DurationInSeconds: Number("int"), // required
 * //       Status: "STRING_VALUE", // required
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVectorEnrichmentJobsCommandInput - {@link ListVectorEnrichmentJobsCommandInput}
 * @returns {@link ListVectorEnrichmentJobsCommandOutput}
 * @see {@link ListVectorEnrichmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListVectorEnrichmentJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SageMakerGeospatialServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGeospatial service.</p>
 *
 * @public
 */
export class ListVectorEnrichmentJobsCommand extends $Command
  .classBuilder<
    ListVectorEnrichmentJobsCommandInput,
    ListVectorEnrichmentJobsCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMakerGeospatial", "ListVectorEnrichmentJobs", {})
  .n("SageMakerGeospatialClient", "ListVectorEnrichmentJobsCommand")
  .f(ListVectorEnrichmentJobInputFilterSensitiveLog, ListVectorEnrichmentJobOutputFilterSensitiveLog)
  .ser(se_ListVectorEnrichmentJobsCommand)
  .de(de_ListVectorEnrichmentJobsCommand)
  .build() {}
