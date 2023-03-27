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
import { DisableFastLaunchRequest, DisableFastLaunchResult } from "../models/models_5";
import {
  deserializeAws_ec2DisableFastLaunchCommand,
  serializeAws_ec2DisableFastLaunchCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DisableFastLaunchCommand}.
 */
export interface DisableFastLaunchCommandInput extends DisableFastLaunchRequest {}
/**
 * @public
 *
 * The output of {@link DisableFastLaunchCommand}.
 */
export interface DisableFastLaunchCommandOutput extends DisableFastLaunchResult, __MetadataBearer {}

/**
 * @public
 * <p>Discontinue faster launching for a Windows AMI, and clean up existing pre-provisioned snapshots.
 * 			When you disable faster launching, the AMI uses the standard launch process for each
 * 			instance. All pre-provisioned snapshots must be removed before you can enable faster launching again.</p>
 *          <note>
 *             <p>To change these settings, you must own the AMI.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableFastLaunchCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableFastLaunchCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableFastLaunchRequest
 *   ImageId: "STRING_VALUE", // required
 *   Force: true || false,
 *   DryRun: true || false,
 * };
 * const command = new DisableFastLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisableFastLaunchCommandInput - {@link DisableFastLaunchCommandInput}
 * @returns {@link DisableFastLaunchCommandOutput}
 * @see {@link DisableFastLaunchCommandInput} for command's `input` shape.
 * @see {@link DisableFastLaunchCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DisableFastLaunchCommand extends $Command<
  DisableFastLaunchCommandInput,
  DisableFastLaunchCommandOutput,
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
  constructor(readonly input: DisableFastLaunchCommandInput) {
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
  ): Handler<DisableFastLaunchCommandInput, DisableFastLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableFastLaunchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableFastLaunchCommand";
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
  private serialize(input: DisableFastLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisableFastLaunchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableFastLaunchCommandOutput> {
    return deserializeAws_ec2DisableFastLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
