// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUsagePlanRequest, UsagePlan } from "../models/models_0";
import { UpdateUsagePlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUsagePlanCommand}.
 */
export interface UpdateUsagePlanCommandInput extends UpdateUsagePlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUsagePlanCommand}.
 */
export interface UpdateUsagePlanCommandOutput extends UsagePlan, __MetadataBearer {}

/**
 * Updates a usage plan of a given plan Id.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateUsagePlanRequest
 *   usagePlanId: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateUsagePlanCommand(input);
 * const response = await client.send(command);
 * // { // UsagePlan
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   apiStages: [ // ListOfApiStage
 * //     { // ApiStage
 * //       apiId: "STRING_VALUE",
 * //       stage: "STRING_VALUE",
 * //       throttle: { // MapOfApiStageThrottleSettings
 * //         "<keys>": { // ThrottleSettings
 * //           burstLimit: Number("int"),
 * //           rateLimit: Number("double"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   throttle: {
 * //     burstLimit: Number("int"),
 * //     rateLimit: Number("double"),
 * //   },
 * //   quota: { // QuotaSettings
 * //     limit: Number("int"),
 * //     offset: Number("int"),
 * //     period: "DAY" || "WEEK" || "MONTH",
 * //   },
 * //   productCode: "STRING_VALUE",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUsagePlanCommandInput - {@link UpdateUsagePlanCommandInput}
 * @returns {@link UpdateUsagePlanCommandOutput}
 * @see {@link UpdateUsagePlanCommandInput} for command's `input` shape.
 * @see {@link UpdateUsagePlanCommandOutput} for command's `response` shape.
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
export class UpdateUsagePlanCommand extends command<UpdateUsagePlanCommandInput, UpdateUsagePlanCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUsagePlan",
  UpdateUsagePlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUsagePlanRequest;
      output: UsagePlan;
    };
    sdk: {
      input: UpdateUsagePlanCommandInput;
      output: UpdateUsagePlanCommandOutput;
    };
  };
}
