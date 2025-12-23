// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRumMetricsDestinationRequest, DeleteRumMetricsDestinationResponse } from "../models/models_0";
import type { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { DeleteRumMetricsDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRumMetricsDestinationCommand}.
 */
export interface DeleteRumMetricsDestinationCommandInput extends DeleteRumMetricsDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRumMetricsDestinationCommand}.
 */
export interface DeleteRumMetricsDestinationCommandOutput extends DeleteRumMetricsDestinationResponse, __MetadataBearer {}

/**
 * <p>Deletes a destination for CloudWatch RUM extended metrics, so that the specified app monitor stops sending extended metrics to that destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, DeleteRumMetricsDestinationCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, DeleteRumMetricsDestinationCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // DeleteRumMetricsDestinationRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 * };
 * const command = new DeleteRumMetricsDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRumMetricsDestinationCommandInput - {@link DeleteRumMetricsDestinationCommandInput}
 * @returns {@link DeleteRumMetricsDestinationCommandOutput}
 * @see {@link DeleteRumMetricsDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteRumMetricsDestinationCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 *
 * @public
 */
export class DeleteRumMetricsDestinationCommand extends $Command
  .classBuilder<
    DeleteRumMetricsDestinationCommandInput,
    DeleteRumMetricsDestinationCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "DeleteRumMetricsDestination", {})
  .n("RUMClient", "DeleteRumMetricsDestinationCommand")
  .sc(DeleteRumMetricsDestination$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRumMetricsDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteRumMetricsDestinationCommandInput;
      output: DeleteRumMetricsDestinationCommandOutput;
    };
  };
}
