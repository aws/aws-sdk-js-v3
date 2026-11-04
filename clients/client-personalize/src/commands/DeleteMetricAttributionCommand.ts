// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMetricAttributionRequest } from "../models/models_0";
import { DeleteMetricAttribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMetricAttributionCommand}.
 */
export interface DeleteMetricAttributionCommandInput extends DeleteMetricAttributionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMetricAttributionCommand}.
 */
export interface DeleteMetricAttributionCommandOutput extends __MetadataBearer {}

/**
 * Deletes a metric attribution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteMetricAttributionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteMetricAttributionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DeleteMetricAttributionRequest
 *   metricAttributionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMetricAttributionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMetricAttributionCommandInput - {@link DeleteMetricAttributionCommandInput}
 * @returns {@link DeleteMetricAttributionCommandOutput}
 * @see {@link DeleteMetricAttributionCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricAttributionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class DeleteMetricAttributionCommand extends command<DeleteMetricAttributionCommandInput, DeleteMetricAttributionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMetricAttribution",
  DeleteMetricAttribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMetricAttributionRequest;
      output: {};
    };
    sdk: {
      input: DeleteMetricAttributionCommandInput;
      output: DeleteMetricAttributionCommandOutput;
    };
  };
}
