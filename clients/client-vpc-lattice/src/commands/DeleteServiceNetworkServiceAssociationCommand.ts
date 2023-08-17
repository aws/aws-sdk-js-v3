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

import {
  DeleteServiceNetworkServiceAssociationRequest,
  DeleteServiceNetworkServiceAssociationResponse,
} from "../models/models_0";
import {
  de_DeleteServiceNetworkServiceAssociationCommand,
  se_DeleteServiceNetworkServiceAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceNetworkServiceAssociationCommand}.
 */
export interface DeleteServiceNetworkServiceAssociationCommandInput
  extends DeleteServiceNetworkServiceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceNetworkServiceAssociationCommand}.
 */
export interface DeleteServiceNetworkServiceAssociationCommandOutput
  extends DeleteServiceNetworkServiceAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the association between a specified service and the specific service network. This
 *    request will fail if an association is still in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteServiceNetworkServiceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteServiceNetworkServiceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteServiceNetworkServiceAssociationRequest
 *   serviceNetworkServiceAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceNetworkServiceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceNetworkServiceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteServiceNetworkServiceAssociationCommandInput - {@link DeleteServiceNetworkServiceAssociationCommandInput}
 * @returns {@link DeleteServiceNetworkServiceAssociationCommandOutput}
 * @see {@link DeleteServiceNetworkServiceAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceNetworkServiceAssociationCommandOutput} for command's `response` shape.
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
export class DeleteServiceNetworkServiceAssociationCommand extends $Command<
  DeleteServiceNetworkServiceAssociationCommandInput,
  DeleteServiceNetworkServiceAssociationCommandOutput,
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
  constructor(readonly input: DeleteServiceNetworkServiceAssociationCommandInput) {
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
  ): Handler<DeleteServiceNetworkServiceAssociationCommandInput, DeleteServiceNetworkServiceAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteServiceNetworkServiceAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "DeleteServiceNetworkServiceAssociationCommand";
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
  private serialize(
    input: DeleteServiceNetworkServiceAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteServiceNetworkServiceAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteServiceNetworkServiceAssociationCommandOutput> {
    return de_DeleteServiceNetworkServiceAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
