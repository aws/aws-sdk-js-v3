import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyHostsRequest, ModifyHostsResult } from "../models/models_4";
import { deserializeAws_ec2ModifyHostsCommand, serializeAws_ec2ModifyHostsCommand } from "../protocols/Aws_ec2";
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

export type ModifyHostsCommandInput = ModifyHostsRequest;
export type ModifyHostsCommandOutput = ModifyHostsResult & __MetadataBearer;

/**
 * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled,
 *             any instances that you launch with a tenancy of <code>host</code> but without a specific host
 *         	ID are placed onto any available Dedicated Host in your account that has auto-placement enabled.
 *         	When auto-placement is disabled, you need to provide a host ID to have the instance launch onto
 *         	a specific host. If no host ID is provided, the instance is launched onto a suitable host with
 *         	auto-placement enabled.</p>
 *     	    <p>You can also use this API action to modify a Dedicated Host to support either multiple
 *     		instance types in an instance family, or to support a specific instance type only.</p>
 */
export class ModifyHostsCommand extends $Command<
  ModifyHostsCommandInput,
  ModifyHostsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyHostsCommandInput) {
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
  ): Handler<ModifyHostsCommandInput, ModifyHostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyHostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyHostsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyHostsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyHostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyHostsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyHostsCommandOutput> {
    return deserializeAws_ec2ModifyHostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
