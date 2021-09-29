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
import { DescribePrefixListsRequest, DescribePrefixListsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribePrefixListsCommand,
  serializeAws_ec2DescribePrefixListsCommand,
} from "../protocols/Aws_ec2";

export interface DescribePrefixListsCommandInput extends DescribePrefixListsRequest {}
export interface DescribePrefixListsCommandOutput extends DescribePrefixListsResult, __MetadataBearer {}

/**
 * <p>Describes available Amazon Web Services services in a prefix list format, which includes the prefix list
 *             name and prefix list ID of the service and the IP address range for the service.</p>
 *         <p>We recommend that you use <a>DescribeManagedPrefixLists</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrefixListsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrefixListsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePrefixListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePrefixListsCommandInput} for command's `input` shape.
 * @see {@link DescribePrefixListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribePrefixListsCommand extends $Command<
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePrefixListsCommandInput) {
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
  ): Handler<DescribePrefixListsCommandInput, DescribePrefixListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribePrefixListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePrefixListsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePrefixListsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePrefixListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribePrefixListsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePrefixListsCommandOutput> {
    return deserializeAws_ec2DescribePrefixListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
