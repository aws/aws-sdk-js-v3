// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainConfigurationsRequest, ListDomainConfigurationsResponse } from "../models/models_1";
import { ListDomainConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.
 *
 * Requires permission to access the [ListDomainConfigurations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDomainConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDomainConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListDomainConfigurationsCommand extends command<ListDomainConfigurationsCommandInput, ListDomainConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainConfigurations",
  ListDomainConfigurations$
) {
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
