// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcePoliciesInput, GetResourcePoliciesOutput } from "../models/models_0";
import { GetResourcePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcePoliciesCommand}.
 */
export interface GetResourcePoliciesCommandInput extends GetResourcePoliciesInput {}
/**
 * @public
 *
 * The output of {@link GetResourcePoliciesCommand}.
 */
export interface GetResourcePoliciesCommandOutput extends GetResourcePoliciesOutput, __MetadataBearer {}

/**
 * <p>Retrieves the resource policies attached to the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetResourcePoliciesCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetResourcePoliciesInput
 *   resourceArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePoliciesOutput
 * //   resourcePolicies: [ // ResourcePolicyList // required
 * //     { // ResourcePolicy
 * //       policyDocument: "STRING_VALUE", // required
 * //       policyId: "STRING_VALUE", // required
 * //       ramResourceShareRegion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcePoliciesCommandInput - {@link GetResourcePoliciesCommandInput}
 * @returns {@link GetResourcePoliciesCommandOutput}
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class GetResourcePoliciesCommand extends command<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "GetResourcePolicies",
  GetResourcePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePoliciesInput;
      output: GetResourcePoliciesOutput;
    };
    sdk: {
      input: GetResourcePoliciesCommandInput;
      output: GetResourcePoliciesCommandOutput;
    };
  };
}
