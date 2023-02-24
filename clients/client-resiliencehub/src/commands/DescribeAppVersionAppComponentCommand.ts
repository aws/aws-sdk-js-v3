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
  DescribeAppVersionAppComponentRequest,
  DescribeAppVersionAppComponentRequestFilterSensitiveLog,
  DescribeAppVersionAppComponentResponse,
  DescribeAppVersionAppComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppVersionAppComponentCommand,
  serializeAws_restJson1DescribeAppVersionAppComponentCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface DescribeAppVersionAppComponentCommandInput extends DescribeAppVersionAppComponentRequest {}
export interface DescribeAppVersionAppComponentCommandOutput
  extends DescribeAppVersionAppComponentResponse,
    __MetadataBearer {}

/**
 * <p>Describes an Application Component in the AWS Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionAppComponentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionAppComponentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new DescribeAppVersionAppComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppVersionAppComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionAppComponentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class DescribeAppVersionAppComponentCommand extends $Command<
  DescribeAppVersionAppComponentCommandInput,
  DescribeAppVersionAppComponentCommandOutput,
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

  constructor(readonly input: DescribeAppVersionAppComponentCommandInput) {
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
  ): Handler<DescribeAppVersionAppComponentCommandInput, DescribeAppVersionAppComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppVersionAppComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DescribeAppVersionAppComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAppVersionAppComponentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAppVersionAppComponentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAppVersionAppComponentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAppVersionAppComponentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAppVersionAppComponentCommandOutput> {
    return deserializeAws_restJson1DescribeAppVersionAppComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
