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
import { CreateComponentRequest, CreateComponentResponse } from "../models/models_0";
import { CreateComponent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateComponentCommand}.
 */
export interface CreateComponentCommandInput extends CreateComponentRequest {}
/**
 * @public
 *
 * The output of {@link CreateComponentCommand}.
 */
export interface CreateComponentCommandOutput extends CreateComponentResponse, __MetadataBearer {}

/**
 * <p>Creates a custom component by grouping similar standalone instances to monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, CreateComponentCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, CreateComponentCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // CreateComponentRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   ResourceList: [ // ResourceList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateComponentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateComponentCommandInput - {@link CreateComponentCommandInput}
 * @returns {@link CreateComponentCommandOutput}
 * @see {@link CreateComponentCommandInput} for command's `input` shape.
 * @see {@link CreateComponentCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already created or in use.</p>
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
export class CreateComponentCommand extends $Command
  .classBuilder<
    CreateComponentCommandInput,
    CreateComponentCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "CreateComponent", {})
  .n("ApplicationInsightsClient", "CreateComponentCommand")
  .sc(CreateComponent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComponentRequest;
      output: {};
    };
    sdk: {
      input: CreateComponentCommandInput;
      output: CreateComponentCommandOutput;
    };
  };
}
