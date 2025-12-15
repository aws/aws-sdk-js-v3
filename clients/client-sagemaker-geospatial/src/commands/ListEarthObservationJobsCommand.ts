// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEarthObservationJobInput, ListEarthObservationJobOutput } from "../models/models_0";
import type {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";
import { ListEarthObservationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEarthObservationJobsCommand}.
 */
export interface ListEarthObservationJobsCommandInput extends ListEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link ListEarthObservationJobsCommand}.
 */
export interface ListEarthObservationJobsCommandOutput extends ListEarthObservationJobOutput, __MetadataBearer {}

/**
 * <p>Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ListEarthObservationJobsCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ListEarthObservationJobsCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ListEarthObservationJobInput
 *   StatusEquals: "STRING_VALUE",
 *   SortOrder: "STRING_VALUE",
 *   SortBy: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEarthObservationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListEarthObservationJobOutput
 * //   EarthObservationJobSummaries: [ // EarthObservationJobList // required
 * //     { // ListEarthObservationJobOutputConfig
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       DurationInSeconds: Number("int"), // required
 * //       Status: "STRING_VALUE", // required
 * //       OperationType: "STRING_VALUE", // required
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
 * @param ListEarthObservationJobsCommandInput - {@link ListEarthObservationJobsCommandInput}
 * @returns {@link ListEarthObservationJobsCommandOutput}
 * @see {@link ListEarthObservationJobsCommandInput} for command's `input` shape.
 * @see {@link ListEarthObservationJobsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListEarthObservationJobsCommand extends $Command
  .classBuilder<
    ListEarthObservationJobsCommandInput,
    ListEarthObservationJobsCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMakerGeospatial", "ListEarthObservationJobs", {})
  .n("SageMakerGeospatialClient", "ListEarthObservationJobsCommand")
  .sc(ListEarthObservationJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEarthObservationJobInput;
      output: ListEarthObservationJobOutput;
    };
    sdk: {
      input: ListEarthObservationJobsCommandInput;
      output: ListEarthObservationJobsCommandOutput;
    };
  };
}
