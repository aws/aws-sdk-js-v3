// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetParameterRequest, GetParameterResult } from "../models/models_0";
import { GetParameter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetParameterCommand}.
 */
export interface GetParameterCommandInput extends GetParameterRequest {}
/**
 * @public
 *
 * The output of {@link GetParameterCommand}.
 */
export interface GetParameterCommandOutput extends GetParameterResult, __MetadataBearer {}

/**
 * Get information about a single parameter by specifying the parameter name.
 *
 * Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a `ValidationException` error.
 *
 * > **Note:** To get information about more than one parameter at a time, use the GetParameters operation.
 *
 * > **Note:**
 * >
 * > Parameter Store throughput defines the number of API transactions per second (TPS) that Systems Manager can process. This applies to `GetParameter`, `GetParameters`, and `PutParameter` API calls for your Amazon Web Services account and Amazon Web Services Region. By default, Parameter Store is configured with a standard throughput quota suitable for low- to moderate-volume workloads. Applications that retrieve configuration data infrequently or operate at smaller scale can use this default setting without additional cost.
 * >
 * > For higher-volume workloads, you can enable higher throughput. This increases the maximum number of supported transactions per second for your account and Region. Increased throughput supports applications and workloads that need concurrent access to multiple parameters. If you experience `ThrottlingException: Rate exceeded` errors, enable higher throughput. For more information, see [Changing Parameter Store throughput](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-throughput.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetParameterRequest
 *   Name: "STRING_VALUE", // required
 *   WithDecryption: true || false,
 * };
 * const command = new GetParameterCommand(input);
 * const response = await client.send(command);
 * // { // GetParameterResult
 * //   Parameter: { // Parameter
 * //     Name: "STRING_VALUE",
 * //     Type: "String" || "StringList" || "SecureString",
 * //     Value: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     Selector: "STRING_VALUE",
 * //     SourceResult: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     ARN: "STRING_VALUE",
 * //     DataType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetParameterCommandInput - {@link GetParameterCommandInput}
 * @returns {@link GetParameterCommandOutput}
 * @see {@link GetParameterCommandInput} for command's `input` shape.
 * @see {@link GetParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidKeyId} (client fault)
 *
 * The query key ID isn't valid.
 *
 * @throws {@link ParameterNotFound} (client fault)
 *
 * The parameter couldn't be found. Verify the name and try again.
 *
 * > **Note:** For the `DeleteParameter` and `GetParameter` actions, if the specified parameter doesn't exist, the `ParameterNotFound` exception is *not* recorded in CloudTrail event logs.
 *
 * @throws {@link ParameterVersionNotFound} (client fault)
 *
 * The specified parameter version wasn't found. Verify the parameter name and version, and try again.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class GetParameterCommand extends command<GetParameterCommandInput, GetParameterCommandOutput>(
  _ep0,
  _mw0,
  "GetParameter",
  GetParameter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParameterRequest;
      output: GetParameterResult;
    };
    sdk: {
      input: GetParameterCommandInput;
      output: GetParameterCommandOutput;
    };
  };
}
