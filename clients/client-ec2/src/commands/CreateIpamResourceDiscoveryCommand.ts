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
  CreateIpamResourceDiscoveryRequest,
  CreateIpamResourceDiscoveryRequestFilterSensitiveLog,
  CreateIpamResourceDiscoveryResult,
  CreateIpamResourceDiscoveryResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateIpamResourceDiscoveryCommand,
  serializeAws_ec2CreateIpamResourceDiscoveryCommand,
} from "../protocols/Aws_ec2";

export interface CreateIpamResourceDiscoveryCommandInput extends CreateIpamResourceDiscoveryRequest {}
export interface CreateIpamResourceDiscoveryCommandOutput extends CreateIpamResourceDiscoveryResult, __MetadataBearer {}

/**
 * <p>Creates an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM Service to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link CreateIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateIpamResourceDiscoveryCommand extends $Command<
  CreateIpamResourceDiscoveryCommandInput,
  CreateIpamResourceDiscoveryCommandOutput,
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

  constructor(readonly input: CreateIpamResourceDiscoveryCommandInput) {
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
  ): Handler<CreateIpamResourceDiscoveryCommandInput, CreateIpamResourceDiscoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateIpamResourceDiscoveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateIpamResourceDiscoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIpamResourceDiscoveryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateIpamResourceDiscoveryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIpamResourceDiscoveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateIpamResourceDiscoveryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIpamResourceDiscoveryCommandOutput> {
    return deserializeAws_ec2CreateIpamResourceDiscoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
