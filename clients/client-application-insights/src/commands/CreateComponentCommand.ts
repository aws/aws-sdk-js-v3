// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateComponentRequest, CreateComponentResponse } from "../models/models_0";
import { CreateComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a custom component by grouping similar standalone instances to monitor.
 *
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
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is already created or in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource does not exist in the customer account.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The parameter is not valid.
 *
 * @throws {@link ApplicationInsightsServiceException}
 *
 * Base exception class for all service exceptions from ApplicationInsights service.
 *
 * @public
 */
export class CreateComponentCommand extends command<CreateComponentCommandInput, CreateComponentCommandOutput>(
  _ep0,
  _mw0,
  "CreateComponent",
  CreateComponent$
) {
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
