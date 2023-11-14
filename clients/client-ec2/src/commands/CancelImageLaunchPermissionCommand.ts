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
import { CancelImageLaunchPermissionRequest, CancelImageLaunchPermissionResult } from "../models/models_0";
import { de_CancelImageLaunchPermissionCommand, se_CancelImageLaunchPermissionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelImageLaunchPermissionCommand}.
 */
export interface CancelImageLaunchPermissionCommandInput extends CancelImageLaunchPermissionRequest {}
/**
 * @public
 *
 * The output of {@link CancelImageLaunchPermissionCommand}.
 */
export interface CancelImageLaunchPermissionCommandOutput extends CancelImageLaunchPermissionResult, __MetadataBearer {}

/**
 * @public
 * <p>Removes your Amazon Web Services account from the launch permissions for the specified AMI. For more
 *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cancel-sharing-an-AMI.html">
 *         Cancel having an AMI shared with your Amazon Web Services account</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelImageLaunchPermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelImageLaunchPermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelImageLaunchPermissionRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CancelImageLaunchPermissionCommand(input);
 * const response = await client.send(command);
 * // { // CancelImageLaunchPermissionResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param CancelImageLaunchPermissionCommandInput - {@link CancelImageLaunchPermissionCommandInput}
 * @returns {@link CancelImageLaunchPermissionCommandOutput}
 * @see {@link CancelImageLaunchPermissionCommandInput} for command's `input` shape.
 * @see {@link CancelImageLaunchPermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CancelImageLaunchPermissionCommand extends $Command<
  CancelImageLaunchPermissionCommandInput,
  CancelImageLaunchPermissionCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: CancelImageLaunchPermissionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelImageLaunchPermissionCommandInput, CancelImageLaunchPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelImageLaunchPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelImageLaunchPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CancelImageLaunchPermission",
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
  private serialize(input: CancelImageLaunchPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelImageLaunchPermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelImageLaunchPermissionCommandOutput> {
    return de_CancelImageLaunchPermissionCommand(output, context);
  }
}
