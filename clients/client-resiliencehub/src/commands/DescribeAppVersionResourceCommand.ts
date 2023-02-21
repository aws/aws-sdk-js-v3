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
  DescribeAppVersionResourceRequest,
  DescribeAppVersionResourceRequestFilterSensitiveLog,
  DescribeAppVersionResourceResponse,
  DescribeAppVersionResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppVersionResourceCommand,
  serializeAws_restJson1DescribeAppVersionResourceCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface DescribeAppVersionResourceCommandInput extends DescribeAppVersionResourceRequest {}
export interface DescribeAppVersionResourceCommandOutput extends DescribeAppVersionResourceResponse, __MetadataBearer {}

/**
 * <p>Describes a resource of the AWS Resilience Hub application.</p>
 *          <note>
 *             <p>This API accepts only one of the following parameters to descibe the resource:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>resourceName</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>logicalResourceId</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also
 *             provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new DescribeAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionResourceCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class DescribeAppVersionResourceCommand extends $Command<
  DescribeAppVersionResourceCommandInput,
  DescribeAppVersionResourceCommandOutput,
  ResiliencehubClientResolvedConfig
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

  constructor(readonly input: DescribeAppVersionResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppVersionResourceCommandInput, DescribeAppVersionResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppVersionResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DescribeAppVersionResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAppVersionResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAppVersionResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAppVersionResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAppVersionResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAppVersionResourceCommandOutput> {
    return deserializeAws_restJson1DescribeAppVersionResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
