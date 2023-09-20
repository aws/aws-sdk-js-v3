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
import { DeregisterImageRequest } from "../models/models_3";
import { de_DeregisterImageCommand, se_DeregisterImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeregisterImageCommand}.
 */
export interface DeregisterImageCommandInput extends DeregisterImageRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterImageCommand}.
 */
export interface DeregisterImageCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to
 *        launch new instances.</p>
 *          <p>If you deregister an AMI that matches a Recycle Bin retention rule, the AMI is retained
 *       in the Recycle Bin for the specified retention period. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in
 *       the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you deregister an AMI, it doesn't affect any instances that you've already
 *        launched from the AMI. You'll continue to incur usage costs for those instances until
 *        you terminate them.</p>
 *          <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was
 * 			created for the root volume of the instance during the AMI creation process. When you
 * 			deregister an instance store-backed AMI, it doesn't affect the files that you uploaded
 * 			to Amazon S3 when you created the AMI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeregisterImageRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeregisterImageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterImageCommandInput - {@link DeregisterImageCommandInput}
 * @returns {@link DeregisterImageCommandOutput}
 * @see {@link DeregisterImageCommandInput} for command's `input` shape.
 * @see {@link DeregisterImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeregisterImageCommand extends $Command<
  DeregisterImageCommandInput,
  DeregisterImageCommandOutput,
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
  constructor(readonly input: DeregisterImageCommandInput) {
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
  ): Handler<DeregisterImageCommandInput, DeregisterImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeregisterImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeregisterImage",
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
  private serialize(input: DeregisterImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeregisterImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterImageCommandOutput> {
    return de_DeregisterImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
