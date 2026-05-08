// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { ListJobsRequest, ListJobsResponse } from "../models/models_0";
import { ListJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * <p> <code>ListJobs</code> retrieves a list of jobs with optional filtering and pagination support.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/jobs-concepts.html">Job concepts</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListJobsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListJobsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // ListJobsRequest
 *   Filter: { // JobsFilter
 *     JobStatus: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResponse
 * //   Entries: [ // ListJobsResponseEntryList // required
 * //     { // ListJobsResponseEntry
 * //       Action: "STRING_VALUE", // required
 * //       ActionOptions: { // JobActionOptions
 * //         ValidateAddress: { // ValidateAddressActionOptions
 * //           AdditionalFeatures: [ // ValidateAddressAdditionalFeatureList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       ExecutionRoleArn: "STRING_VALUE", // required
 * //       EndedAt: new Date("TIMESTAMP"),
 * //       Error: { // JobError
 * //         Code: "STRING_VALUE", // required
 * //         Messages: [ // JobErrorMessagesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       InputOptions: { // JobInputOptions
 * //         Location: "STRING_VALUE", // required
 * //         Format: "STRING_VALUE", // required
 * //       },
 * //       JobId: "STRING_VALUE", // required
 * //       JobArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE",
 * //       OutputOptions: { // JobOutputOptions
 * //         Format: "STRING_VALUE", // required
 * //         Location: "STRING_VALUE", // required
 * //       },
 * //       Status: "STRING_VALUE", // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class ListJobsCommand extends $Command
  .classBuilder<
    ListJobsCommandInput,
    ListJobsCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "ListJobs", {})
  .n("LocationClient", "ListJobsCommand")
  .sc(ListJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsRequest;
      output: ListJobsResponse;
    };
    sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
    };
  };
}
