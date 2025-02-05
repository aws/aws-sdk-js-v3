// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueryLoggingConfigRequest, DeleteQueryLoggingConfigResponse } from "../models/models_0";
import { de_DeleteQueryLoggingConfigCommand, se_DeleteQueryLoggingConfigCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueryLoggingConfigCommand}.
 */
export interface DeleteQueryLoggingConfigCommandInput extends DeleteQueryLoggingConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueryLoggingConfigCommand}.
 */
export interface DeleteQueryLoggingConfigCommandOutput extends DeleteQueryLoggingConfigResponse, __MetadataBearer {}

/**
 * <p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon
 * 			Route 53 stops sending query logs to CloudWatch Logs. Route 53 doesn't delete any logs
 * 			that are already in CloudWatch Logs.</p>
 *          <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53Client(config);
 * const input = { // DeleteQueryLoggingConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueryLoggingConfigCommandInput - {@link DeleteQueryLoggingConfigCommandInput}
 * @returns {@link DeleteQueryLoggingConfigCommandOutput}
 * @see {@link DeleteQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchQueryLoggingConfig} (client fault)
 *  <p>There is no DNS query logging configuration with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class DeleteQueryLoggingConfigCommand extends $Command
  .classBuilder<
    DeleteQueryLoggingConfigCommandInput,
    DeleteQueryLoggingConfigCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "DeleteQueryLoggingConfig", {})
  .n("Route53Client", "DeleteQueryLoggingConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQueryLoggingConfigCommand)
  .de(de_DeleteQueryLoggingConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueryLoggingConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueryLoggingConfigCommandInput;
      output: DeleteQueryLoggingConfigCommandOutput;
    };
  };
}
