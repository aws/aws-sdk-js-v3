// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDestinationPolicyRequest } from "../models/models_0";
import { PutDestinationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDestinationPolicyCommand}.
 */
export interface PutDestinationPolicyCommandInput extends PutDestinationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutDestinationPolicyCommand}.
 */
export interface PutDestinationPolicyCommandOutput extends __MetadataBearer {}

/**
 * Creates or updates an access policy associated with an existing destination. An access policy is an [IAM policy document](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html) that is used to authorize claims to register a subscription filter against a given destination.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDestinationPolicyRequest
 *   destinationName: "STRING_VALUE", // required
 *   accessPolicy: "STRING_VALUE", // required
 *   forceUpdate: true || false,
 * };
 * const command = new PutDestinationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDestinationPolicyCommandInput - {@link PutDestinationPolicyCommandInput}
 * @returns {@link PutDestinationPolicyCommandOutput}
 * @see {@link PutDestinationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDestinationPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class PutDestinationPolicyCommand extends command<PutDestinationPolicyCommandInput, PutDestinationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutDestinationPolicy",
  PutDestinationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDestinationPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutDestinationPolicyCommandInput;
      output: PutDestinationPolicyCommandOutput;
    };
  };
}
