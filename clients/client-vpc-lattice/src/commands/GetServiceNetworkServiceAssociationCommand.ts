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
  GetServiceNetworkServiceAssociationRequest,
  GetServiceNetworkServiceAssociationResponse,
} from "../models/models_0";
import {
  de_GetServiceNetworkServiceAssociationCommand,
  se_GetServiceNetworkServiceAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceNetworkServiceAssociationCommand}.
 */
export interface GetServiceNetworkServiceAssociationCommandInput extends GetServiceNetworkServiceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceNetworkServiceAssociationCommand}.
 */
export interface GetServiceNetworkServiceAssociationCommandOutput
  extends GetServiceNetworkServiceAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the specified association between a service network and a
 *    service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetServiceNetworkServiceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetServiceNetworkServiceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // GetServiceNetworkServiceAssociationRequest
 *   serviceNetworkServiceAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetServiceNetworkServiceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceNetworkServiceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   serviceId: "STRING_VALUE",
 * //   serviceName: "STRING_VALUE",
 * //   serviceArn: "STRING_VALUE",
 * //   serviceNetworkId: "STRING_VALUE",
 * //   serviceNetworkName: "STRING_VALUE",
 * //   serviceNetworkArn: "STRING_VALUE",
 * //   dnsEntry: { // DnsEntry
 * //     domainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //   },
 * //   customDomainName: "STRING_VALUE",
 * //   failureMessage: "STRING_VALUE",
 * //   failureCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceNetworkServiceAssociationCommandInput - {@link GetServiceNetworkServiceAssociationCommandInput}
 * @returns {@link GetServiceNetworkServiceAssociationCommandOutput}
 * @see {@link GetServiceNetworkServiceAssociationCommandInput} for command's `input` shape.
 * @see {@link GetServiceNetworkServiceAssociationCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
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
export class GetServiceNetworkServiceAssociationCommand extends $Command<
  GetServiceNetworkServiceAssociationCommandInput,
  GetServiceNetworkServiceAssociationCommandOutput,
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
  constructor(readonly input: GetServiceNetworkServiceAssociationCommandInput) {
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
  ): Handler<GetServiceNetworkServiceAssociationCommandInput, GetServiceNetworkServiceAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceNetworkServiceAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "GetServiceNetworkServiceAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MercuryControlPlane",
        operation: "GetServiceNetworkServiceAssociation",
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
    input: GetServiceNetworkServiceAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetServiceNetworkServiceAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceNetworkServiceAssociationCommandOutput> {
    return de_GetServiceNetworkServiceAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
