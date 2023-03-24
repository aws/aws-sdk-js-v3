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
import { GetDefaultCreditSpecificationRequest, GetDefaultCreditSpecificationResult } from "../models/models_5";
import {
  deserializeAws_ec2GetDefaultCreditSpecificationCommand,
  serializeAws_ec2GetDefaultCreditSpecificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link GetDefaultCreditSpecificationCommand}.
 */
export interface GetDefaultCreditSpecificationCommandInput extends GetDefaultCreditSpecificationRequest {}
/**
 * @public
 *
 * The output of {@link GetDefaultCreditSpecificationCommand}.
 */
export interface GetDefaultCreditSpecificationCommandOutput
  extends GetDefaultCreditSpecificationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the default credit option for CPU usage of a burstable performance instance
 *             family.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   DryRun: true || false,
 *   InstanceFamily: "t2" || "t3" || "t3a" || "t4g", // required
 * };
 * const command = new GetDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetDefaultCreditSpecificationCommandInput - {@link GetDefaultCreditSpecificationCommandInput}
 * @returns {@link GetDefaultCreditSpecificationCommandOutput}
 * @see {@link GetDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link GetDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class GetDefaultCreditSpecificationCommand extends $Command<
  GetDefaultCreditSpecificationCommandInput,
  GetDefaultCreditSpecificationCommandOutput,
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
  constructor(readonly input: GetDefaultCreditSpecificationCommandInput) {
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
  ): Handler<GetDefaultCreditSpecificationCommandInput, GetDefaultCreditSpecificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDefaultCreditSpecificationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetDefaultCreditSpecificationCommand";
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
  private serialize(input: GetDefaultCreditSpecificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetDefaultCreditSpecificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDefaultCreditSpecificationCommandOutput> {
    return deserializeAws_ec2GetDefaultCreditSpecificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
