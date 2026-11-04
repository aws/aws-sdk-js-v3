// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateComponentRequest, UpdateComponentResponse } from "../models/models_0";
import { UpdateComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandInput extends UpdateComponentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandOutput extends UpdateComponentResponse, __MetadataBearer {}

/**
 * Updates the custom component name and/or the list of resources that make up the component.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateComponentCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateComponentCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // UpdateComponentRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   NewComponentName: "STRING_VALUE",
 *   ResourceList: [ // ResourceList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateComponentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateComponentCommandInput - {@link UpdateComponentCommandInput}
 * @returns {@link UpdateComponentCommandOutput}
 * @see {@link UpdateComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentCommandOutput} for command's `response` shape.
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
export class UpdateComponentCommand extends command<UpdateComponentCommandInput, UpdateComponentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateComponent",
  UpdateComponent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateComponentRequest;
      output: {};
    };
    sdk: {
      input: UpdateComponentCommandInput;
      output: UpdateComponentCommandOutput;
    };
  };
}
