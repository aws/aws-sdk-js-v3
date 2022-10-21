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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  CreateVirtualMFADeviceRequest,
  CreateVirtualMFADeviceRequestFilterSensitiveLog,
  CreateVirtualMFADeviceResponse,
  CreateVirtualMFADeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateVirtualMFADeviceCommand,
  serializeAws_queryCreateVirtualMFADeviceCommand,
} from "../protocols/Aws_query";

export interface CreateVirtualMFADeviceCommandInput extends CreateVirtualMFADeviceRequest {}
export interface CreateVirtualMFADeviceCommandOutput extends CreateVirtualMFADeviceResponse, __MetadataBearer {}

/**
 * <p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual
 *             MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user.
 *             For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
 *                 device</a> in the <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <important>
 *             <p>The seed information contained in the QR code and the Base32 string should be
 *                 treated like any other secret access information. In other words, protect the seed
 *                 information as you would your Amazon Web Services access keys or your passwords. After you
 *                 provision your virtual device, you should ensure that the information is destroyed
 *                 following secure procedures.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class CreateVirtualMFADeviceCommand extends $Command<
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: CreateVirtualMFADeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVirtualMFADeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateVirtualMFADeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualMFADeviceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualMFADeviceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualMFADeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateVirtualMFADeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualMFADeviceCommandOutput> {
    return deserializeAws_queryCreateVirtualMFADeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
