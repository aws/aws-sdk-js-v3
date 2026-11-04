// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAuthorizerRequest, CreateAuthorizerResponse } from "../models/models_0";
import { CreateAuthorizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandInput extends CreateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandOutput extends CreateAuthorizerResponse, __MetadataBearer {}

/**
 * Creates an authorizer.
 *
 * Requires permission to access the [CreateAuthorizer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 *   authorizerFunctionArn: "STRING_VALUE", // required
 *   tokenKeyName: "STRING_VALUE",
 *   tokenSigningPublicKeys: { // PublicKeyMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   status: "ACTIVE" || "INACTIVE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   signingDisabled: true || false,
 *   enableCachingForHttp: true || false,
 * };
 * const command = new CreateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // CreateAuthorizerResponse
 * //   authorizerName: "STRING_VALUE",
 * //   authorizerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAuthorizerCommandInput - {@link CreateAuthorizerCommandInput}
 * @returns {@link CreateAuthorizerCommandOutput}
 * @see {@link CreateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link CreateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreateAuthorizerCommand extends command<CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput>(
  _ep0,
  _mw0,
  "CreateAuthorizer",
  CreateAuthorizer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAuthorizerRequest;
      output: CreateAuthorizerResponse;
    };
    sdk: {
      input: CreateAuthorizerCommandInput;
      output: CreateAuthorizerCommandOutput;
    };
  };
}
