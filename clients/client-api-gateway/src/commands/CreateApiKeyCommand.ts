// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApiKey, CreateApiKeyRequest } from "../models/models_0";
import { CreateApiKey } from "../schemas/schemas_13_Api";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandInput extends CreateApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandOutput extends ApiKey, __MetadataBearer {}

/**
 * <p>Create an ApiKey resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateApiKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // CreateApiKeyRequest
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   enabled: true || false,
 *   generateDistinctId: true || false,
 *   value: "STRING_VALUE",
 *   stageKeys: [ // ListOfStageKeys
 *     { // StageKey
 *       restApiId: "STRING_VALUE",
 *       stageName: "STRING_VALUE",
 *     },
 *   ],
 *   customerId: "STRING_VALUE",
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // ApiKey
 * //   id: "STRING_VALUE",
 * //   value: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   customerId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   enabled: true || false,
 * //   createdDate: new Date("TIMESTAMP"),
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   stageKeys: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApiKeyCommandInput - {@link CreateApiKeyCommandInput}
 * @returns {@link CreateApiKeyCommandOutput}
 * @see {@link CreateApiKeyCommandInput} for command's `input` shape.
 * @see {@link CreateApiKeyCommandOutput} for command's `response` shape.
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
export class CreateApiKeyCommand extends $Command
  .classBuilder<
    CreateApiKeyCommandInput,
    CreateApiKeyCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "CreateApiKey", {})
  .n("APIGatewayClient", "CreateApiKeyCommand")
  .sc(CreateApiKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApiKeyRequest;
      output: ApiKey;
    };
    sdk: {
      input: CreateApiKeyCommandInput;
      output: CreateApiKeyCommandOutput;
    };
  };
}
