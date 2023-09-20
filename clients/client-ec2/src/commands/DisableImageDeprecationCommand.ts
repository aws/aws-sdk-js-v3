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
import { DisableImageDeprecationRequest, DisableImageDeprecationResult } from "../models/models_5";
import { de_DisableImageDeprecationCommand, se_DisableImageDeprecationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableImageDeprecationCommand}.
 */
export interface DisableImageDeprecationCommandInput extends DisableImageDeprecationRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageDeprecationCommand}.
 */
export interface DisableImageDeprecationCommandOutput extends DisableImageDeprecationResult, __MetadataBearer {}

/**
 * @public
 * <p>Cancels the deprecation of the specified AMI.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageDeprecationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageDeprecationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableImageDeprecationRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableImageDeprecationCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageDeprecationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableImageDeprecationCommandInput - {@link DisableImageDeprecationCommandInput}
 * @returns {@link DisableImageDeprecationCommandOutput}
 * @see {@link DisableImageDeprecationCommandInput} for command's `input` shape.
 * @see {@link DisableImageDeprecationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisableImageDeprecationCommand extends $Command<
  DisableImageDeprecationCommandInput,
  DisableImageDeprecationCommandOutput,
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
  constructor(readonly input: DisableImageDeprecationCommandInput) {
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
  ): Handler<DisableImageDeprecationCommandInput, DisableImageDeprecationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableImageDeprecationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableImageDeprecationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisableImageDeprecation",
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
  private serialize(input: DisableImageDeprecationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisableImageDeprecationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableImageDeprecationCommandOutput> {
    return de_DisableImageDeprecationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
