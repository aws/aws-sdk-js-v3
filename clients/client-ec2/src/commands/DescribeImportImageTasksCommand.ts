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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeImportImageTasksRequest,
  DescribeImportImageTasksRequestFilterSensitiveLog,
  DescribeImportImageTasksResult,
  DescribeImportImageTasksResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeImportImageTasksCommand,
  serializeAws_ec2DescribeImportImageTasksCommand,
} from "../protocols/Aws_ec2";

export interface DescribeImportImageTasksCommandInput extends DescribeImportImageTasksRequest {}
export interface DescribeImportImageTasksCommandOutput extends DescribeImportImageTasksResult, __MetadataBearer {}

/**
 * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImportImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeImportImageTasksCommand extends $Command<
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput,
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

  constructor(readonly input: DescribeImportImageTasksCommandInput) {
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
  ): Handler<DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImportImageTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImportImageTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImportImageTasksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeImportImageTasksResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImportImageTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeImportImageTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImportImageTasksCommandOutput> {
    return deserializeAws_ec2DescribeImportImageTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
