// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppInstanceRequest, DescribeAppInstanceResponse } from "../models/models_0";
import { DescribeAppInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceCommand}.
 */
export interface DescribeAppInstanceCommandInput extends DescribeAppInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceCommand}.
 */
export interface DescribeAppInstanceCommandOutput extends DescribeAppInstanceResponse, __MetadataBearer {}

/**
 * Returns the full details of an `AppInstance`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceResponse
 * //   AppInstance: { // AppInstance
 * //     AppInstanceArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     Metadata: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceCommandInput - {@link DescribeAppInstanceCommandInput}
 * @returns {@link DescribeAppInstanceCommandOutput}
 * @see {@link DescribeAppInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class DescribeAppInstanceCommand extends command<DescribeAppInstanceCommandInput, DescribeAppInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppInstance",
  DescribeAppInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppInstanceRequest;
      output: DescribeAppInstanceResponse;
    };
    sdk: {
      input: DescribeAppInstanceCommandInput;
      output: DescribeAppInstanceCommandOutput;
    };
  };
}
