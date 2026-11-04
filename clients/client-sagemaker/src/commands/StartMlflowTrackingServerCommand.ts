// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMlflowTrackingServerRequest, StartMlflowTrackingServerResponse } from "../models/models_4";
import { StartMlflowTrackingServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMlflowTrackingServerCommand}.
 */
export interface StartMlflowTrackingServerCommandInput extends StartMlflowTrackingServerRequest {}
/**
 * @public
 *
 * The output of {@link StartMlflowTrackingServerCommand}.
 */
export interface StartMlflowTrackingServerCommandOutput extends StartMlflowTrackingServerResponse, __MetadataBearer {}

/**
 * Programmatically start an MLflow Tracking Server.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartMlflowTrackingServerCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartMlflowTrackingServerCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StartMlflowTrackingServerRequest
 *   TrackingServerName: "STRING_VALUE", // required
 * };
 * const command = new StartMlflowTrackingServerCommand(input);
 * const response = await client.send(command);
 * // { // StartMlflowTrackingServerResponse
 * //   TrackingServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMlflowTrackingServerCommandInput - {@link StartMlflowTrackingServerCommandInput}
 * @returns {@link StartMlflowTrackingServerCommandOutput}
 * @see {@link StartMlflowTrackingServerCommandInput} for command's `input` shape.
 * @see {@link StartMlflowTrackingServerCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class StartMlflowTrackingServerCommand extends command<StartMlflowTrackingServerCommandInput, StartMlflowTrackingServerCommandOutput>(
  _ep0,
  _mw0,
  "StartMlflowTrackingServer",
  StartMlflowTrackingServer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMlflowTrackingServerRequest;
      output: StartMlflowTrackingServerResponse;
    };
    sdk: {
      input: StartMlflowTrackingServerCommandInput;
      output: StartMlflowTrackingServerCommandOutput;
    };
  };
}
