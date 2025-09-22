// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAggregationAuthorizationRequest } from "../models/models_0";
import { DeleteAggregationAuthorization } from "../schemas/schemas_34_DeleteAggregationAuthorization";

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
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteAggregationAuthorization", {})
  .n("ConfigServiceClient", "DeleteAggregationAuthorizationCommand")
  .sc(DeleteAggregationAuthorization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAggregationAuthorizationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAggregationAuthorizationCommandInput;
      output: DeleteAggregationAuthorizationCommandOutput;
    };
  };
}
