// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateDomainRequest, DisassociateDomainResponse } from "../models/models_0";
import { de_DisassociateDomainCommand, se_DisassociateDomainCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateDomainCommand}.
 */
export interface DisassociateDomainCommandInput extends DisassociateDomainRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDomainCommand}.
 */
export interface DisassociateDomainCommandOutput extends DisassociateDomainResponse, __MetadataBearer {}

/**
 * <p>Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. </p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateDomainCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateDomainCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // DisassociateDomainRequest
 *   FleetArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDomainCommandInput - {@link DisassociateDomainCommandInput}
 * @returns {@link DisassociateDomainCommandOutput}
 * @see {@link DisassociateDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateDomainCommandOutput} for command's `response` shape.
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
export class DisassociateDomainCommand extends $Command
  .classBuilder<
    DisassociateDomainCommandInput,
    DisassociateDomainCommandOutput,
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
  .s("WorkLink", "DisassociateDomain", {})
  .n("WorkLinkClient", "DisassociateDomainCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateDomainCommand)
  .de(de_DisassociateDomainCommand)
  .build() {}
