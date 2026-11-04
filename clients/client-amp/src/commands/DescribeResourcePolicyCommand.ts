// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeResourcePolicyRequest, DescribeResourcePolicyResponse } from "../models/models_0";
import { DescribeResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeResourcePolicyCommand}.
 */
export interface DescribeResourcePolicyCommandInput extends DescribeResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourcePolicyCommand}.
 */
export interface DescribeResourcePolicyCommandOutput extends DescribeResourcePolicyResponse, __MetadataBearer {}

/**
 * Returns information about the resource-based policy attached to an Amazon Managed Service for Prometheus workspace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeResourcePolicyCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeResourcePolicyCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeResourcePolicyRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePolicyResponse
 * //   policyDocument: "STRING_VALUE", // required
 * //   policyStatus: "STRING_VALUE", // required
 * //   revisionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeResourcePolicyCommandInput - {@link DescribeResourcePolicyCommandInput}
 * @returns {@link DescribeResourcePolicyCommandOutput}
 * @see {@link DescribeResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class DescribeResourcePolicyCommand extends command<DescribeResourcePolicyCommandInput, DescribeResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeResourcePolicy",
  DescribeResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourcePolicyRequest;
      output: DescribeResourcePolicyResponse;
    };
    sdk: {
      input: DescribeResourcePolicyCommandInput;
      output: DescribeResourcePolicyCommandOutput;
    };
  };
}
