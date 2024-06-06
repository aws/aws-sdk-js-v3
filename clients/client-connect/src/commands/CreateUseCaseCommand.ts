// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUseCaseRequest, CreateUseCaseResponse } from "../models/models_0";
import { de_CreateUseCaseCommand, se_CreateUseCaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUseCaseCommand}.
 */
export interface CreateUseCaseCommandInput extends CreateUseCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateUseCaseCommand}.
 */
export interface CreateUseCaseCommandOutput extends CreateUseCaseResponse, __MetadataBearer {}

/**
 * <p>Creates a use case for an integration association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateUseCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateUseCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateUseCaseRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IntegrationAssociationId: "STRING_VALUE", // required
 *   UseCaseType: "RULES_EVALUATION" || "CONNECT_CAMPAIGNS", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateUseCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateUseCaseResponse
 * //   UseCaseId: "STRING_VALUE",
 * //   UseCaseArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUseCaseCommandInput - {@link CreateUseCaseCommandInput}
 * @returns {@link CreateUseCaseCommandOutput}
 * @see {@link CreateUseCaseCommandInput} for command's `input` shape.
 * @see {@link CreateUseCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class CreateUseCaseCommand extends $Command
  .classBuilder<
    CreateUseCaseCommandInput,
    CreateUseCaseCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "CreateUseCase", {})
  .n("ConnectClient", "CreateUseCaseCommand")
  .f(void 0, void 0)
  .ser(se_CreateUseCaseCommand)
  .de(de_CreateUseCaseCommand)
  .build() {}
