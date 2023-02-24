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
  GetManagedPrefixListEntriesRequest,
  GetManagedPrefixListEntriesRequestFilterSensitiveLog,
  GetManagedPrefixListEntriesResult,
  GetManagedPrefixListEntriesResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetManagedPrefixListEntriesCommand,
  serializeAws_ec2GetManagedPrefixListEntriesCommand,
} from "../protocols/Aws_ec2";

export interface GetManagedPrefixListEntriesCommandInput extends GetManagedPrefixListEntriesRequest {}
export interface GetManagedPrefixListEntriesCommandOutput extends GetManagedPrefixListEntriesResult, __MetadataBearer {}

/**
 * <p>Gets information about the entries for a specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetManagedPrefixListEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetManagedPrefixListEntriesCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetManagedPrefixListEntriesCommand extends $Command<
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput,
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

  constructor(readonly input: GetManagedPrefixListEntriesCommandInput) {
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
  ): Handler<GetManagedPrefixListEntriesCommandInput, GetManagedPrefixListEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetManagedPrefixListEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetManagedPrefixListEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetManagedPrefixListEntriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetManagedPrefixListEntriesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetManagedPrefixListEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetManagedPrefixListEntriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetManagedPrefixListEntriesCommandOutput> {
    return deserializeAws_ec2GetManagedPrefixListEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
