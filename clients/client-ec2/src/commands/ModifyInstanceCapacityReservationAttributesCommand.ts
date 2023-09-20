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
import {
  ModifyInstanceCapacityReservationAttributesRequest,
  ModifyInstanceCapacityReservationAttributesResult,
} from "../models/models_6";
import {
  de_ModifyInstanceCapacityReservationAttributesCommand,
  se_ModifyInstanceCapacityReservationAttributesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceCapacityReservationAttributesCommand}.
 */
export interface ModifyInstanceCapacityReservationAttributesCommandInput
  extends ModifyInstanceCapacityReservationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceCapacityReservationAttributesCommand}.
 */
export interface ModifyInstanceCapacityReservationAttributesCommandOutput
  extends ModifyInstanceCapacityReservationAttributesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an
 * 			instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching
 * 			attributes, or run On-Demand Instance capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceCapacityReservationAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   CapacityReservationSpecification: { // CapacityReservationSpecification
 *     CapacityReservationPreference: "open" || "none",
 *     CapacityReservationTarget: { // CapacityReservationTarget
 *       CapacityReservationId: "STRING_VALUE",
 *       CapacityReservationResourceGroupArn: "STRING_VALUE",
 *     },
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceCapacityReservationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceCapacityReservationAttributesResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyInstanceCapacityReservationAttributesCommandInput - {@link ModifyInstanceCapacityReservationAttributesCommandInput}
 * @returns {@link ModifyInstanceCapacityReservationAttributesCommandOutput}
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyInstanceCapacityReservationAttributesCommand extends $Command<
  ModifyInstanceCapacityReservationAttributesCommandInput,
  ModifyInstanceCapacityReservationAttributesCommandOutput,
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
  constructor(readonly input: ModifyInstanceCapacityReservationAttributesCommandInput) {
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
    ModifyInstanceCapacityReservationAttributesCommandInput,
    ModifyInstanceCapacityReservationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ModifyInstanceCapacityReservationAttributesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceCapacityReservationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyInstanceCapacityReservationAttributes",
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
    input: ModifyInstanceCapacityReservationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyInstanceCapacityReservationAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceCapacityReservationAttributesCommandOutput> {
    return de_ModifyInstanceCapacityReservationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
