// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUsageRequest, Usage } from "../models/models_0";
import { de_UpdateUsageCommand, se_UpdateUsageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUsageCommand}.
 */
export interface UpdateUsageCommandInput extends UpdateUsageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUsageCommand}.
 */
export interface UpdateUsageCommandOutput extends Usage, __MetadataBearer {}

/**
 * <p>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateUsageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateUsageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateUsageRequest
 *   usagePlanId: "STRING_VALUE", // required
 *   keyId: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateUsageCommand(input);
 * const response = await client.send(command);
 * // { // Usage
 * //   usagePlanId: "STRING_VALUE",
 * //   startDate: "STRING_VALUE",
 * //   endDate: "STRING_VALUE",
 * //   items: { // MapOfKeyUsages
 * //     "<keys>": [ // ListOfUsage
 * //       [ // ListOfLong
 * //         Number("long"),
 * //       ],
 * //     ],
 * //   },
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateUsageCommandInput - {@link UpdateUsageCommandInput}
 * @returns {@link UpdateUsageCommandOutput}
 * @see {@link UpdateUsageCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
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
 *
 * @public
 */
export class UpdateUsageCommand extends $Command
  .classBuilder<
    UpdateUsageCommandInput,
    UpdateUsageCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "UpdateUsage", {})
  .n("APIGatewayClient", "UpdateUsageCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUsageCommand)
  .de(de_UpdateUsageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUsageRequest;
      output: Usage;
    };
    sdk: {
      input: UpdateUsageCommandInput;
      output: UpdateUsageCommandOutput;
    };
  };
}
