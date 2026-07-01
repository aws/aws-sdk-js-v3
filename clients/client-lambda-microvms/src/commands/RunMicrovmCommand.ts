// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RunMicrovmRequest, RunMicrovmResponse } from "../models/models_0";
import { RunMicrovm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RunMicrovmCommand}.
 */
export interface RunMicrovmCommandInput extends RunMicrovmRequest {}
/**
 * @public
 *
 * The output of {@link RunMicrovmCommand}.
 */
export interface RunMicrovmCommandOutput extends RunMicrovmResponse, __MetadataBearer {}

/**
 * <p>Runs a new MicroVM from the specified image. The MicroVM starts in PENDING state and transitions to RUNNING once provisioning completes. To connect, generate an authentication token using CreateMicrovmAuthToken.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, RunMicrovmCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, RunMicrovmCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // RunMicrovmRequest
 *   ingressNetworkConnectors: [ // NetworkConnectorList
 *     "STRING_VALUE",
 *   ],
 *   egressNetworkConnectors: [
 *     "STRING_VALUE",
 *   ],
 *   imageIdentifier: "STRING_VALUE", // required
 *   imageVersion: "STRING_VALUE",
 *   executionRoleArn: "STRING_VALUE",
 *   idlePolicy: { // IdlePolicy
 *     maxIdleDurationSeconds: Number("int"), // required
 *     suspendedDurationSeconds: Number("int"), // required
 *     autoResumeEnabled: true || false, // required
 *   },
 *   logging: { // Logging Union: only one key present
 *     disabled: {},
 *     cloudWatch: { // CloudWatchLogging
 *       logGroup: "STRING_VALUE",
 *       logStream: "STRING_VALUE",
 *     },
 *   },
 *   runHookPayload: "STRING_VALUE",
 *   maximumDurationInSeconds: Number("int"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RunMicrovmCommand(input);
 * const response = await client.send(command);
 * // { // RunMicrovmResponse
 * //   microvmId: "STRING_VALUE", // required
 * //   state: "PENDING" || "RUNNING" || "SUSPENDING" || "SUSPENDED" || "TERMINATING" || "TERMINATED", // required
 * //   endpoint: "STRING_VALUE", // required
 * //   imageArn: "STRING_VALUE", // required
 * //   imageVersion: "STRING_VALUE", // required
 * //   executionRoleArn: "STRING_VALUE",
 * //   idlePolicy: { // IdlePolicy
 * //     maxIdleDurationSeconds: Number("int"), // required
 * //     suspendedDurationSeconds: Number("int"), // required
 * //     autoResumeEnabled: true || false, // required
 * //   },
 * //   maximumDurationInSeconds: Number("int"), // required
 * //   startedAt: new Date("TIMESTAMP"), // required
 * //   terminatedAt: new Date("TIMESTAMP"),
 * //   stateReason: "STRING_VALUE",
 * //   ingressNetworkConnectors: [ // NetworkConnectorList
 * //     "STRING_VALUE",
 * //   ],
 * //   egressNetworkConnectors: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param RunMicrovmCommandInput - {@link RunMicrovmCommandInput}
 * @returns {@link RunMicrovmCommandOutput}
 * @see {@link RunMicrovmCommandInput} for command's `input` shape.
 * @see {@link RunMicrovmCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded a service quota for Lambda MicroVMs.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class RunMicrovmCommand extends command<RunMicrovmCommandInput, RunMicrovmCommandOutput>(
  _ep0,
  _mw0,
  "RunMicrovm",
  RunMicrovm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RunMicrovmRequest;
      output: RunMicrovmResponse;
    };
    sdk: {
      input: RunMicrovmCommandInput;
      output: RunMicrovmCommandOutput;
    };
  };
}
