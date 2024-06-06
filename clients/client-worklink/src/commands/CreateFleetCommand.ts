// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFleetRequest, CreateFleetResponse } from "../models/models_0";
import { de_CreateFleetCommand, se_CreateFleetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandInput extends CreateFleetRequest {}
/**
 * @public
 *
 * The output of {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandOutput extends CreateFleetResponse, __MetadataBearer {}

/**
 * <p>Creates a fleet. A fleet consists of resources and the configuration that delivers
 *             associated websites to authorized users who download and set up the Amazon WorkLink app.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, CreateFleetCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, CreateFleetCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // CreateFleetRequest
 *   FleetName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   OptimizeForEndUserLocation: true || false,
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetResponse
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFleetCommandInput - {@link CreateFleetCommandInput}
 * @returns {@link CreateFleetCommandOutput}
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
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
export class CreateFleetCommand extends $Command
  .classBuilder<
    CreateFleetCommandInput,
    CreateFleetCommandOutput,
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
  .s("WorkLink", "CreateFleet", {})
  .n("WorkLinkClient", "CreateFleetCommand")
  .f(void 0, void 0)
  .ser(se_CreateFleetCommand)
  .de(de_CreateFleetCommand)
  .build() {}
