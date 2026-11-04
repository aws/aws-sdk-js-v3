// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMicrovmRequest, GetMicrovmResponse } from "../models/models_0";
import { GetMicrovm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMicrovmCommand}.
 */
export interface GetMicrovmCommandInput extends GetMicrovmRequest {}
/**
 * @public
 *
 * The output of {@link GetMicrovmCommand}.
 */
export interface GetMicrovmCommandOutput extends GetMicrovmResponse, __MetadataBearer {}

/**
 * Retrieves the details of a specific MicroVM, including its state, endpoint, image information, and configuration. The state field is eventually consistent — determine readiness by connecting to the endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, GetMicrovmCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, GetMicrovmCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // GetMicrovmRequest
 *   microvmIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetMicrovmCommand(input);
 * const response = await client.send(command);
 * // { // GetMicrovmResponse
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
 * @param GetMicrovmCommandInput - {@link GetMicrovmCommandInput}
 * @returns {@link GetMicrovmCommandOutput}
 * @see {@link GetMicrovmCommandInput} for command's `input` shape.
 * @see {@link GetMicrovmCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry the request later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Retry the request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by the service.
 *
 * @throws {@link LambdaMicrovmsServiceException}
 *
 * Base exception class for all service exceptions from LambdaMicrovms service.
 *
 * @public
 */
export class GetMicrovmCommand extends command<GetMicrovmCommandInput, GetMicrovmCommandOutput>(
  _ep0,
  _mw0,
  "GetMicrovm",
  GetMicrovm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMicrovmRequest;
      output: GetMicrovmResponse;
    };
    sdk: {
      input: GetMicrovmCommandInput;
      output: GetMicrovmCommandOutput;
    };
  };
}
