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
import { DeleteCarrierGatewayRequest, DeleteCarrierGatewayResult } from "../models/models_2";
import { de_DeleteCarrierGatewayCommand, se_DeleteCarrierGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCarrierGatewayCommand}.
 */
export interface DeleteCarrierGatewayCommandInput extends DeleteCarrierGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCarrierGatewayCommand}.
 */
export interface DeleteCarrierGatewayCommandOutput extends DeleteCarrierGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a carrier gateway.</p>
 *          <important>
 *             <p>If you do not delete the route that contains the carrier gateway as the
 *                 Target, the route is a blackhole route. For information about how to delete a route, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteCarrierGatewayRequest
 *   CarrierGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCarrierGatewayResult
 * //   CarrierGateway: { // CarrierGateway
 * //     CarrierGatewayId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     OwnerId: "STRING_VALUE",
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
 * @param DeleteCarrierGatewayCommandInput - {@link DeleteCarrierGatewayCommandInput}
 * @returns {@link DeleteCarrierGatewayCommandOutput}
 * @see {@link DeleteCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteCarrierGatewayCommand extends $Command<
  DeleteCarrierGatewayCommandInput,
  DeleteCarrierGatewayCommandOutput,
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
  constructor(readonly input: DeleteCarrierGatewayCommandInput) {
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
  ): Handler<DeleteCarrierGatewayCommandInput, DeleteCarrierGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCarrierGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteCarrierGatewayCommand";
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
  private serialize(input: DeleteCarrierGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCarrierGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCarrierGatewayCommandOutput> {
    return de_DeleteCarrierGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
