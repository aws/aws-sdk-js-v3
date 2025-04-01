// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListDomainConfigurationsRequest, ListDomainConfigurationsResponse } from "../models/models_2";
import { de_ListDomainConfigurationsCommand, se_ListDomainConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainConfigurationsCommand}.
 */
export interface ListDomainConfigurationsCommandInput extends ListDomainConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainConfigurationsCommand}.
 */
export interface ListDomainConfigurationsCommandOutput extends ListDomainConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of domain configurations for the user. This list is sorted
 *          alphabetically by domain configuration name.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDomainConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDomainConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListDomainConfigurationsRequest
 *   marker: "STRING_VALUE",
 *   pageSize: Number("int"),
 *   serviceType: "DATA" || "CREDENTIAL_PROVIDER" || "JOBS",
 * };
 * const command = new ListDomainConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainConfigurationsResponse
 * //   domainConfigurations: [ // DomainConfigurations
 * //     { // DomainConfigurationSummary
 * //       domainConfigurationName: "STRING_VALUE",
 * //       domainConfigurationArn: "STRING_VALUE",
 * //       serviceType: "DATA" || "CREDENTIAL_PROVIDER" || "JOBS",
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainConfigurationsCommandInput - {@link ListDomainConfigurationsCommandInput}
 * @returns {@link ListDomainConfigurationsCommandOutput}
 * @see {@link ListDomainConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListDomainConfigurationsCommand extends $Command
  .classBuilder<
    ListDomainConfigurationsCommandInput,
    ListDomainConfigurationsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListDomainConfigurations", {})
  .n("IoTClient", "ListDomainConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainConfigurationsCommand)
  .de(de_ListDomainConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainConfigurationsRequest;
      output: ListDomainConfigurationsResponse;
    };
    sdk: {
      input: ListDomainConfigurationsCommandInput;
      output: ListDomainConfigurationsCommandOutput;
    };
  };
}
