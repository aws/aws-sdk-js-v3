// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteInput, DeleteRouteOutput } from "../models/models_0";
import { DeleteRoute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandInput extends DeleteRouteInput {}
/**
 * @public
 *
 * The output of {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandOutput extends DeleteRouteOutput, __MetadataBearer {}

/**
 * <p>Deletes an existing route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // DeleteRouteInput
 *   routeName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   virtualRouterName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new DeleteRouteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRouteOutput
 * //   route: { // RouteData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualRouterName: "STRING_VALUE", // required
 * //     routeName: "STRING_VALUE", // required
 * //     spec: { // RouteSpec
 * //       priority: Number("int"),
 * //       httpRoute: { // HttpRoute
 * //         match: { // HttpRouteMatch
 * //           prefix: "STRING_VALUE",
 * //           path: { // HttpPathMatch
 * //             exact: "STRING_VALUE",
 * //             regex: "STRING_VALUE",
 * //           },
 * //           queryParameters: [ // HttpQueryParameters
 * //             { // HttpQueryParameter
 * //               name: "STRING_VALUE", // required
 * //               match: { // QueryParameterMatch
 * //                 exact: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           method: "STRING_VALUE",
 * //           scheme: "STRING_VALUE",
 * //           headers: [ // HttpRouteHeaders
 * //             { // HttpRouteHeader
 * //               name: "STRING_VALUE", // required
 * //               invert: true || false,
 * //               match: { // HeaderMatchMethod Union: only one key present
 * //                 exact: "STRING_VALUE",
 * //                 regex: "STRING_VALUE",
 * //                 range: { // MatchRange
 * //                   start: Number("long"), // required
 * //                   end: Number("long"), // required
 * //                 },
 * //                 prefix: "STRING_VALUE",
 * //                 suffix: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           port: Number("int"),
 * //         },
 * //         action: { // HttpRouteAction
 * //           weightedTargets: [ // WeightedTargets // required
 * //             { // WeightedTarget
 * //               virtualNode: "STRING_VALUE", // required
 * //               weight: Number("int"), // required
 * //               port: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         retryPolicy: { // HttpRetryPolicy
 * //           perRetryTimeout: { // Duration
 * //             value: Number("long"),
 * //             unit: "STRING_VALUE",
 * //           },
 * //           maxRetries: Number("long"), // required
 * //           httpRetryEvents: [ // HttpRetryPolicyEvents
 * //             "STRING_VALUE",
 * //           ],
 * //           tcpRetryEvents: [ // TcpRetryPolicyEvents
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         timeout: { // HttpTimeout
 * //           perRequest: {
 * //             value: Number("long"),
 * //             unit: "STRING_VALUE",
 * //           },
 * //           idle: {
 * //             value: Number("long"),
 * //             unit: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       tcpRoute: { // TcpRoute
 * //         action: { // TcpRouteAction
 * //           weightedTargets: [ // required
 * //             {
 * //               virtualNode: "STRING_VALUE", // required
 * //               weight: Number("int"), // required
 * //               port: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         timeout: { // TcpTimeout
 * //           idle: {
 * //             value: Number("long"),
 * //             unit: "STRING_VALUE",
 * //           },
 * //         },
 * //         match: { // TcpRouteMatch
 * //           port: Number("int"),
 * //         },
 * //       },
 * //       http2Route: {
 * //         match: {
 * //           prefix: "STRING_VALUE",
 * //           path: {
 * //             exact: "STRING_VALUE",
 * //             regex: "STRING_VALUE",
 * //           },
 * //           queryParameters: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               match: {
 * //                 exact: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           method: "STRING_VALUE",
 * //           scheme: "STRING_VALUE",
 * //           headers: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               invert: true || false,
 * //               match: {//  Union: only one key present
 * //                 exact: "STRING_VALUE",
 * //                 regex: "STRING_VALUE",
 * //                 range: {
 * //                   start: Number("long"), // required
 * //                   end: Number("long"), // required
 * //                 },
 * //                 prefix: "STRING_VALUE",
 * //                 suffix: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           port: Number("int"),
 * //         },
 * //         action: {
 * //           weightedTargets: [ // required
 * //             {
 * //               virtualNode: "STRING_VALUE", // required
 * //               weight: Number("int"), // required
 * //               port: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         retryPolicy: {
 * //           perRetryTimeout: {
 * //             value: Number("long"),
 * //             unit: "STRING_VALUE",
 * //           },
 * //           maxRetries: Number("long"), // required
 * //           httpRetryEvents: [
 * //             "STRING_VALUE",
 * //           ],
 * //           tcpRetryEvents: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         timeout: {
 * //           perRequest: "<Duration>",
 * //           idle: "<Duration>",
 * //         },
 * //       },
 * //       grpcRoute: { // GrpcRoute
 * //         action: { // GrpcRouteAction
 * //           weightedTargets: [ // required
 * //             {
 * //               virtualNode: "STRING_VALUE", // required
 * //               weight: Number("int"), // required
 * //               port: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         match: { // GrpcRouteMatch
 * //           serviceName: "STRING_VALUE",
 * //           methodName: "STRING_VALUE",
 * //           metadata: [ // GrpcRouteMetadataList
 * //             { // GrpcRouteMetadata
 * //               name: "STRING_VALUE", // required
 * //               invert: true || false,
 * //               match: { // GrpcRouteMetadataMatchMethod Union: only one key present
 * //                 exact: "STRING_VALUE",
 * //                 regex: "STRING_VALUE",
 * //                 range: {
 * //                   start: Number("long"), // required
 * //                   end: Number("long"), // required
 * //                 },
 * //                 prefix: "STRING_VALUE",
 * //                 suffix: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           port: Number("int"),
 * //         },
 * //         retryPolicy: { // GrpcRetryPolicy
 * //           perRetryTimeout: "<Duration>", // required
 * //           maxRetries: Number("long"), // required
 * //           httpRetryEvents: [
 * //             "STRING_VALUE",
 * //           ],
 * //           tcpRetryEvents: [
 * //             "STRING_VALUE",
 * //           ],
 * //           grpcRetryEvents: [ // GrpcRetryPolicyEvents
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         timeout: { // GrpcTimeout
 * //           perRequest: "<Duration>",
 * //           idle: "<Duration>",
 * //         },
 * //       },
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // RouteStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRouteCommandInput - {@link DeleteRouteCommandInput}
 * @returns {@link DeleteRouteCommandOutput}
 * @see {@link DeleteRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 *
 * @public
 */
export class DeleteRouteCommand extends $Command
  .classBuilder<
    DeleteRouteCommandInput,
    DeleteRouteCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppMesh", "DeleteRoute", {})
  .n("AppMeshClient", "DeleteRouteCommand")
  .sc(DeleteRoute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteInput;
      output: DeleteRouteOutput;
    };
    sdk: {
      input: DeleteRouteCommandInput;
      output: DeleteRouteCommandOutput;
    };
  };
}
