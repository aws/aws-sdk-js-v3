// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateWebsiteCertificateAuthorityRequest,
  DisassociateWebsiteCertificateAuthorityResponse,
} from "../models/models_0";
import {
  de_DisassociateWebsiteCertificateAuthorityCommand,
  se_DisassociateWebsiteCertificateAuthorityCommand,
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
 * The input for {@link DisassociateWebsiteCertificateAuthorityCommand}.
 */
export interface DisassociateWebsiteCertificateAuthorityCommandInput
  extends DisassociateWebsiteCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWebsiteCertificateAuthorityCommand}.
 */
export interface DisassociateWebsiteCertificateAuthorityCommandOutput
  extends DisassociateWebsiteCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * <p>Removes a certificate authority (CA).</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // DisassociateWebsiteCertificateAuthorityRequest
 *   FleetArn: "STRING_VALUE", // required
 *   WebsiteCaId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWebsiteCertificateAuthorityCommandInput - {@link DisassociateWebsiteCertificateAuthorityCommandInput}
 * @returns {@link DisassociateWebsiteCertificateAuthorityCommandOutput}
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
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
export class DisassociateWebsiteCertificateAuthorityCommand extends $Command
  .classBuilder<
    DisassociateWebsiteCertificateAuthorityCommandInput,
    DisassociateWebsiteCertificateAuthorityCommandOutput,
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
  .s("WorkLink", "DisassociateWebsiteCertificateAuthority", {})
  .n("WorkLinkClient", "DisassociateWebsiteCertificateAuthorityCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateWebsiteCertificateAuthorityCommand)
  .de(de_DisassociateWebsiteCertificateAuthorityCommand)
  .build() {}
