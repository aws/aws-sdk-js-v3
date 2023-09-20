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

import { UpdateTargetGroupRequest, UpdateTargetGroupResponse } from "../models/models_0";
import { de_UpdateTargetGroupCommand, se_UpdateTargetGroupCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTargetGroupCommand}.
 */
export interface UpdateTargetGroupCommandInput extends UpdateTargetGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTargetGroupCommand}.
 */
export interface UpdateTargetGroupCommandOutput extends UpdateTargetGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateTargetGroupCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateTargetGroupCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateTargetGroupRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 *   healthCheck: { // HealthCheckConfig
 *     enabled: true || false,
 *     protocol: "STRING_VALUE",
 *     protocolVersion: "STRING_VALUE",
 *     port: Number("int"),
 *     path: "STRING_VALUE",
 *     healthCheckIntervalSeconds: Number("int"),
 *     healthCheckTimeoutSeconds: Number("int"),
 *     healthyThresholdCount: Number("int"),
 *     unhealthyThresholdCount: Number("int"),
 *     matcher: { // Matcher Union: only one key present
 *       httpCode: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTargetGroupResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   config: { // TargetGroupConfig
 * //     port: Number("int"),
 * //     protocol: "STRING_VALUE",
 * //     protocolVersion: "STRING_VALUE",
 * //     ipAddressType: "STRING_VALUE",
 * //     vpcIdentifier: "STRING_VALUE",
 * //     healthCheck: { // HealthCheckConfig
 * //       enabled: true || false,
 * //       protocol: "STRING_VALUE",
 * //       protocolVersion: "STRING_VALUE",
 * //       port: Number("int"),
 * //       path: "STRING_VALUE",
 * //       healthCheckIntervalSeconds: Number("int"),
 * //       healthCheckTimeoutSeconds: Number("int"),
 * //       healthyThresholdCount: Number("int"),
 * //       unhealthyThresholdCount: Number("int"),
 * //       matcher: { // Matcher Union: only one key present
 * //         httpCode: "STRING_VALUE",
 * //       },
 * //     },
 * //     lambdaEventStructureVersion: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTargetGroupCommandInput - {@link UpdateTargetGroupCommandInput}
 * @returns {@link UpdateTargetGroupCommandOutput}
 * @see {@link UpdateTargetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 */
export class UpdateTargetGroupCommand extends $Command<
  UpdateTargetGroupCommandInput,
  UpdateTargetGroupCommandOutput,
  VPCLatticeClientResolvedConfig
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
  constructor(readonly input: UpdateTargetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VPCLatticeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTargetGroupCommandInput, UpdateTargetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTargetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "UpdateTargetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MercuryControlPlane",
        operation: "UpdateTargetGroup",
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
  private serialize(input: UpdateTargetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTargetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTargetGroupCommandOutput> {
    return de_UpdateTargetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
