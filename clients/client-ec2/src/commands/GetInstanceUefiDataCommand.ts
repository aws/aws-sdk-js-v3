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
import {
  GetInstanceUefiDataRequest,
  GetInstanceUefiDataRequestFilterSensitiveLog,
  GetInstanceUefiDataResult,
  GetInstanceUefiDataResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetInstanceUefiDataCommand,
  serializeAws_ec2GetInstanceUefiDataCommand,
} from "../protocols/Aws_ec2";

export interface GetInstanceUefiDataCommandInput extends GetInstanceUefiDataRequest {}
export interface GetInstanceUefiDataCommandOutput extends GetInstanceUefiDataResult, __MetadataBearer {}

/**
 * <p>A binary representation of the UEFI variable store. Only non-volatile variables are
 *             stored. This is a base64 encoded and zlib compressed binary value that must be properly
 *             encoded.</p>
 *          <p>When you use <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/register-image.html">register-image</a> to create
 *             an AMI, you can create an exact copy of your variable store by passing the UEFI data in
 *             the <code>UefiData</code> parameter. You can modify the UEFI data by using the <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
 *             GitHub. You can use the tool to convert the UEFI data into a human-readable format
 *             (JSON), which you can inspect and modify, and then convert back into the binary format
 *             to use with register-image.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetInstanceUefiDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetInstanceUefiDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetInstanceUefiDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceUefiDataCommandInput} for command's `input` shape.
 * @see {@link GetInstanceUefiDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetInstanceUefiDataCommand extends $Command<
  GetInstanceUefiDataCommandInput,
  GetInstanceUefiDataCommandOutput,
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

  constructor(readonly input: GetInstanceUefiDataCommandInput) {
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
  ): Handler<GetInstanceUefiDataCommandInput, GetInstanceUefiDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInstanceUefiDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetInstanceUefiDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceUefiDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceUefiDataResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceUefiDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetInstanceUefiDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceUefiDataCommandOutput> {
    return deserializeAws_ec2GetInstanceUefiDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
