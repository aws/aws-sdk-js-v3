// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetResourcePolicyInput, GetResourcePolicyOutput } from "../models/models_0";
import { GetResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandInput extends GetResourcePolicyInput {}
/**
 * @public
 *
 * The output of {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandOutput extends GetResourcePolicyOutput, __MetadataBearer {}

/**
 * Returns a policy attached to the specified data stream or consumer. Request patterns can be one of the following:
 *
 * - Data stream pattern: `arn:aws.*:kinesis:.*:\d\{12\}:.*stream/\S+`
 * - Consumer pattern: `^(arn):aws.*:kinesis:.*:\d\{12\}:.*stream\/[a-zA-Z0-9_.-]+\/consumer\/[a-zA-Z0-9_.-]+:[0-9]+`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, GetResourcePolicyCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, GetResourcePolicyCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // GetResourcePolicyInput
 *   ResourceARN: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePolicyOutput
 * //   Policy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetResourcePolicyCommandInput - {@link GetResourcePolicyCommandInput}
 * @returns {@link GetResourcePolicyCommandOutput}
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class GetResourcePolicyCommand extends command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>(
  _ep3,
  _mw0,
  "GetResourcePolicy",
  GetResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePolicyInput;
      output: GetResourcePolicyOutput;
    };
    sdk: {
      input: GetResourcePolicyCommandInput;
      output: GetResourcePolicyCommandOutput;
    };
  };
}
