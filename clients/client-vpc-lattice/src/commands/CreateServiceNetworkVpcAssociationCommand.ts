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

import {
  CreateServiceNetworkVpcAssociationRequest,
  CreateServiceNetworkVpcAssociationResponse,
} from "../models/models_0";
import {
  de_CreateServiceNetworkVpcAssociationCommand,
  se_CreateServiceNetworkVpcAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceNetworkVpcAssociationCommand}.
 */
export interface CreateServiceNetworkVpcAssociationCommandInput extends CreateServiceNetworkVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceNetworkVpcAssociationCommand}.
 */
export interface CreateServiceNetworkVpcAssociationCommandOutput
  extends CreateServiceNetworkVpcAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a VPC with a service network. When you associate a VPC with the service network,
 *    it enables all the resources within that VPC to be clients and communicate with other services in
 *    the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
 *          <p>You can't use this operation if there is a disassociation in progress. If the association
 *    fails, retry by deleting the association and recreating it.</p>
 *          <p>As a result of this operation, the association gets created in the service network account
 *    and the VPC owner account.</p>
 *          <p>Once a security group is added to the VPC association it cannot be removed. You can add or
 *    update the security groups being used for the VPC association once a security group is attached.
 *    To remove all security groups you must reassociate the VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateServiceNetworkVpcAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateServiceNetworkVpcAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateServiceNetworkVpcAssociationRequest
 *   clientToken: "STRING_VALUE",
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 *   vpcIdentifier: "STRING_VALUE", // required
 *   securityGroupIds: [ // SecurityGroupList
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateServiceNetworkVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceNetworkVpcAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   securityGroupIds: [ // SecurityGroupList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateServiceNetworkVpcAssociationCommandInput - {@link CreateServiceNetworkVpcAssociationCommandInput}
 * @returns {@link CreateServiceNetworkVpcAssociationCommandOutput}
 * @see {@link CreateServiceNetworkVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateServiceNetworkVpcAssociationCommandOutput} for command's `response` shape.
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
export class CreateServiceNetworkVpcAssociationCommand extends $Command<
  CreateServiceNetworkVpcAssociationCommandInput,
  CreateServiceNetworkVpcAssociationCommandOutput,
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
  constructor(readonly input: CreateServiceNetworkVpcAssociationCommandInput) {
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
  ): Handler<CreateServiceNetworkVpcAssociationCommandInput, CreateServiceNetworkVpcAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateServiceNetworkVpcAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "CreateServiceNetworkVpcAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MercuryControlPlane",
        operation: "CreateServiceNetworkVpcAssociation",
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
  private serialize(
    input: CreateServiceNetworkVpcAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateServiceNetworkVpcAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateServiceNetworkVpcAssociationCommandOutput> {
    return de_CreateServiceNetworkVpcAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
