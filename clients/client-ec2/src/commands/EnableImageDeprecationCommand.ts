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
import { EnableImageDeprecationRequest, EnableImageDeprecationResult } from "../models/models_5";
import { de_EnableImageDeprecationCommand, se_EnableImageDeprecationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableImageDeprecationCommand}.
 */
export interface EnableImageDeprecationCommandInput extends EnableImageDeprecationRequest {}
/**
 * @public
 *
 * The output of {@link EnableImageDeprecationCommand}.
 */
export interface EnableImageDeprecationCommandOutput extends EnableImageDeprecationResult, __MetadataBearer {}

/**
 * @public
 * <p>Enables deprecation of the specified AMI at the specified date and time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableImageDeprecationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableImageDeprecationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableImageDeprecationRequest
 *   ImageId: "STRING_VALUE", // required
 *   DeprecateAt: new Date("TIMESTAMP"), // required
 *   DryRun: true || false,
 * };
 * const command = new EnableImageDeprecationCommand(input);
 * const response = await client.send(command);
 * // { // EnableImageDeprecationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param EnableImageDeprecationCommandInput - {@link EnableImageDeprecationCommandInput}
 * @returns {@link EnableImageDeprecationCommandOutput}
 * @see {@link EnableImageDeprecationCommandInput} for command's `input` shape.
 * @see {@link EnableImageDeprecationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableImageDeprecationCommand extends $Command<
  EnableImageDeprecationCommandInput,
  EnableImageDeprecationCommandOutput,
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
  constructor(readonly input: EnableImageDeprecationCommandInput) {
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
  ): Handler<EnableImageDeprecationCommandInput, EnableImageDeprecationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableImageDeprecationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableImageDeprecationCommand";
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
  private serialize(input: EnableImageDeprecationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableImageDeprecationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableImageDeprecationCommandOutput> {
    return de_EnableImageDeprecationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
