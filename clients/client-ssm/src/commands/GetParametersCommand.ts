// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetParametersRequest, GetParametersResult } from "../models/models_0";
import { GetParameters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetParametersCommand}.
 */
export interface GetParametersCommandInput extends GetParametersRequest {}
/**
 * @public
 *
 * The output of {@link GetParametersCommand}.
 */
export interface GetParametersCommandOutput extends GetParametersResult, __MetadataBearer {}

/**
 * <p>Get information about one or more parameters by specifying multiple parameter names.</p>
 *          <note>
 *             <p>To get information about a single parameter, you can use the <a>GetParameter</a>
 *     operation instead.</p>
 *          </note>
 *          <p>Parameter names can't contain spaces. The service removes any spaces specified for the
 *    beginning or end of a parameter name. If the specified name for a parameter contains spaces
 *    between characters, the request fails with a <code>ValidationException</code> error.</p>
 *          <note>
 *             <p>Parameter Store throughput defines the number of API transactions per second (TPS) that
 *     Systems Manager can process. This applies to <code>GetParameter</code>,
 *     <code>GetParameters</code>, and <code>PutParameter</code> API calls for your Amazon Web Services account and
 *     Amazon Web Services Region. By default, Parameter Store is configured with a standard throughput quota suitable
 *     for low- to moderate-volume workloads. Applications that retrieve configuration data infrequently
 *     or operate at smaller scale can use this default setting without additional cost.</p>
 *             <p>For higher-volume workloads, you can enable higher throughput. This increases the maximum
 *     number of supported transactions per second for your account and Region. Increased throughput
 *     supports applications and workloads that need concurrent access to multiple parameters. If you
 *     experience <code>ThrottlingException: Rate exceeded</code> errors, enable higher throughput. For
 *     more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-throughput.html">Changing Parameter Store
 *      throughput</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetParametersRequest
 *   Names: [ // ParameterNameList // required
 *     "STRING_VALUE",
 *   ],
 *   WithDecryption: true || false,
 * };
 * const command = new GetParametersCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersResult
 * //   Parameters: [ // ParameterList
 * //     { // Parameter
 * //       Name: "STRING_VALUE",
 * //       Type: "String" || "StringList" || "SecureString",
 * //       Value: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       Selector: "STRING_VALUE",
 * //       SourceResult: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       ARN: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InvalidParameters: [ // ParameterNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetParametersCommandInput - {@link GetParametersCommandInput}
 * @returns {@link GetParametersCommandOutput}
 * @see {@link GetParametersCommandInput} for command's `input` shape.
 * @see {@link GetParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidKeyId} (client fault)
 *  <p>The query key ID isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetParametersCommand extends command<GetParametersCommandInput, GetParametersCommandOutput>(
  _ep0,
  _mw0,
  "GetParameters",
  GetParameters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParametersRequest;
      output: GetParametersResult;
    };
    sdk: {
      input: GetParametersCommandInput;
      output: GetParametersCommandOutput;
    };
  };
}
