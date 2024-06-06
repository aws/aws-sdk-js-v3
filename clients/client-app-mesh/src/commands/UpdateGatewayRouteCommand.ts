// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGatewayRouteInput, UpdateGatewayRouteOutput } from "../models/models_0";
import { de_UpdateGatewayRouteCommand, se_UpdateGatewayRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayRouteCommand}.
 */
export interface UpdateGatewayRouteCommandInput extends UpdateGatewayRouteInput {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayRouteCommand}.
 */
export interface UpdateGatewayRouteCommandOutput extends UpdateGatewayRouteOutput, __MetadataBearer {}

/**
 * <p>Updates an existing gateway route that is associated to a specified virtual gateway in a
 *          service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // UpdateGatewayRouteInput
 *   gatewayRouteName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   virtualGatewayName: "STRING_VALUE", // required
 *   spec: { // GatewayRouteSpec
 *     priority: Number("int"),
 *     httpRoute: { // HttpGatewayRoute
 *       match: { // HttpGatewayRouteMatch
 *         prefix: "STRING_VALUE",
 *         path: { // HttpPathMatch
 *           exact: "STRING_VALUE",
 *           regex: "STRING_VALUE",
 *         },
 *         queryParameters: [ // HttpQueryParameters
 *           { // HttpQueryParameter
 *             name: "STRING_VALUE", // required
 *             match: { // QueryParameterMatch
 *               exact: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         method: "STRING_VALUE",
 *         hostname: { // GatewayRouteHostnameMatch
 *           exact: "STRING_VALUE",
 *           suffix: "STRING_VALUE",
 *         },
 *         headers: [ // HttpGatewayRouteHeaders
 *           { // HttpGatewayRouteHeader
 *             name: "STRING_VALUE", // required
 *             invert: true || false,
 *             match: { // HeaderMatchMethod Union: only one key present
 *               exact: "STRING_VALUE",
 *               regex: "STRING_VALUE",
 *               range: { // MatchRange
 *                 start: Number("long"), // required
 *                 end: Number("long"), // required
 *               },
 *               prefix: "STRING_VALUE",
 *               suffix: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         port: Number("int"),
 *       },
 *       action: { // HttpGatewayRouteAction
 *         target: { // GatewayRouteTarget
 *           virtualService: { // GatewayRouteVirtualService
 *             virtualServiceName: "STRING_VALUE", // required
 *           },
 *           port: Number("int"),
 *         },
 *         rewrite: { // HttpGatewayRouteRewrite
 *           prefix: { // HttpGatewayRoutePrefixRewrite
 *             defaultPrefix: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *           },
 *           path: { // HttpGatewayRoutePathRewrite
 *             exact: "STRING_VALUE",
 *           },
 *           hostname: { // GatewayRouteHostnameRewrite
 *             defaultTargetHostname: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *     http2Route: {
 *       match: {
 *         prefix: "STRING_VALUE",
 *         path: {
 *           exact: "STRING_VALUE",
 *           regex: "STRING_VALUE",
 *         },
 *         queryParameters: [
 *           {
 *             name: "STRING_VALUE", // required
 *             match: {
 *               exact: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         method: "STRING_VALUE",
 *         hostname: {
 *           exact: "STRING_VALUE",
 *           suffix: "STRING_VALUE",
 *         },
 *         headers: [
 *           {
 *             name: "STRING_VALUE", // required
 *             invert: true || false,
 *             match: {//  Union: only one key present
 *               exact: "STRING_VALUE",
 *               regex: "STRING_VALUE",
 *               range: {
 *                 start: Number("long"), // required
 *                 end: Number("long"), // required
 *               },
 *               prefix: "STRING_VALUE",
 *               suffix: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         port: Number("int"),
 *       },
 *       action: {
 *         target: {
 *           virtualService: {
 *             virtualServiceName: "STRING_VALUE", // required
 *           },
 *           port: Number("int"),
 *         },
 *         rewrite: {
 *           prefix: {
 *             defaultPrefix: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *           },
 *           path: {
 *             exact: "STRING_VALUE",
 *           },
 *           hostname: {
 *             defaultTargetHostname: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *     grpcRoute: { // GrpcGatewayRoute
 *       match: { // GrpcGatewayRouteMatch
 *         serviceName: "STRING_VALUE",
 *         hostname: {
 *           exact: "STRING_VALUE",
 *           suffix: "STRING_VALUE",
 *         },
 *         metadata: [ // GrpcGatewayRouteMetadataList
 *           { // GrpcGatewayRouteMetadata
 *             name: "STRING_VALUE", // required
 *             invert: true || false,
 *             match: { // GrpcMetadataMatchMethod Union: only one key present
 *               exact: "STRING_VALUE",
 *               regex: "STRING_VALUE",
 *               range: {
 *                 start: Number("long"), // required
 *                 end: Number("long"), // required
 *               },
 *               prefix: "STRING_VALUE",
 *               suffix: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         port: Number("int"),
 *       },
 *       action: { // GrpcGatewayRouteAction
 *         target: {
 *           virtualService: {
 *             virtualServiceName: "STRING_VALUE", // required
 *           },
 *           port: Number("int"),
 *         },
 *         rewrite: { // GrpcGatewayRouteRewrite
 *           hostname: {
 *             defaultTargetHostname: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new UpdateGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayRouteOutput
 * //   gatewayRoute: { // GatewayRouteData
 * //     meshName: "STRING_VALUE", // required
 * //     gatewayRouteName: "STRING_VALUE", // required
 * //     virtualGatewayName: "STRING_VALUE", // required
 * //     spec: { // GatewayRouteSpec
 * //       priority: Number("int"),
 * //       httpRoute: { // HttpGatewayRoute
 * //         match: { // HttpGatewayRouteMatch
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
 * //           hostname: { // GatewayRouteHostnameMatch
 * //             exact: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
 * //           headers: [ // HttpGatewayRouteHeaders
 * //             { // HttpGatewayRouteHeader
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
 * //         action: { // HttpGatewayRouteAction
 * //           target: { // GatewayRouteTarget
 * //             virtualService: { // GatewayRouteVirtualService
 * //               virtualServiceName: "STRING_VALUE", // required
 * //             },
 * //             port: Number("int"),
 * //           },
 * //           rewrite: { // HttpGatewayRouteRewrite
 * //             prefix: { // HttpGatewayRoutePrefixRewrite
 * //               defaultPrefix: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             path: { // HttpGatewayRoutePathRewrite
 * //               exact: "STRING_VALUE",
 * //             },
 * //             hostname: { // GatewayRouteHostnameRewrite
 * //               defaultTargetHostname: "STRING_VALUE",
 * //             },
 * //           },
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
 * //           hostname: {
 * //             exact: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
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
 * //           target: {
 * //             virtualService: {
 * //               virtualServiceName: "STRING_VALUE", // required
 * //             },
 * //             port: Number("int"),
 * //           },
 * //           rewrite: {
 * //             prefix: {
 * //               defaultPrefix: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             path: {
 * //               exact: "STRING_VALUE",
 * //             },
 * //             hostname: {
 * //               defaultTargetHostname: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       grpcRoute: { // GrpcGatewayRoute
 * //         match: { // GrpcGatewayRouteMatch
 * //           serviceName: "STRING_VALUE",
 * //           hostname: {
 * //             exact: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
 * //           metadata: [ // GrpcGatewayRouteMetadataList
 * //             { // GrpcGatewayRouteMetadata
 * //               name: "STRING_VALUE", // required
 * //               invert: true || false,
 * //               match: { // GrpcMetadataMatchMethod Union: only one key present
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
 * //         action: { // GrpcGatewayRouteAction
 * //           target: {
 * //             virtualService: {
 * //               virtualServiceName: "STRING_VALUE", // required
 * //             },
 * //             port: Number("int"),
 * //           },
 * //           rewrite: { // GrpcGatewayRouteRewrite
 * //             hostname: {
 * //               defaultTargetHostname: "STRING_VALUE",
 * //             },
 * //           },
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
 * //     status: { // GatewayRouteStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGatewayRouteCommandInput - {@link UpdateGatewayRouteCommandInput}
 * @returns {@link UpdateGatewayRouteCommandOutput}
 * @see {@link UpdateGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>App Mesh User Guide</i>.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
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
 * @public
 */
export class UpdateGatewayRouteCommand extends $Command
  .classBuilder<
    UpdateGatewayRouteCommandInput,
    UpdateGatewayRouteCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppMesh", "UpdateGatewayRoute", {})
  .n("AppMeshClient", "UpdateGatewayRouteCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGatewayRouteCommand)
  .de(de_UpdateGatewayRouteCommand)
  .build() {}
