// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUsagePlanKeyRequest } from "../models/models_0";
import { de_DeleteUsagePlanKeyCommand, se_DeleteUsagePlanKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUsagePlanKeyCommand}.
 */
export interface DeleteUsagePlanKeyCommandInput extends DeleteUsagePlanKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUsagePlanKeyCommand}.
 */
export interface DeleteUsagePlanKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a usage plan key  and remove the underlying API key from the associated usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // DeleteUsagePlanKeyRequest
 *   usagePlanId: "STRING_VALUE", // required
 *   keyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUsagePlanKeyCommandInput - {@link DeleteUsagePlanKeyCommandInput}
 * @returns {@link DeleteUsagePlanKeyCommandOutput}
 * @see {@link DeleteUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 * @public
 */
export class DeleteUsagePlanKeyCommand extends $Command
  .classBuilder<
    DeleteUsagePlanKeyCommandInput,
    DeleteUsagePlanKeyCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "DeleteUsagePlanKey", {})
  .n("APIGatewayClient", "DeleteUsagePlanKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUsagePlanKeyCommand)
  .de(de_DeleteUsagePlanKeyCommand)
  .build() {}
