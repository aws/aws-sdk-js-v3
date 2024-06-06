// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainsRequest, ListDomainsResponse } from "../models/models_0";
import { de_ListDomainsCommand, se_ListDomainsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandInput extends ListDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandOutput extends ListDomainsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of domains associated to a specified fleet.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListDomainsCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListDomainsCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // ListDomainsRequest
 *   FleetArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainsResponse
 * //   Domains: [ // DomainSummaryList
 * //     { // DomainSummary
 * //       DomainName: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       DomainStatus: "PENDING_VALIDATION" || "ASSOCIATING" || "ACTIVE" || "INACTIVE" || "DISASSOCIATING" || "DISASSOCIATED" || "FAILED_TO_ASSOCIATE" || "FAILED_TO_DISASSOCIATE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainsCommandInput - {@link ListDomainsCommandInput}
 * @returns {@link ListDomainsCommandOutput}
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
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
export class ListDomainsCommand extends $Command
  .classBuilder<
    ListDomainsCommandInput,
    ListDomainsCommandOutput,
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
  .s("WorkLink", "ListDomains", {})
  .n("WorkLinkClient", "ListDomainsCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainsCommand)
  .de(de_ListDomainsCommand)
  .build() {}
