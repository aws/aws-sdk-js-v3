// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDefaultAuthorizerRequest, DescribeDefaultAuthorizerResponse } from "../models/models_1";
import { DescribeDefaultAuthorizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDefaultAuthorizerCommand}.
 */
export interface DescribeDefaultAuthorizerCommandInput extends DescribeDefaultAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDefaultAuthorizerCommand}.
 */
export interface DescribeDefaultAuthorizerCommandOutput extends DescribeDefaultAuthorizerResponse, __MetadataBearer {}

/**
 * Describes the default authorizer.
 *
 * Requires permission to access the [DescribeDefaultAuthorizer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new DescribeDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDefaultAuthorizerResponse
 * //   authorizerDescription: { // AuthorizerDescription
 * //     authorizerName: "STRING_VALUE",
 * //     authorizerArn: "STRING_VALUE",
 * //     authorizerFunctionArn: "STRING_VALUE",
 * //     tokenKeyName: "STRING_VALUE",
 * //     tokenSigningPublicKeys: { // PublicKeyMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     status: "ACTIVE" || "INACTIVE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     signingDisabled: true || false,
 * //     enableCachingForHttp: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDefaultAuthorizerCommandInput - {@link DescribeDefaultAuthorizerCommandInput}
 * @returns {@link DescribeDefaultAuthorizerCommandOutput}
 * @see {@link DescribeDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultAuthorizerCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class DescribeDefaultAuthorizerCommand extends command<DescribeDefaultAuthorizerCommandInput, DescribeDefaultAuthorizerCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDefaultAuthorizer",
  DescribeDefaultAuthorizer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeDefaultAuthorizerResponse;
    };
    sdk: {
      input: DescribeDefaultAuthorizerCommandInput;
      output: DescribeDefaultAuthorizerCommandOutput;
    };
  };
}
