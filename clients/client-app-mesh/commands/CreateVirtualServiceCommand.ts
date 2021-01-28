import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualServiceInput, CreateVirtualServiceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualServiceCommand,
  serializeAws_restJson1CreateVirtualServiceCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateVirtualServiceCommandInput = CreateVirtualServiceInput;
export type CreateVirtualServiceCommandOutput = CreateVirtualServiceOutput & __MetadataBearer;

/**
 * <p>Creates a virtual service within a service mesh.</p>
 *          <p>A virtual service is an abstraction of a real service that is provided by a virtual node
 *          directly or indirectly by means of a virtual router. Dependent services call your virtual
 *          service by its <code>virtualServiceName</code>, and those requests are routed to the
 *          virtual node or virtual router that is specified as the provider for the virtual
 *          service.</p>
 *          <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
 */
export class CreateVirtualServiceCommand extends $Command<
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVirtualServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualServiceCommandInput, CreateVirtualServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateVirtualServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualServiceInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualServiceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVirtualServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualServiceCommandOutput> {
    return deserializeAws_restJson1CreateVirtualServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
