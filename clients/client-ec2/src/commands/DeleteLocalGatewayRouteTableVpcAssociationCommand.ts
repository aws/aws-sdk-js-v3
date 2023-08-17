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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteLocalGatewayRouteTableVpcAssociationRequest,
  DeleteLocalGatewayRouteTableVpcAssociationResult,
} from "../models/models_2";
import {
  de_DeleteLocalGatewayRouteTableVpcAssociationCommand,
  se_DeleteLocalGatewayRouteTableVpcAssociationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}.
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationCommandInput
  extends DeleteLocalGatewayRouteTableVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}.
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationCommandOutput
  extends DeleteLocalGatewayRouteTableVpcAssociationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified association between a VPC and local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayRouteTableVpcAssociationRequest
 *   LocalGatewayRouteTableVpcAssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteLocalGatewayRouteTableVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayRouteTableVpcAssociationResult
 * //   LocalGatewayRouteTableVpcAssociation: { // LocalGatewayRouteTableVpcAssociation
 * //     LocalGatewayRouteTableVpcAssociationId: "STRING_VALUE",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     LocalGatewayRouteTableArn: "STRING_VALUE",
 * //     LocalGatewayId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLocalGatewayRouteTableVpcAssociationCommandInput - {@link DeleteLocalGatewayRouteTableVpcAssociationCommandInput}
 * @returns {@link DeleteLocalGatewayRouteTableVpcAssociationCommandOutput}
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteLocalGatewayRouteTableVpcAssociationCommand extends $Command<
  DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
  DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DeleteLocalGatewayRouteTableVpcAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    DeleteLocalGatewayRouteTableVpcAssociationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteLocalGatewayRouteTableVpcAssociationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteLocalGatewayRouteTableVpcAssociationCommand";
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
    input: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteLocalGatewayRouteTableVpcAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLocalGatewayRouteTableVpcAssociationCommandOutput> {
    return de_DeleteLocalGatewayRouteTableVpcAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
