// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAvailabilityConfigurationsRequest, ListAvailabilityConfigurationsResponse } from "../models/models_0";
import { ListAvailabilityConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAvailabilityConfigurationsCommand}.
 */
export interface ListAvailabilityConfigurationsCommandInput extends ListAvailabilityConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailabilityConfigurationsCommand}.
 */
export interface ListAvailabilityConfigurationsCommandOutput extends ListAvailabilityConfigurationsResponse, __MetadataBearer {}

/**
 * List all the `AvailabilityConfiguration`'s for the given WorkMail organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListAvailabilityConfigurationsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListAvailabilityConfigurationsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListAvailabilityConfigurationsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAvailabilityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailabilityConfigurationsResponse
 * //   AvailabilityConfigurations: [ // AvailabilityConfigurationList
 * //     { // AvailabilityConfiguration
 * //       DomainName: "STRING_VALUE",
 * //       ProviderType: "EWS" || "LAMBDA",
 * //       EwsProvider: { // RedactedEwsAvailabilityProvider
 * //         EwsEndpoint: "STRING_VALUE",
 * //         EwsUsername: "STRING_VALUE",
 * //       },
 * //       LambdaProvider: { // LambdaAvailabilityProvider
 * //         LambdaArn: "STRING_VALUE", // required
 * //       },
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailabilityConfigurationsCommandInput - {@link ListAvailabilityConfigurationsCommandInput}
 * @returns {@link ListAvailabilityConfigurationsCommandOutput}
 * @see {@link ListAvailabilityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAvailabilityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class ListAvailabilityConfigurationsCommand extends command<ListAvailabilityConfigurationsCommandInput, ListAvailabilityConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAvailabilityConfigurations",
  ListAvailabilityConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailabilityConfigurationsRequest;
      output: ListAvailabilityConfigurationsResponse;
    };
    sdk: {
      input: ListAvailabilityConfigurationsCommandInput;
      output: ListAvailabilityConfigurationsCommandOutput;
    };
  };
}
