// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListWebsiteAuthorizationProvidersRequest,
  ListWebsiteAuthorizationProvidersResponse,
} from "../models/models_0";
import {
  de_ListWebsiteAuthorizationProvidersCommand,
  se_ListWebsiteAuthorizationProvidersCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWebsiteAuthorizationProvidersCommand}.
 */
export interface ListWebsiteAuthorizationProvidersCommandInput extends ListWebsiteAuthorizationProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListWebsiteAuthorizationProvidersCommand}.
 */
export interface ListWebsiteAuthorizationProvidersCommandOutput
  extends ListWebsiteAuthorizationProvidersResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // ListWebsiteAuthorizationProvidersRequest
 *   FleetArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWebsiteAuthorizationProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListWebsiteAuthorizationProvidersResponse
 * //   WebsiteAuthorizationProviders: [ // WebsiteAuthorizationProvidersSummaryList
 * //     { // WebsiteAuthorizationProviderSummary
 * //       AuthorizationProviderId: "STRING_VALUE",
 * //       AuthorizationProviderType: "SAML", // required
 * //       DomainName: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebsiteAuthorizationProvidersCommandInput - {@link ListWebsiteAuthorizationProvidersCommandInput}
 * @returns {@link ListWebsiteAuthorizationProvidersCommandOutput}
 * @see {@link ListWebsiteAuthorizationProvidersCommandInput} for command's `input` shape.
 * @see {@link ListWebsiteAuthorizationProvidersCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 * @public
 */
export class ListWebsiteAuthorizationProvidersCommand extends $Command
  .classBuilder<
    ListWebsiteAuthorizationProvidersCommandInput,
    ListWebsiteAuthorizationProvidersCommandOutput,
    WorkLinkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkLinkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkLink", "ListWebsiteAuthorizationProviders", {})
  .n("WorkLinkClient", "ListWebsiteAuthorizationProvidersCommand")
  .f(void 0, void 0)
  .ser(se_ListWebsiteAuthorizationProvidersCommand)
  .de(de_ListWebsiteAuthorizationProvidersCommand)
  .build() {}
