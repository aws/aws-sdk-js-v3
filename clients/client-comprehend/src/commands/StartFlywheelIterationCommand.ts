// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFlywheelIterationRequest, StartFlywheelIterationResponse } from "../models/models_0";
import { StartFlywheelIteration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFlywheelIterationCommand}.
 */
export interface StartFlywheelIterationCommandInput extends StartFlywheelIterationRequest {}
/**
 * @public
 *
 * The output of {@link StartFlywheelIterationCommand}.
 */
export interface StartFlywheelIterationCommandOutput extends StartFlywheelIterationResponse, __MetadataBearer {}

/**
 * Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see [Flywheel overview](https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartFlywheelIterationCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartFlywheelIterationCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StartFlywheelIterationRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartFlywheelIterationCommand(input);
 * const response = await client.send(command);
 * // { // StartFlywheelIterationResponse
 * //   FlywheelArn: "STRING_VALUE",
 * //   FlywheelIterationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFlywheelIterationCommandInput - {@link StartFlywheelIterationCommandInput}
 * @returns {@link StartFlywheelIterationCommandOutput}
 * @see {@link StartFlywheelIterationCommandInput} for command's `input` shape.
 * @see {@link StartFlywheelIterationCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource name is already in use. Use a different name and try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. Check the ARN and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class StartFlywheelIterationCommand extends command<StartFlywheelIterationCommandInput, StartFlywheelIterationCommandOutput>(
  _ep0,
  _mw0,
  "StartFlywheelIteration",
  StartFlywheelIteration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFlywheelIterationRequest;
      output: StartFlywheelIterationResponse;
    };
    sdk: {
      input: StartFlywheelIterationCommandInput;
      output: StartFlywheelIterationCommandOutput;
    };
  };
}
