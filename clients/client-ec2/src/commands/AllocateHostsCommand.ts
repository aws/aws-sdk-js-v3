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
  AllocateHostsRequest,
  AllocateHostsRequestFilterSensitiveLog,
  AllocateHostsResult,
  AllocateHostsResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_ec2AllocateHostsCommand, serializeAws_ec2AllocateHostsCommand } from "../protocols/Aws_ec2";

export interface AllocateHostsCommandInput extends AllocateHostsRequest {}
export interface AllocateHostsCommandOutput extends AllocateHostsResult, __MetadataBearer {}

/**
 * <p>Allocates a Dedicated Host to your account. At a minimum, specify the supported
 *             instance type or instance family, the Availability Zone in which to allocate the host,
 *             and the number of hosts to allocate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AllocateHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateHostsCommandInput} for command's `input` shape.
 * @see {@link AllocateHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AllocateHostsCommand extends $Command<
  AllocateHostsCommandInput,
  AllocateHostsCommandOutput,
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

  constructor(readonly input: AllocateHostsCommandInput) {
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
  ): Handler<AllocateHostsCommandInput, AllocateHostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AllocateHostsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AllocateHostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocateHostsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AllocateHostsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllocateHostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AllocateHostsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllocateHostsCommandOutput> {
    return deserializeAws_ec2AllocateHostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
