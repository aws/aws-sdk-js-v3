// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopContinuousExportRequest, StopContinuousExportResponse } from "../models/models_0";
import { StopContinuousExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopContinuousExportCommand}.
 */
export interface StopContinuousExportCommandInput extends StopContinuousExportRequest {}
/**
 * @public
 *
 * The output of {@link StopContinuousExportCommand}.
 */
export interface StopContinuousExportCommandOutput extends StopContinuousExportResponse, __MetadataBearer {}

/**
 * Stop the continuous flow of agent's discovered data into Amazon Athena.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // StopContinuousExportRequest
 *   exportId: "STRING_VALUE", // required
 * };
 * const command = new StopContinuousExportCommand(input);
 * const response = await client.send(command);
 * // { // StopContinuousExportResponse
 * //   startTime: new Date("TIMESTAMP"),
 * //   stopTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StopContinuousExportCommandInput - {@link StopContinuousExportCommandInput}
 * @returns {@link StopContinuousExportCommandOutput}
 * @see {@link StopContinuousExportCommandInput} for command's `input` shape.
 * @see {@link StopContinuousExportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This operation is not permitted.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * This issue occurs when the same `clientRequestToken` is used with the `StartImportTask` action, but with different parameters. For example, you use the same request token but have two different import URLs, you can encounter this issue. If the import tasks are meant to be different, use a different `clientRequestToken`, and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified configuration ID was not located. Verify the configuration ID and try again.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class StopContinuousExportCommand extends command<StopContinuousExportCommandInput, StopContinuousExportCommandOutput>(
  _ep0,
  _mw0,
  "StopContinuousExport",
  StopContinuousExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopContinuousExportRequest;
      output: StopContinuousExportResponse;
    };
    sdk: {
      input: StopContinuousExportCommandInput;
      output: StopContinuousExportCommandOutput;
    };
  };
}
