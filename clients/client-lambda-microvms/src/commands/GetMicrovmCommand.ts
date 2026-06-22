// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LambdaMicrovmsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaMicrovmsClient";
import type { GetMicrovmRequest, GetMicrovmResponse } from "../models/models_0";
import { GetMicrovm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the details of a specific MicroVM, including its state, endpoint, image information, and configuration. The state field is eventually consistent — determine readiness by connecting to the endpoint.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class GetMicrovmCommand extends $Command
  .classBuilder<
    GetMicrovmCommandInput,
    GetMicrovmCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "GetMicrovm", {})
  .n("LambdaMicrovmsClient", "GetMicrovmCommand")
  .sc(GetMicrovm$)
  .build() {
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
