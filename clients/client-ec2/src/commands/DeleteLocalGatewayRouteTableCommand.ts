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
import { DeleteLocalGatewayRouteTableRequest, DeleteLocalGatewayRouteTableResult } from "../models/models_2";
import { de_DeleteLocalGatewayRouteTableCommand, se_DeleteLocalGatewayRouteTableCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayRouteTableCommand}.
 */
export interface DeleteLocalGatewayRouteTableCommandInput extends DeleteLocalGatewayRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayRouteTableCommand}.
 */
export interface DeleteLocalGatewayRouteTableCommandOutput
  extends DeleteLocalGatewayRouteTableResult,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Deletes a local gateway route table.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayRouteTableRequest
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteLocalGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayRouteTableResult
 * //   LocalGatewayRouteTable: { // LocalGatewayRouteTable
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     LocalGatewayRouteTableArn: "STRING_VALUE",
 * //     LocalGatewayId: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Mode: "direct-vpc-routing" || "coip",
 * //     StateReason: { // StateReason
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLocalGatewayRouteTableCommandInput - {@link DeleteLocalGatewayRouteTableCommandInput}
 * @returns {@link DeleteLocalGatewayRouteTableCommandOutput}
 * @see {@link DeleteLocalGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteLocalGatewayRouteTableCommand extends $Command<
  DeleteLocalGatewayRouteTableCommandInput,
  DeleteLocalGatewayRouteTableCommandOutput,
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
  constructor(readonly input: DeleteLocalGatewayRouteTableCommandInput) {
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
  ): Handler<DeleteLocalGatewayRouteTableCommandInput, DeleteLocalGatewayRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLocalGatewayRouteTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteLocalGatewayRouteTableCommand";
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
  private serialize(input: DeleteLocalGatewayRouteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteLocalGatewayRouteTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLocalGatewayRouteTableCommandOutput> {
    return de_DeleteLocalGatewayRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
