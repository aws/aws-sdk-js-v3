// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUsageRequest, Usage } from "../models/models_0";
import { UpdateUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateUsageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateUsageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
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
 *
 * The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded the rate limit. Retry after the specified time period.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource is not found. Make sure that the request URI is correct.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request has reached its throttling limit. Retry after the specified time period.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The request is denied because the caller has insufficient permissions.
 *
 * @throws {@link APIGatewayServiceException}
 *
 * Base exception class for all service exceptions from APIGateway service.
 *
 * @public
 */
export class UpdateUsageCommand extends command<UpdateUsageCommandInput, UpdateUsageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUsage",
  UpdateUsage$
) {
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
