// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/models_2";
import { ListTargetsForPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTargetsForPolicyCommand}.
 */
export interface ListTargetsForPolicyCommandInput extends ListTargetsForPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsForPolicyCommand}.
 */
export interface ListTargetsForPolicyCommandOutput extends ListTargetsForPolicyResponse, __MetadataBearer {}

/**
 * List targets for the specified policy.
 *
 * Requires permission to access the [ListTargetsForPolicy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListTargetsForPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   marker: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListTargetsForPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsForPolicyResponse
 * //   targets: [ // PolicyTargets
 * //     "STRING_VALUE",
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsForPolicyCommandInput - {@link ListTargetsForPolicyCommandInput}
 * @returns {@link ListTargetsForPolicyCommandOutput}
 * @see {@link ListTargetsForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForPolicyCommandOutput} for command's `response` shape.
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
export class ListTargetsForPolicyCommand extends command<ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput>(
  _ep0,
  _mw0,
  "ListTargetsForPolicy",
  ListTargetsForPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsForPolicyRequest;
      output: ListTargetsForPolicyResponse;
    };
    sdk: {
      input: ListTargetsForPolicyCommandInput;
      output: ListTargetsForPolicyCommandOutput;
    };
  };
}
