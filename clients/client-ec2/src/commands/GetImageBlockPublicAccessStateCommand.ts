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
import { GetImageBlockPublicAccessStateRequest, GetImageBlockPublicAccessStateResult } from "../models/models_5";
import {
  de_GetImageBlockPublicAccessStateCommand,
  se_GetImageBlockPublicAccessStateCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImageBlockPublicAccessStateCommand}.
 */
export interface GetImageBlockPublicAccessStateCommandInput extends GetImageBlockPublicAccessStateRequest {}
/**
 * @public
 *
 * The output of {@link GetImageBlockPublicAccessStateCommand}.
 */
export interface GetImageBlockPublicAccessStateCommandOutput
  extends GetImageBlockPublicAccessStateResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the current state of <i>block public access for AMIs</i> at the account
 *       level in the specified Amazon Web Services Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html#block-public-access-to-amis">Block
 *         public access to your AMIs</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetImageBlockPublicAccessStateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetImageBlockPublicAccessStateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetImageBlockPublicAccessStateRequest
 *   DryRun: true || false,
 * };
 * const command = new GetImageBlockPublicAccessStateCommand(input);
 * const response = await client.send(command);
 * // { // GetImageBlockPublicAccessStateResult
 * //   ImageBlockPublicAccessState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageBlockPublicAccessStateCommandInput - {@link GetImageBlockPublicAccessStateCommandInput}
 * @returns {@link GetImageBlockPublicAccessStateCommandOutput}
 * @see {@link GetImageBlockPublicAccessStateCommandInput} for command's `input` shape.
 * @see {@link GetImageBlockPublicAccessStateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetImageBlockPublicAccessStateCommand extends $Command<
  GetImageBlockPublicAccessStateCommandInput,
  GetImageBlockPublicAccessStateCommandOutput,
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
  constructor(readonly input: GetImageBlockPublicAccessStateCommandInput) {
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
  ): Handler<GetImageBlockPublicAccessStateCommandInput, GetImageBlockPublicAccessStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetImageBlockPublicAccessStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetImageBlockPublicAccessStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetImageBlockPublicAccessState",
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
  private serialize(
    input: GetImageBlockPublicAccessStateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetImageBlockPublicAccessStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetImageBlockPublicAccessStateCommandOutput> {
    return de_GetImageBlockPublicAccessStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
