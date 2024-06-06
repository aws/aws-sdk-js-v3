// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFleetRequest, DeleteFleetResponse } from "../models/models_0";
import { de_DeleteFleetCommand, se_DeleteFleetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetCommand}.
 */
export interface DeleteFleetCommandInput extends DeleteFleetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetCommand}.
 */
export interface DeleteFleetCommandOutput extends DeleteFleetResponse, __MetadataBearer {}

/**
 * <p>Deletes a fleet. Prevents users from accessing previously associated websites. </p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DeleteFleetCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DeleteFleetCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // DeleteFleetRequest
 *   FleetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFleetCommandInput - {@link DeleteFleetCommandInput}
 * @returns {@link DeleteFleetCommandOutput}
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
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
export class DeleteFleetCommand extends $Command
  .classBuilder<
    DeleteFleetCommandInput,
    DeleteFleetCommandOutput,
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
  .s("WorkLink", "DeleteFleet", {})
  .n("WorkLinkClient", "DeleteFleetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFleetCommand)
  .de(de_DeleteFleetCommand)
  .build() {}
