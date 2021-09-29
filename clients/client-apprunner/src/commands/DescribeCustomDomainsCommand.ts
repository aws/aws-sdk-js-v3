import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DescribeCustomDomainsRequest, DescribeCustomDomainsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeCustomDomainsCommand,
  serializeAws_json1_0DescribeCustomDomainsCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeCustomDomainsCommandInput extends DescribeCustomDomainsRequest {}
export interface DescribeCustomDomainsCommandOutput extends DescribeCustomDomainsResponse, __MetadataBearer {}

/**
 * <p>Return a description of custom domain names that are associated with an AWS App Runner service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeCustomDomainsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeCustomDomainsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeCustomDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomDomainsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCustomDomainsCommand extends $Command<
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomDomainsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomDomainsCommandInput, DescribeCustomDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DescribeCustomDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomDomainsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomDomainsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCustomDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeCustomDomainsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomDomainsCommandOutput> {
    return deserializeAws_json1_0DescribeCustomDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
