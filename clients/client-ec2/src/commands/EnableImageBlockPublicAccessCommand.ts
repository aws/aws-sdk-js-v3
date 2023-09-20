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
import { EnableImageBlockPublicAccessRequest, EnableImageBlockPublicAccessResult } from "../models/models_5";
import { de_EnableImageBlockPublicAccessCommand, se_EnableImageBlockPublicAccessCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableImageBlockPublicAccessCommand}.
 */
export interface EnableImageBlockPublicAccessCommandInput extends EnableImageBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link EnableImageBlockPublicAccessCommand}.
 */
export interface EnableImageBlockPublicAccessCommandOutput
  extends EnableImageBlockPublicAccessResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables <i>block public access for AMIs</i> at the account level in the
 *       specified Amazon Web Services Region. This prevents the public sharing of your AMIs. However, if you already
 *       have public AMIs, they will remain publicly available.</p>
 *          <p>The API can take up to 10 minutes to configure this setting. During this time, if you run
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetImageBlockPublicAccessState.html">GetImageBlockPublicAccessState</a>, the response will be <code>unblocked</code>. When
 *       the API has completed the configuration, the response will be
 *       <code>block-new-sharing</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html#block-public-access-to-amis">Block
 *         public access to your AMIs</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableImageBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableImageBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableImageBlockPublicAccessRequest
 *   ImageBlockPublicAccessState: "block-new-sharing", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableImageBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // EnableImageBlockPublicAccessResult
 * //   ImageBlockPublicAccessState: "block-new-sharing",
 * // };
 *
 * ```
 *
 * @param EnableImageBlockPublicAccessCommandInput - {@link EnableImageBlockPublicAccessCommandInput}
 * @returns {@link EnableImageBlockPublicAccessCommandOutput}
 * @see {@link EnableImageBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link EnableImageBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableImageBlockPublicAccessCommand extends $Command<
  EnableImageBlockPublicAccessCommandInput,
  EnableImageBlockPublicAccessCommandOutput,
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
  constructor(readonly input: EnableImageBlockPublicAccessCommandInput) {
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
  ): Handler<EnableImageBlockPublicAccessCommandInput, EnableImageBlockPublicAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableImageBlockPublicAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableImageBlockPublicAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "EnableImageBlockPublicAccess",
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
  private serialize(input: EnableImageBlockPublicAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableImageBlockPublicAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableImageBlockPublicAccessCommandOutput> {
    return de_EnableImageBlockPublicAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
