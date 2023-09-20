// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeRouteInput, DescribeRouteOutput } from "../models/models_0";
import { de_DescribeRouteCommand, se_DescribeRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouteCommand}.
 */
export interface DescribeRouteCommandInput extends DescribeRouteInput {}
/**
 * @public
 *
 * The output of {@link DescribeRouteCommand}.
 */
export interface DescribeRouteCommandOutput extends DescribeRouteOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // DescribeRouteInput
 *   routeName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 *   virtualRouterName: "STRING_VALUE", // required
 * };
 * const command = new DescribeRouteCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteOutput
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
 * @param DescribeRouteCommandInput - {@link DescribeRouteCommandInput}
 * @returns {@link DescribeRouteCommandOutput}
 * @see {@link DescribeRouteCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteCommandOutput} for command's `response` shape.
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
 */
export class DescribeRouteCommand extends $Command<
  DescribeRouteCommandInput,
  DescribeRouteCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeRouteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRouteCommandInput, DescribeRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppMesh",
        operation: "DescribeRoute",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRouteCommandOutput> {
    return de_DescribeRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
