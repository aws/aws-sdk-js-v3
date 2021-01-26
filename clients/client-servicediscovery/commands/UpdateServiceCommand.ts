import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateServiceCommand,
  serializeAws_json1_1UpdateServiceCommand,
} from "../protocols/Aws_json1_1";
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

export type UpdateServiceCommandInput = UpdateServiceRequest;
export type UpdateServiceCommandOutput = UpdateServiceResponse & __MetadataBearer;

/**
 * <p>Submits a request to perform the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p>
 *             </li>
 *             <li>
 *                <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p>
 *                <note>
 *                   <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>For public and private DNS namespaces, note the following:</p>
 *          <ul>
 *             <li>
 *                <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an
 *       <code>UpdateService</code> request, the configurations are deleted from the service.</p>
 *             </li>
 *             <li>
 *                <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code>
 *      request, the configuration is not deleted from the service.</p>
 *             </li>
 *          </ul>
 *          <p>When you update settings for a service, AWS Cloud Map also updates the corresponding settings in all the records
 *    and health checks that were created by using the specified service.</p>
 */
export class UpdateServiceCommand extends $Command<
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceCommandInput, UpdateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceCommandOutput> {
    return deserializeAws_json1_1UpdateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
