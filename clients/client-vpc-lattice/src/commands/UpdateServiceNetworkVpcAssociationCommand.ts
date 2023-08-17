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
  UpdateServiceNetworkVpcAssociationRequest,
  UpdateServiceNetworkVpcAssociationResponse,
} from "../models/models_0";
import {
  de_UpdateServiceNetworkVpcAssociationCommand,
  se_UpdateServiceNetworkVpcAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceNetworkVpcAssociationCommand}.
 */
export interface UpdateServiceNetworkVpcAssociationCommandInput extends UpdateServiceNetworkVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceNetworkVpcAssociationCommand}.
 */
export interface UpdateServiceNetworkVpcAssociationCommandOutput
  extends UpdateServiceNetworkVpcAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the service network and VPC association. If you add a security group to the service
 *    network and VPC association, the association must continue to always have at least one security
 *    group. You can add or edit security groups at any time. However, to remove all security groups,
 *    you must first delete the association and recreate it without security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateServiceNetworkVpcAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateServiceNetworkVpcAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateServiceNetworkVpcAssociationRequest
 *   serviceNetworkVpcAssociationIdentifier: "STRING_VALUE", // required
 *   securityGroupIds: [ // SecurityGroupList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateServiceNetworkVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceNetworkVpcAssociationResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   securityGroupIds: [ // SecurityGroupList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateServiceNetworkVpcAssociationCommandInput - {@link UpdateServiceNetworkVpcAssociationCommandInput}
 * @returns {@link UpdateServiceNetworkVpcAssociationCommandOutput}
 * @see {@link UpdateServiceNetworkVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceNetworkVpcAssociationCommandOutput} for command's `response` shape.
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
export class UpdateServiceNetworkVpcAssociationCommand extends $Command<
  UpdateServiceNetworkVpcAssociationCommandInput,
  UpdateServiceNetworkVpcAssociationCommandOutput,
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
  constructor(readonly input: UpdateServiceNetworkVpcAssociationCommandInput) {
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
  ): Handler<UpdateServiceNetworkVpcAssociationCommandInput, UpdateServiceNetworkVpcAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServiceNetworkVpcAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "UpdateServiceNetworkVpcAssociationCommand";
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
    input: UpdateServiceNetworkVpcAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateServiceNetworkVpcAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServiceNetworkVpcAssociationCommandOutput> {
    return de_UpdateServiceNetworkVpcAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
