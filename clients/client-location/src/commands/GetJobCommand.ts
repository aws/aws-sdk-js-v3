// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { GetJobRequest, GetJobResponse } from "../models/models_0";
import { GetJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobCommand}.
 */
export interface GetJobCommandInput extends GetJobRequest {}
/**
 * @public
 *
 * The output of {@link GetJobCommand}.
 */
export interface GetJobCommandOutput extends GetJobResponse, __MetadataBearer {}

/**
 * <p> <code>GetJob</code> retrieves detailed information about a specific job, including its current status, configuration, and error information if the job failed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/jobs-concepts.html">Job concepts</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetJobCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetJobCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * // { // GetJobResponse
 * //   Action: "STRING_VALUE", // required
 * //   ActionOptions: { // JobActionOptions
 * //     ValidateAddress: { // ValidateAddressActionOptions
 * //       AdditionalFeatures: [ // ValidateAddressAdditionalFeatureList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   Error: { // JobError
 * //     Code: "STRING_VALUE", // required
 * //     Messages: [ // JobErrorMessagesList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   InputOptions: { // JobInputOptions
 * //     Location: "STRING_VALUE", // required
 * //     Format: "STRING_VALUE", // required
 * //   },
 * //   JobArn: "STRING_VALUE", // required
 * //   JobId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE",
 * //   OutputOptions: { // JobOutputOptions
 * //     Format: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * //   Status: "STRING_VALUE", // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJobCommandInput - {@link GetJobCommandInput}
 * @returns {@link GetJobCommandOutput}
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
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
export class GetJobCommand extends $Command
  .classBuilder<
    GetJobCommandInput,
    GetJobCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "GetJob", {})
  .n("LocationClient", "GetJobCommand")
  .sc(GetJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobRequest;
      output: GetJobResponse;
    };
    sdk: {
      input: GetJobCommandInput;
      output: GetJobCommandOutput;
    };
  };
}
