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
import { DeleteInstanceEventWindowRequest, DeleteInstanceEventWindowResult } from "../models/models_2";
import { de_DeleteInstanceEventWindowCommand, se_DeleteInstanceEventWindowCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceEventWindowCommand}.
 */
export interface DeleteInstanceEventWindowCommandInput extends DeleteInstanceEventWindowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceEventWindowCommand}.
 */
export interface DeleteInstanceEventWindowCommandOutput extends DeleteInstanceEventWindowResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified event window.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteInstanceEventWindowRequest
 *   DryRun: true || false,
 *   ForceDelete: true || false,
 *   InstanceEventWindowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInstanceEventWindowResult
 * //   InstanceEventWindowState: { // InstanceEventWindowStateChange
 * //     InstanceEventWindowId: "STRING_VALUE",
 * //     State: "creating" || "deleting" || "active" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInstanceEventWindowCommandInput - {@link DeleteInstanceEventWindowCommandInput}
 * @returns {@link DeleteInstanceEventWindowCommandOutput}
 * @see {@link DeleteInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteInstanceEventWindowCommand extends $Command<
  DeleteInstanceEventWindowCommandInput,
  DeleteInstanceEventWindowCommandOutput,
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
  constructor(readonly input: DeleteInstanceEventWindowCommandInput) {
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
  ): Handler<DeleteInstanceEventWindowCommandInput, DeleteInstanceEventWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteInstanceEventWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteInstanceEventWindowCommand";
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
  private serialize(input: DeleteInstanceEventWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteInstanceEventWindowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteInstanceEventWindowCommandOutput> {
    return de_DeleteInstanceEventWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
