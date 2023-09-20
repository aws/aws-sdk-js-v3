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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSubnetCidrReservationRequest, DeleteSubnetCidrReservationResult } from "../models/models_3";
import { de_DeleteSubnetCidrReservationCommand, se_DeleteSubnetCidrReservationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubnetCidrReservationCommand}.
 */
export interface DeleteSubnetCidrReservationCommandInput extends DeleteSubnetCidrReservationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubnetCidrReservationCommand}.
 */
export interface DeleteSubnetCidrReservationCommandOutput extends DeleteSubnetCidrReservationResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a subnet CIDR reservation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSubnetCidrReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSubnetCidrReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSubnetCidrReservationRequest
 *   SubnetCidrReservationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteSubnetCidrReservationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSubnetCidrReservationResult
 * //   DeletedSubnetCidrReservation: { // SubnetCidrReservation
 * //     SubnetCidrReservationId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     Cidr: "STRING_VALUE",
 * //     ReservationType: "prefix" || "explicit",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
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
 * @param DeleteSubnetCidrReservationCommandInput - {@link DeleteSubnetCidrReservationCommandInput}
 * @returns {@link DeleteSubnetCidrReservationCommandOutput}
 * @see {@link DeleteSubnetCidrReservationCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetCidrReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteSubnetCidrReservationCommand extends $Command<
  DeleteSubnetCidrReservationCommandInput,
  DeleteSubnetCidrReservationCommandOutput,
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
  constructor(readonly input: DeleteSubnetCidrReservationCommandInput) {
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
  ): Handler<DeleteSubnetCidrReservationCommandInput, DeleteSubnetCidrReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSubnetCidrReservationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteSubnetCidrReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteSubnetCidrReservation",
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
  private serialize(input: DeleteSubnetCidrReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSubnetCidrReservationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSubnetCidrReservationCommandOutput> {
    return de_DeleteSubnetCidrReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
