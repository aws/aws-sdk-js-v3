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
import { DisassociateInstanceEventWindowRequest, DisassociateInstanceEventWindowResult } from "../models/models_5";
import {
  de_DisassociateInstanceEventWindowCommand,
  se_DisassociateInstanceEventWindowCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateInstanceEventWindowCommand}.
 */
export interface DisassociateInstanceEventWindowCommandInput extends DisassociateInstanceEventWindowRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateInstanceEventWindowCommand}.
 */
export interface DisassociateInstanceEventWindowCommandOutput
  extends DisassociateInstanceEventWindowResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates one or more targets from an event window.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateInstanceEventWindowRequest
 *   DryRun: true || false,
 *   InstanceEventWindowId: "STRING_VALUE", // required
 *   AssociationTarget: { // InstanceEventWindowDisassociationRequest
 *     InstanceIds: [ // InstanceIdList
 *       "STRING_VALUE",
 *     ],
 *     InstanceTags: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     DedicatedHostIds: [ // DedicatedHostIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new DisassociateInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateInstanceEventWindowResult
 * //   InstanceEventWindow: { // InstanceEventWindow
 * //     InstanceEventWindowId: "STRING_VALUE",
 * //     TimeRanges: [ // InstanceEventWindowTimeRangeList
 * //       { // InstanceEventWindowTimeRange
 * //         StartWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //         StartHour: Number("int"),
 * //         EndWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //         EndHour: Number("int"),
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE",
 * //     CronExpression: "STRING_VALUE",
 * //     AssociationTarget: { // InstanceEventWindowAssociationTarget
 * //       InstanceIds: [ // InstanceIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DedicatedHostIds: [ // DedicatedHostIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     State: "creating" || "deleting" || "active" || "deleted",
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateInstanceEventWindowCommandInput - {@link DisassociateInstanceEventWindowCommandInput}
 * @returns {@link DisassociateInstanceEventWindowCommandOutput}
 * @see {@link DisassociateInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link DisassociateInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisassociateInstanceEventWindowCommand extends $Command<
  DisassociateInstanceEventWindowCommandInput,
  DisassociateInstanceEventWindowCommandOutput,
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
  constructor(readonly input: DisassociateInstanceEventWindowCommandInput) {
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
  ): Handler<DisassociateInstanceEventWindowCommandInput, DisassociateInstanceEventWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateInstanceEventWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateInstanceEventWindowCommand";
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
    input: DisassociateInstanceEventWindowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateInstanceEventWindowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateInstanceEventWindowCommandOutput> {
    return de_DisassociateInstanceEventWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
