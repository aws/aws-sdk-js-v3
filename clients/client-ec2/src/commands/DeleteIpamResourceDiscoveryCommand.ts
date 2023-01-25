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
  DeleteIpamResourceDiscoveryRequest,
  DeleteIpamResourceDiscoveryRequestFilterSensitiveLog,
  DeleteIpamResourceDiscoveryResult,
  DeleteIpamResourceDiscoveryResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteIpamResourceDiscoveryCommand,
  serializeAws_ec2DeleteIpamResourceDiscoveryCommand,
} from "../protocols/Aws_ec2";

export interface DeleteIpamResourceDiscoveryCommandInput extends DeleteIpamResourceDiscoveryRequest {}
export interface DeleteIpamResourceDiscoveryCommandOutput extends DeleteIpamResourceDiscoveryResult, __MetadataBearer {}

/**
 * <p>Deletes an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM Service to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteIpamResourceDiscoveryCommand extends $Command<
  DeleteIpamResourceDiscoveryCommandInput,
  DeleteIpamResourceDiscoveryCommandOutput,
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

  constructor(readonly input: DeleteIpamResourceDiscoveryCommandInput) {
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
  ): Handler<DeleteIpamResourceDiscoveryCommandInput, DeleteIpamResourceDiscoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteIpamResourceDiscoveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteIpamResourceDiscoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIpamResourceDiscoveryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteIpamResourceDiscoveryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIpamResourceDiscoveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteIpamResourceDiscoveryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteIpamResourceDiscoveryCommandOutput> {
    return deserializeAws_ec2DeleteIpamResourceDiscoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
