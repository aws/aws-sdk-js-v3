// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAttachedPoliciesRequest, ListAttachedPoliciesResponse } from "../models/models_1";
import { ListAttachedPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAttachedPoliciesCommand}.
 */
export interface ListAttachedPoliciesCommandInput extends ListAttachedPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachedPoliciesCommand}.
 */
export interface ListAttachedPoliciesCommandOutput extends ListAttachedPoliciesResponse, __MetadataBearer {}

/**
 * Lists the policies attached to the specified thing group.
 *
 * Requires permission to access the [ListAttachedPolicies](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAttachedPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAttachedPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListAttachedPoliciesRequest
 *   target: "STRING_VALUE", // required
 *   recursive: true || false,
 *   marker: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListAttachedPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachedPoliciesResponse
 * //   policies: [ // Policies
 * //     { // Policy
 * //       policyName: "STRING_VALUE",
 * //       policyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachedPoliciesCommandInput - {@link ListAttachedPoliciesCommandInput}
 * @returns {@link ListAttachedPoliciesCommandOutput}
 * @see {@link ListAttachedPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedPoliciesCommandOutput} for command's `response` shape.
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
export class ListAttachedPoliciesCommand extends command<ListAttachedPoliciesCommandInput, ListAttachedPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListAttachedPolicies",
  ListAttachedPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachedPoliciesRequest;
      output: ListAttachedPoliciesResponse;
    };
    sdk: {
      input: ListAttachedPoliciesCommandInput;
      output: ListAttachedPoliciesCommandOutput;
    };
  };
}
