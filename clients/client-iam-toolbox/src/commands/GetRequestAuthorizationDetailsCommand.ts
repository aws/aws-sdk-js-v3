// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRequestAuthorizationDetailsInput, GetRequestAuthorizationDetailsOutput } from "../models/models_0";
import { GetRequestAuthorizationDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRequestAuthorizationDetailsCommand}.
 */
export interface GetRequestAuthorizationDetailsCommandInput extends GetRequestAuthorizationDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetRequestAuthorizationDetailsCommand}.
 */
export interface GetRequestAuthorizationDetailsCommandOutput extends GetRequestAuthorizationDetailsOutput, __MetadataBearer {}

/**
 * <p>Retrieves the authorization details for a specific access denied request. The details include the request context, the evaluations performed, and the policies that were evaluated.</p> <p>Use this operation to understand why a request was denied. Supported services include an authorization ID in the access denied error message. Pass that ID to this operation to retrieve the details.</p> <p>Authorization details are available for at least 24 hours after the denial.</p> <p>To use this operation, you must have the <code>iam:GetRequestAuthorizationDetails</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMToolboxClient, GetRequestAuthorizationDetailsCommand } from "@aws-sdk/client-iam-toolbox"; // ES Modules import
 * // const { IAMToolboxClient, GetRequestAuthorizationDetailsCommand } = require("@aws-sdk/client-iam-toolbox"); // CommonJS import
 * // import type { IAMToolboxClientConfig } from "@aws-sdk/client-iam-toolbox";
 * const config = {}; // type is IAMToolboxClientConfig
 * const client = new IAMToolboxClient(config);
 * const input = { // GetRequestAuthorizationDetailsInput
 *   authorizationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetRequestAuthorizationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetRequestAuthorizationDetailsOutput
 * //   requestContext: { // AuthorizationContext // required
 * //     "<keys>": "DOCUMENT_VALUE",
 * //   },
 * //   evaluations: [ // Evaluations // required
 * //     { // Evaluation
 * //       action: "STRING_VALUE", // required
 * //       resource: "STRING_VALUE", // required
 * //       context: {
 * //         "<keys>": "DOCUMENT_VALUE",
 * //       },
 * //       evaluatedEffect: "ALLOW" || "EXPLICIT_DENY" || "IMPLICIT_DENY",
 * //       matchedPolicies: [ // MatchedPolicyList
 * //         { // MatchedPolicy
 * //           uri: "STRING_VALUE", // required
 * //           matchedStatements: [ // MatchedStatementList
 * //             { // MatchedStatement
 * //               sid: "STRING_VALUE",
 * //               evaluatedEffect: "ALLOW" || "DENY",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   policies: [ // PolicyInfoList // required
 * //     { // PolicyInfo
 * //       type: "IDENTITY_BASED_POLICY" || "RESOURCE_BASED_POLICY" || "PERMISSIONS_BOUNDARY" || "SESSION_POLICY" || "SERVICE_CONTROL_POLICY" || "RESOURCE_CONTROL_POLICY" || "VPC_ENDPOINT_POLICY",
 * //       inline: true || false,
 * //       uri: "STRING_VALUE",
 * //       attachedTo: [ // AttachedToList
 * //         { // AttachedTo
 * //           arn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRequestAuthorizationDetailsCommandInput - {@link GetRequestAuthorizationDetailsCommandInput}
 * @returns {@link GetRequestAuthorizationDetailsCommandOutput}
 * @see {@link GetRequestAuthorizationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetRequestAuthorizationDetailsCommandOutput} for command's `response` shape.
 * @see {@link IAMToolboxClientResolvedConfig | config} for IAMToolboxClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request. Try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested authorization details do not exist in this region or have expired. Verify that the authorization ID from the access denied error message is correct and the call is made in the region where the denial occurred. Ensure that the calling principal belongs to the same account or organization as the original denied request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is malformed or is missing one or more required parameters. Check the request parameters and try again.</p>
 *
 * @throws {@link IAMToolboxServiceException}
 * <p>Base exception class for all service exceptions from IAMToolbox service.</p>
 *
 *
 * @public
 */
export class GetRequestAuthorizationDetailsCommand extends command<GetRequestAuthorizationDetailsCommandInput, GetRequestAuthorizationDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetRequestAuthorizationDetails",
  GetRequestAuthorizationDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRequestAuthorizationDetailsInput;
      output: GetRequestAuthorizationDetailsOutput;
    };
    sdk: {
      input: GetRequestAuthorizationDetailsCommandInput;
      output: GetRequestAuthorizationDetailsCommandOutput;
    };
  };
}
