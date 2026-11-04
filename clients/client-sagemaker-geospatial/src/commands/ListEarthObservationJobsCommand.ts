// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEarthObservationJobInput, ListEarthObservationJobOutput } from "../models/models_0";
import { ListEarthObservationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SageMakerGeospatialServiceException}
 *
 * Base exception class for all service exceptions from SageMakerGeospatial service.
 *
 * @public
 */
export class ListEarthObservationJobsCommand extends command<ListEarthObservationJobsCommandInput, ListEarthObservationJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListEarthObservationJobs",
  ListEarthObservationJobs$
) {
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
