import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualRouterInput, CreateVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualRouterCommand,
  serializeAws_restJson1CreateVirtualRouterCommand,
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

export type CreateVirtualRouterCommandInput = CreateVirtualRouterInput;
export type CreateVirtualRouterCommandOutput = CreateVirtualRouterOutput & __MetadataBearer;

/**
 * <p>Creates a virtual router within a service mesh.</p>
 *          <p>Specify a <code>listener</code> for any inbound traffic that your virtual router
 *          receives. Create a virtual router for each protocol and port that you need to route.
 *          Virtual routers handle traffic for one or more virtual services within your mesh. After you
 *          create your virtual router, create and associate routes for your virtual router that direct
 *          incoming requests to different virtual nodes.</p>
 *          <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
 */
export class CreateVirtualRouterCommand extends $Command<
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVirtualRouterCommandInput) {
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
  ): Handler<CreateVirtualRouterCommandInput, CreateVirtualRouterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateVirtualRouterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualRouterOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualRouterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVirtualRouterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualRouterCommandOutput> {
    return deserializeAws_restJson1CreateVirtualRouterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
