// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWebFunctionEndpointsRequest, ListWebFunctionEndpointsResponse } from "../models/models_0";
import { ListWebFunctionEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWebFunctionEndpointsCommand}.
 */
export interface ListWebFunctionEndpointsCommandInput extends ListWebFunctionEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebFunctionEndpointsCommand}.
 */
export interface ListWebFunctionEndpointsCommandOutput extends ListWebFunctionEndpointsResponse, __MetadataBearer {}

/**
 * <p>Lists endpoints for a web function. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, ListWebFunctionEndpointsCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, ListWebFunctionEndpointsCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // ListWebFunctionEndpointsRequest
 *   functionName: "STRING_VALUE", // required
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWebFunctionEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebFunctionEndpointsResponse
 * //   endpoints: [ // FunctionEndpointSummaryList // required
 * //     { // FunctionEndpointSummary
 * //       endpointArn: "STRING_VALUE", // required
 * //       endpointName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       endpointType: "HomeRegion" || "MultiRegion" || "PerRegion", // required
 * //       domainName: "STRING_VALUE", // required
 * //       authType: "ApplicationManaged" || "IamAuth", // required
 * //       autoDeploymentMode: "LatestRevision" || "Disabled", // required
 * //       revisionWeights: [ // RevisionWeightList // required
 * //         { // RevisionWeight
 * //           revisionId: "STRING_VALUE", // required
 * //           weight: Number("int"), // required
 * //         },
 * //       ],
 * //       regions: [ // RegionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       scalingConfig: { // ScalingConfig
 * //         maxEnvironments: Number("int"),
 * //       },
 * //       throttleConfig: { // ThrottleConfig
 * //         rateLimit: Number("int"),
 * //       },
 * //       state: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //       stateReason: "STRING_VALUE", // required
 * //       updateStatus: "InProgress" || "Successful" || "Failed",
 * //       updateStatusReason: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebFunctionEndpointsCommandInput - {@link ListWebFunctionEndpointsCommandInput}
 * @returns {@link ListWebFunctionEndpointsCommandOutput}
 * @see {@link ListWebFunctionEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListWebFunctionEndpointsCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check the IAM policies for your identity and any resource-based policy on the web function.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error in the service. Retry the request. If the error persists, open a support case.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified web function, revision, endpoint, or resource-based policy doesn't exist. Verify the resource identifier and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the request rate that Lambda allows for your account. Reduce the frequency of requests and retry with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation because a parameter was missing, malformed, or outside the allowed range. Check the request parameters and try again.</p>
 *
 * @throws {@link LambdaWebServiceException}
 * <p>Base exception class for all service exceptions from LambdaWeb service.</p>
 *
 *
 * @public
 */
export class ListWebFunctionEndpointsCommand extends command<ListWebFunctionEndpointsCommandInput, ListWebFunctionEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListWebFunctionEndpoints",
  ListWebFunctionEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebFunctionEndpointsRequest;
      output: ListWebFunctionEndpointsResponse;
    };
    sdk: {
      input: ListWebFunctionEndpointsCommandInput;
      output: ListWebFunctionEndpointsCommandOutput;
    };
  };
}
