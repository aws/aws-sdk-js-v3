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
import {
  GetPasswordDataRequest,
  GetPasswordDataResult,
  GetPasswordDataResultFilterSensitiveLog,
} from "../models/models_5";
import { de_GetPasswordDataCommand, se_GetPasswordDataCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPasswordDataCommand}.
 */
export interface GetPasswordDataCommandInput extends GetPasswordDataRequest {}
/**
 * @public
 *
 * The output of {@link GetPasswordDataCommand}.
 */
export interface GetPasswordDataCommandOutput extends GetPasswordDataResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the encrypted administrator password for a running Windows instance.</p>
 *          <p>The Windows password is generated at boot by the <code>EC2Config</code> service or
 *                 <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only
 *             happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2launch.html">EC2Launch</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For the <code>EC2Config</code> service, the password is not generated for rebundled
 *             AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p>
 *          <p>The password is encrypted using the key pair that you specified when you launched the
 *             instance. You must provide the corresponding key pair file.</p>
 *          <p>When you launch an instance, password generation and encryption may take a few
 *             minutes. If you try to retrieve the password before it's available, the output returns
 *             an empty string. We recommend that you wait up to 15 minutes after launching an instance
 *             before trying to retrieve the generated password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetPasswordDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetPasswordDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetPasswordDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetPasswordDataCommand(input);
 * const response = await client.send(command);
 * // { // GetPasswordDataResult
 * //   InstanceId: "STRING_VALUE",
 * //   PasswordData: "STRING_VALUE",
 * //   Timestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPasswordDataCommandInput - {@link GetPasswordDataCommandInput}
 * @returns {@link GetPasswordDataCommandOutput}
 * @see {@link GetPasswordDataCommandInput} for command's `input` shape.
 * @see {@link GetPasswordDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetPasswordDataCommand extends $Command<
  GetPasswordDataCommandInput,
  GetPasswordDataCommandOutput,
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
  constructor(readonly input: GetPasswordDataCommandInput) {
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
  ): Handler<GetPasswordDataCommandInput, GetPasswordDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPasswordDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetPasswordDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetPasswordDataResultFilterSensitiveLog,
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
  private serialize(input: GetPasswordDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPasswordDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPasswordDataCommandOutput> {
    return de_GetPasswordDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
