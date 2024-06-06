// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAggregationAuthorizationRequest } from "../models/models_0";
import {
  de_DeleteAggregationAuthorizationCommand,
  se_DeleteAggregationAuthorizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAggregationAuthorizationCommand}.
 */
export interface DeleteAggregationAuthorizationCommandInput extends DeleteAggregationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAggregationAuthorizationCommand}.
 */
export interface DeleteAggregationAuthorizationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the authorization granted to the specified
 * 			configuration aggregator account in a specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteAggregationAuthorizationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteAggregationAuthorizationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteAggregationAuthorizationRequest
 *   AuthorizedAccountId: "STRING_VALUE", // required
 *   AuthorizedAwsRegion: "STRING_VALUE", // required
 * };
 * const command = new DeleteAggregationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAggregationAuthorizationCommandInput - {@link DeleteAggregationAuthorizationCommandInput}
 * @returns {@link DeleteAggregationAuthorizationCommandOutput}
 * @see {@link DeleteAggregationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAggregationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DeleteAggregationAuthorizationCommand extends $Command
  .classBuilder<
    DeleteAggregationAuthorizationCommandInput,
    DeleteAggregationAuthorizationCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DeleteAggregationAuthorization", {})
  .n("ConfigServiceClient", "DeleteAggregationAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAggregationAuthorizationCommand)
  .de(de_DeleteAggregationAuthorizationCommand)
  .build() {}
