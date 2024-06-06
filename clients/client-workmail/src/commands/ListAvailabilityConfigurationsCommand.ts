// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAvailabilityConfigurationsRequest, ListAvailabilityConfigurationsResponse } from "../models/models_0";
import {
  de_ListAvailabilityConfigurationsCommand,
  se_ListAvailabilityConfigurationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListAvailabilityConfigurationsCommandOutput
  extends ListAvailabilityConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListAvailabilityConfigurationsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListAvailabilityConfigurationsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
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
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 * @public
 */
export class ListAvailabilityConfigurationsCommand extends $Command
  .classBuilder<
    ListAvailabilityConfigurationsCommandInput,
    ListAvailabilityConfigurationsCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "ListAvailabilityConfigurations", {})
  .n("WorkMailClient", "ListAvailabilityConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAvailabilityConfigurationsCommand)
  .de(de_ListAvailabilityConfigurationsCommand)
  .build() {}
