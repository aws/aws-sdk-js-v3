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

import {
  DescribeCanariesRequest,
  DescribeCanariesRequestFilterSensitiveLog,
  DescribeCanariesResponse,
  DescribeCanariesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCanariesCommand,
  serializeAws_restJson1DescribeCanariesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

export interface DescribeCanariesCommandInput extends DescribeCanariesRequest {}
export interface DescribeCanariesCommandOutput extends DescribeCanariesResponse, __MetadataBearer {}

/**
 * <p>This operation returns a list of the canaries in your account, along with full details
 *       about each canary.</p>
 *          <p>This operation supports resource-level authorization using an IAM policy and
 *       the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view
 *          all the canaries that you specify in your request. If you do not have permission to view any of
 *          the canaries, the request fails with a 403 response.</p>
 *          <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an
 *          IAM policy that restricts which canaries that you are allowed to view. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html">
 *             Limiting a user to viewing specific canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeCanariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCanariesCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 */
export class DescribeCanariesCommand extends $Command<
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
  SyntheticsClientResolvedConfig
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

  constructor(readonly input: DescribeCanariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCanariesCommandInput, DescribeCanariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCanariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "DescribeCanariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCanariesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCanariesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCanariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCanariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCanariesCommandOutput> {
    return deserializeAws_restJson1DescribeCanariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
