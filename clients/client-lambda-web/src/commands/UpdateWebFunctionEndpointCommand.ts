// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWebFunctionEndpointRequest, UpdateWebFunctionEndpointResponse } from "../models/models_0";
import { UpdateWebFunctionEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWebFunctionEndpointCommand}.
 */
export interface UpdateWebFunctionEndpointCommandInput extends UpdateWebFunctionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebFunctionEndpointCommand}.
 */
export interface UpdateWebFunctionEndpointCommandOutput extends UpdateWebFunctionEndpointResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a web function endpoint. You can modify the authorization type, auto-deployment mode, revision weights, scaling, and throttling settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, UpdateWebFunctionEndpointCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, UpdateWebFunctionEndpointCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // UpdateWebFunctionEndpointRequest
 *   functionName: "STRING_VALUE", // required
 *   endpointName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   authType: "ApplicationManaged" || "IamAuth",
 *   autoDeploymentMode: "LatestRevision" || "Disabled",
 *   revisionWeights: [ // RevisionWeightList
 *     { // RevisionWeight
 *       revisionId: "STRING_VALUE", // required
 *       weight: Number("int"), // required
 *     },
 *   ],
 *   scalingConfig: { // ScalingConfig
 *     maxEnvironments: Number("int"),
 *   },
 *   throttleConfig: { // ThrottleConfig
 *     rateLimit: Number("int"),
 *   },
 * };
 * const command = new UpdateWebFunctionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebFunctionEndpointResponse
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
 * @param UpdateWebFunctionEndpointCommandInput - {@link UpdateWebFunctionEndpointCommandInput}
 * @returns {@link UpdateWebFunctionEndpointCommandOutput}
 * @see {@link UpdateWebFunctionEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateWebFunctionEndpointCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Resolve the conflict and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource identifier and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded. Request a quota increase or reduce usage and try again.</p>
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
export class UpdateWebFunctionEndpointCommand extends command<UpdateWebFunctionEndpointCommandInput, UpdateWebFunctionEndpointCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWebFunctionEndpoint",
  UpdateWebFunctionEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebFunctionEndpointRequest;
      output: UpdateWebFunctionEndpointResponse;
    };
    sdk: {
      input: UpdateWebFunctionEndpointCommandInput;
      output: UpdateWebFunctionEndpointCommandOutput;
    };
  };
}
