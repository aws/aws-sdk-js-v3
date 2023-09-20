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
import { DisableImageBlockPublicAccessRequest, DisableImageBlockPublicAccessResult } from "../models/models_5";
import { de_DisableImageBlockPublicAccessCommand, se_DisableImageBlockPublicAccessCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableImageBlockPublicAccessCommand}.
 */
export interface DisableImageBlockPublicAccessCommandInput extends DisableImageBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageBlockPublicAccessCommand}.
 */
export interface DisableImageBlockPublicAccessCommandOutput
  extends DisableImageBlockPublicAccessResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disables <i>block public access for AMIs</i> at the account level in the
 *       specified Amazon Web Services Region. This removes the <i>block public access</i> restriction
 *       from your account. With the restriction removed, you can publicly share your AMIs in the
 *       specified Amazon Web Services Region.</p>
 *          <p>The API can take up to 10 minutes to configure this setting. During this time, if you run
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetImageBlockPublicAccessState.html">GetImageBlockPublicAccessState</a>, the response will be
 *       <code>block-new-sharing</code>. When the API has completed the configuration, the response
 *       will be <code>unblocked</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html#block-public-access-to-amis">Block public access to your AMIs</a> in
 *       the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableImageBlockPublicAccessRequest
 *   DryRun: true || false,
 * };
 * const command = new DisableImageBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageBlockPublicAccessResult
 * //   ImageBlockPublicAccessState: "unblocked",
 * // };
 *
 * ```
 *
 * @param DisableImageBlockPublicAccessCommandInput - {@link DisableImageBlockPublicAccessCommandInput}
 * @returns {@link DisableImageBlockPublicAccessCommandOutput}
 * @see {@link DisableImageBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link DisableImageBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisableImageBlockPublicAccessCommand extends $Command<
  DisableImageBlockPublicAccessCommandInput,
  DisableImageBlockPublicAccessCommandOutput,
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
  constructor(readonly input: DisableImageBlockPublicAccessCommandInput) {
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
  ): Handler<DisableImageBlockPublicAccessCommandInput, DisableImageBlockPublicAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableImageBlockPublicAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableImageBlockPublicAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisableImageBlockPublicAccess",
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
  private serialize(input: DisableImageBlockPublicAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisableImageBlockPublicAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableImageBlockPublicAccessCommandOutput> {
    return de_DisableImageBlockPublicAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
