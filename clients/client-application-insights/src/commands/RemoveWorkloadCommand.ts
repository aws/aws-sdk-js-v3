// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveWorkloadRequest, RemoveWorkloadResponse } from "../models/models_0";
import { RemoveWorkload } from "../schemas/schemas_2_Component";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveWorkloadCommand}.
 */
export interface RemoveWorkloadCommandInput extends RemoveWorkloadRequest {}
/**
 * @public
 *
 * The output of {@link RemoveWorkloadCommand}.
 */
export interface RemoveWorkloadCommandOutput extends RemoveWorkloadResponse, __MetadataBearer {}

/**
 * <p>Remove workload from a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, RemoveWorkloadCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, RemoveWorkloadCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // RemoveWorkloadRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   WorkloadId: "STRING_VALUE", // required
 * };
 * const command = new RemoveWorkloadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveWorkloadCommandInput - {@link RemoveWorkloadCommandInput}
 * @returns {@link RemoveWorkloadCommandOutput}
 * @see {@link RemoveWorkloadCommandInput} for command's `input` shape.
 * @see {@link RemoveWorkloadCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class RemoveWorkloadCommand extends $Command
  .classBuilder<
    RemoveWorkloadCommandInput,
    RemoveWorkloadCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "RemoveWorkload", {})
  .n("ApplicationInsightsClient", "RemoveWorkloadCommand")
  .sc(RemoveWorkload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveWorkloadRequest;
      output: {};
    };
    sdk: {
      input: RemoveWorkloadCommandInput;
      output: RemoveWorkloadCommandOutput;
    };
  };
}
