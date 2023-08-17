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
} from "@smithy/types";

import { RegisterTargetsRequest, RegisterTargetsResponse } from "../models/models_0";
import { de_RegisterTargetsCommand, se_RegisterTargetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandInput extends RegisterTargetsRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandOutput extends RegisterTargetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Registers the targets with the target group. If it's a Lambda target, you can only have one
 *    target in a target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, RegisterTargetsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, RegisterTargetsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // RegisterTargetsRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 *   targets: [ // TargetList // required
 *     { // Target
 *       id: "STRING_VALUE", // required
 *       port: Number("int"),
 *     },
 *   ],
 * };
 * const command = new RegisterTargetsCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTargetsResponse
 * //   successful: [ // TargetList
 * //     { // Target
 * //       id: "STRING_VALUE", // required
 * //       port: Number("int"),
 * //     },
 * //   ],
 * //   unsuccessful: [ // TargetFailureList
 * //     { // TargetFailure
 * //       id: "STRING_VALUE",
 * //       port: Number("int"),
 * //       failureCode: "STRING_VALUE",
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RegisterTargetsCommandInput - {@link RegisterTargetsCommandInput}
 * @returns {@link RegisterTargetsCommandOutput}
 * @see {@link RegisterTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class RegisterTargetsCommand extends $Command<
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput,
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
  constructor(readonly input: RegisterTargetsCommandInput) {
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
  ): Handler<RegisterTargetsCommandInput, RegisterTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "RegisterTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RegisterTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTargetsCommandOutput> {
    return de_RegisterTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
