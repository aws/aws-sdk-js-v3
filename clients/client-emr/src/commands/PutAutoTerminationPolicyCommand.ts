// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAutoTerminationPolicyInput, PutAutoTerminationPolicyOutput } from "../models/models_0";
import { PutAutoTerminationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAutoTerminationPolicyCommand}.
 */
export interface PutAutoTerminationPolicyCommandInput extends PutAutoTerminationPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutAutoTerminationPolicyCommand}.
 */
export interface PutAutoTerminationPolicyCommandOutput extends PutAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * > **Note:** Auto-termination is supported in Amazon EMR releases 5.30.0 and 6.1.0 and later. For more information, see [Using an auto-termination policy](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html).
 *
 * Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see [Control cluster termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // PutAutoTerminationPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 *   AutoTerminationPolicy: { // AutoTerminationPolicy
 *     IdleTimeout: Number("long"),
 *   },
 * };
 * const command = new PutAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAutoTerminationPolicyCommandInput - {@link PutAutoTerminationPolicyCommandInput}
 * @returns {@link PutAutoTerminationPolicyCommandOutput}
 * @see {@link PutAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 *
 * Base exception class for all service exceptions from EMR service.
 *
 * @public
 */
export class PutAutoTerminationPolicyCommand extends command<PutAutoTerminationPolicyCommandInput, PutAutoTerminationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutAutoTerminationPolicy",
  PutAutoTerminationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAutoTerminationPolicyInput;
      output: {};
    };
    sdk: {
      input: PutAutoTerminationPolicyCommandInput;
      output: PutAutoTerminationPolicyCommandOutput;
    };
  };
}
