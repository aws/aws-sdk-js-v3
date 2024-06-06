// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDomainMetadataRequest, UpdateDomainMetadataResponse } from "../models/models_0";
import { de_UpdateDomainMetadataCommand, se_UpdateDomainMetadataCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainMetadataCommand}.
 */
export interface UpdateDomainMetadataCommandInput extends UpdateDomainMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainMetadataCommand}.
 */
export interface UpdateDomainMetadataCommandOutput extends UpdateDomainMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates domain metadata, such as DisplayName.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateDomainMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateDomainMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // UpdateDomainMetadataRequest
 *   FleetArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 * };
 * const command = new UpdateDomainMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDomainMetadataCommandInput - {@link UpdateDomainMetadataCommandInput}
 * @returns {@link UpdateDomainMetadataCommandOutput}
 * @see {@link UpdateDomainMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainMetadataCommandOutput} for command's `response` shape.
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
export class UpdateDomainMetadataCommand extends $Command
  .classBuilder<
    UpdateDomainMetadataCommandInput,
    UpdateDomainMetadataCommandOutput,
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
  .s("WorkLink", "UpdateDomainMetadata", {})
  .n("WorkLinkClient", "UpdateDomainMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDomainMetadataCommand)
  .de(de_UpdateDomainMetadataCommand)
  .build() {}
