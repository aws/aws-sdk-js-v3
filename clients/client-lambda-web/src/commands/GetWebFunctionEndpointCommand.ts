// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWebFunctionEndpointRequest, GetWebFunctionEndpointResponse } from "../models/models_0";
import { GetWebFunctionEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWebFunctionEndpointCommand}.
 */
export interface GetWebFunctionEndpointCommandInput extends GetWebFunctionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetWebFunctionEndpointCommand}.
 */
export interface GetWebFunctionEndpointCommandOutput extends GetWebFunctionEndpointResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a web function endpoint, including its current state, configuration, and domain name.</p> <note> <p>This API is experimental and for internal AWS use only. It is not yet available to external customers.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, GetWebFunctionEndpointCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, GetWebFunctionEndpointCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // GetWebFunctionEndpointRequest
 *   functionName: "STRING_VALUE", // required
 *   endpointName: "STRING_VALUE", // required
 * };
 * const command = new GetWebFunctionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetWebFunctionEndpointResponse
 * //   functionArn: "STRING_VALUE", // required
 * //   endpointArn: "STRING_VALUE", // required
 * //   endpointName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   endpointType: "HomeRegion" || "MultiRegion" || "PerRegion", // required
 * //   domainName: "STRING_VALUE", // required
 * //   authType: "ApplicationManaged" || "IamAuth", // required
 * //   autoDeploymentMode: "LatestRevision" || "Disabled", // required
 * //   revisionWeights: [ // RevisionWeightList // required
 * //     { // RevisionWeight
 * //       revisionId: "STRING_VALUE", // required
 * //       weight: Number("int"), // required
 * //     },
 * //   ],
 * //   regions: [ // RegionList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   scalingConfig: { // ScalingConfig
 * //     maxEnvironments: Number("int"),
 * //   },
 * //   throttleConfig: { // ThrottleConfig
 * //     rateLimit: Number("int"),
 * //   },
 * //   state: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //   stateReason: "STRING_VALUE", // required
 * //   updateStatus: "InProgress" || "Successful" || "Failed",
 * //   updateStatusReason: "STRING_VALUE",
 * //   regionalEndpoints: { // RegionalEndpoints // required
 * //     "<keys>": { // RegionalEndpoint
 * //       domainName: "STRING_VALUE",
 * //       authType: "ApplicationManaged" || "IamAuth", // required
 * //       revisionWeights: [ // required
 * //         {
 * //           revisionId: "STRING_VALUE", // required
 * //           weight: Number("int"), // required
 * //         },
 * //       ],
 * //       scalingConfig: {
 * //         maxEnvironments: Number("int"),
 * //       },
 * //       throttleConfig: {
 * //         rateLimit: Number("int"),
 * //       },
 * //       state: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //       stateReason: "STRING_VALUE", // required
 * //       updateStatus: "InProgress" || "Successful" || "Failed",
 * //       updateStatusReason: "STRING_VALUE",
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetWebFunctionEndpointCommandInput - {@link GetWebFunctionEndpointCommandInput}
 * @returns {@link GetWebFunctionEndpointCommandOutput}
 * @see {@link GetWebFunctionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetWebFunctionEndpointCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource identifier and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. Check the request parameters and try again.</p>
 *
 * @throws {@link LambdaWebServiceException}
 * <p>Base exception class for all service exceptions from LambdaWeb service.</p>
 *
 *
 * @public
 */
export class GetWebFunctionEndpointCommand extends command<GetWebFunctionEndpointCommandInput, GetWebFunctionEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetWebFunctionEndpoint",
  GetWebFunctionEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWebFunctionEndpointRequest;
      output: GetWebFunctionEndpointResponse;
    };
    sdk: {
      input: GetWebFunctionEndpointCommandInput;
      output: GetWebFunctionEndpointCommandOutput;
    };
  };
}
