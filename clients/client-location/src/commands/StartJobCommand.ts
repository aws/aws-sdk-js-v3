// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartJobRequest, StartJobResponse } from "../models/models_0";
import { StartJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartJobCommand}.
 */
export interface StartJobCommandInput extends StartJobRequest {}
/**
 * @public
 *
 * The output of {@link StartJobCommand}.
 */
export interface StartJobCommandOutput extends StartJobResponse, __MetadataBearer {}

/**
 * `StartJob` starts a new asynchronous bulk processing job. You specify the input data location in Amazon S3, the action to perform, and the output location where results are written.
 *
 * For more information, see [Job concepts](https://docs.aws.amazon.com/location/latest/developerguide/jobs-concepts.html) in the *Amazon Location Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, StartJobCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, StartJobCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // StartJobRequest
 *   ClientToken: "STRING_VALUE",
 *   Action: "STRING_VALUE", // required
 *   ActionOptions: { // JobActionOptions
 *     ValidateAddress: { // ValidateAddressActionOptions
 *       AdditionalFeatures: [ // ValidateAddressAdditionalFeatureList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   InputOptions: { // JobInputOptions
 *     Location: "STRING_VALUE", // required
 *     Format: "STRING_VALUE", // required
 *   },
 *   Name: "STRING_VALUE",
 *   OutputOptions: { // JobOutputOptions
 *     Format: "STRING_VALUE", // required
 *     Location: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartJobCommand(input);
 * const response = await client.send(command);
 * // { // StartJobResponse
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   JobArn: "STRING_VALUE", // required
 * //   JobId: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartJobCommandInput - {@link StartJobCommandInput}
 * @returns {@link StartJobCommandOutput}
 * @see {@link StartJobCommandInput} for command's `input` shape.
 * @see {@link StartJobCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class StartJobCommand extends command<StartJobCommandInput, StartJobCommandOutput>(
  _ep0,
  _mw0,
  "StartJob",
  StartJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartJobRequest;
      output: StartJobResponse;
    };
    sdk: {
      input: StartJobCommandInput;
      output: StartJobCommandOutput;
    };
  };
}
