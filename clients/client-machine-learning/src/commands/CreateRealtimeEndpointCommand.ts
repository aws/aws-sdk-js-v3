// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput } from "../models/models_0";
import { CreateRealtimeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRealtimeEndpointCommand}.
 */
export interface CreateRealtimeEndpointCommandInput extends CreateRealtimeEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreateRealtimeEndpointCommand}.
 */
export interface CreateRealtimeEndpointCommandOutput extends CreateRealtimeEndpointOutput, __MetadataBearer {}

/**
 * Creates a real-time endpoint for the `MLModel`. The endpoint contains the URI of the `MLModel`; that is, the location to send real-time prediction requests for the specified `MLModel`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateRealtimeEndpointInput
 *   MLModelId: "STRING_VALUE", // required
 * };
 * const command = new CreateRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateRealtimeEndpointOutput
 * //   MLModelId: "STRING_VALUE",
 * //   RealtimeEndpointInfo: { // RealtimeEndpointInfo
 * //     PeakRequestsPerSecond: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     EndpointUrl: "STRING_VALUE",
 * //     EndpointStatus: "NONE" || "READY" || "UPDATING" || "FAILED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRealtimeEndpointCommandInput - {@link CreateRealtimeEndpointCommandInput}
 * @returns {@link CreateRealtimeEndpointCommandOutput}
 * @see {@link CreateRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An error on the server occurred when trying to process a request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * An error on the client occurred. Typically, the cause is an invalid input value.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource cannot be located.
 *
 * @throws {@link MachineLearningServiceException}
 *
 * Base exception class for all service exceptions from MachineLearning service.
 *
 * @public
 */
export class CreateRealtimeEndpointCommand extends command<CreateRealtimeEndpointCommandInput, CreateRealtimeEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateRealtimeEndpoint",
  CreateRealtimeEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRealtimeEndpointInput;
      output: CreateRealtimeEndpointOutput;
    };
    sdk: {
      input: CreateRealtimeEndpointCommandInput;
      output: CreateRealtimeEndpointCommandOutput;
    };
  };
}
