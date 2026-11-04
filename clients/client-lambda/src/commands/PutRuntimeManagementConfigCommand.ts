// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRuntimeManagementConfigRequest, PutRuntimeManagementConfigResponse } from "../models/models_0";
import { PutRuntimeManagementConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRuntimeManagementConfigCommand}.
 */
export interface PutRuntimeManagementConfigCommandInput extends PutRuntimeManagementConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutRuntimeManagementConfigCommand}.
 */
export interface PutRuntimeManagementConfigCommandOutput extends PutRuntimeManagementConfigResponse, __MetadataBearer {}

/**
 * Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutRuntimeManagementConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutRuntimeManagementConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutRuntimeManagementConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 *   UpdateRuntimeOn: "Auto" || "Manual" || "FunctionUpdate", // required
 *   RuntimeVersionArn: "STRING_VALUE",
 * };
 * const command = new PutRuntimeManagementConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutRuntimeManagementConfigResponse
 * //   UpdateRuntimeOn: "Auto" || "Manual" || "FunctionUpdate", // required
 * //   FunctionArn: "STRING_VALUE", // required
 * //   RuntimeVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutRuntimeManagementConfigCommandInput - {@link PutRuntimeManagementConfigCommandInput}
 * @returns {@link PutRuntimeManagementConfigCommandOutput}
 * @see {@link PutRuntimeManagementConfigCommandInput} for command's `input` shape.
 * @see {@link PutRuntimeManagementConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class PutRuntimeManagementConfigCommand extends command<PutRuntimeManagementConfigCommandInput, PutRuntimeManagementConfigCommandOutput>(
  _ep0,
  _mw0,
  "PutRuntimeManagementConfig",
  PutRuntimeManagementConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRuntimeManagementConfigRequest;
      output: PutRuntimeManagementConfigResponse;
    };
    sdk: {
      input: PutRuntimeManagementConfigCommandInput;
      output: PutRuntimeManagementConfigCommandOutput;
    };
  };
}
