// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorTargetRequest, DeleteTrafficMirrorTargetResult } from "../models/models_3";
import { de_DeleteTrafficMirrorTargetCommand, se_DeleteTrafficMirrorTargetCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteTrafficMirrorTargetCommand}.
 */
export interface DeleteTrafficMirrorTargetCommandInput extends DeleteTrafficMirrorTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficMirrorTargetCommand}.
 */
export interface DeleteTrafficMirrorTargetCommandOutput extends DeleteTrafficMirrorTargetResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Traffic Mirror target.</p>
 *          <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTrafficMirrorTargetRequest
 *   TrafficMirrorTargetId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTrafficMirrorTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteTrafficMirrorTargetCommandInput - {@link DeleteTrafficMirrorTargetCommandInput}
 * @returns {@link DeleteTrafficMirrorTargetCommandOutput}
 * @see {@link DeleteTrafficMirrorTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DeleteTrafficMirrorTargetCommand extends $Command<
  DeleteTrafficMirrorTargetCommandInput,
  DeleteTrafficMirrorTargetCommandOutput,
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
  constructor(readonly input: DeleteTrafficMirrorTargetCommandInput) {
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
  ): Handler<DeleteTrafficMirrorTargetCommandInput, DeleteTrafficMirrorTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTrafficMirrorTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTrafficMirrorTargetCommand";
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
  private serialize(input: DeleteTrafficMirrorTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTrafficMirrorTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficMirrorTargetCommandOutput> {
    return de_DeleteTrafficMirrorTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
