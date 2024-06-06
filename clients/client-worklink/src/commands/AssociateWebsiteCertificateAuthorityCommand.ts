// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateWebsiteCertificateAuthorityRequest,
  AssociateWebsiteCertificateAuthorityResponse,
} from "../models/models_0";
import {
  de_AssociateWebsiteCertificateAuthorityCommand,
  se_AssociateWebsiteCertificateAuthorityCommand,
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
 * The input for {@link AssociateWebsiteCertificateAuthorityCommand}.
 */
export interface AssociateWebsiteCertificateAuthorityCommandInput extends AssociateWebsiteCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWebsiteCertificateAuthorityCommand}.
 */
export interface AssociateWebsiteCertificateAuthorityCommandOutput
  extends AssociateWebsiteCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * <p>Imports the root certificate of a certificate authority (CA) used to obtain TLS
 *             certificates used by associated websites within the company network.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, AssociateWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, AssociateWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // AssociateWebsiteCertificateAuthorityRequest
 *   FleetArn: "STRING_VALUE", // required
 *   Certificate: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 * };
 * const command = new AssociateWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // AssociateWebsiteCertificateAuthorityResponse
 * //   WebsiteCaId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateWebsiteCertificateAuthorityCommandInput - {@link AssociateWebsiteCertificateAuthorityCommandInput}
 * @returns {@link AssociateWebsiteCertificateAuthorityCommandOutput}
 * @see {@link AssociateWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link AssociateWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class AssociateWebsiteCertificateAuthorityCommand extends $Command
  .classBuilder<
    AssociateWebsiteCertificateAuthorityCommandInput,
    AssociateWebsiteCertificateAuthorityCommandOutput,
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
  .s("WorkLink", "AssociateWebsiteCertificateAuthority", {})
  .n("WorkLinkClient", "AssociateWebsiteCertificateAuthorityCommand")
  .f(void 0, void 0)
  .ser(se_AssociateWebsiteCertificateAuthorityCommand)
  .de(de_AssociateWebsiteCertificateAuthorityCommand)
  .build() {}
