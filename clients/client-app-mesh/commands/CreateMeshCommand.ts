import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateMeshInput, CreateMeshOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeshCommand,
  serializeAws_restJson1CreateMeshCommand,
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

export type CreateMeshCommandInput = CreateMeshInput;
export type CreateMeshCommandOutput = CreateMeshOutput & __MetadataBearer;

/**
 * <p>Creates a service mesh.</p>
 *          <p> A service mesh is a logical boundary for network traffic between services that are
 *          represented by resources within the mesh. After you create your service mesh, you can
 *          create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
 *          between the applications in your mesh.</p>
 *          <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
 */
export class CreateMeshCommand extends $Command<
  CreateMeshCommandInput,
  CreateMeshCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMeshCommandInput) {
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
  ): Handler<CreateMeshCommandInput, CreateMeshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateMeshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeshInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMeshOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMeshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMeshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMeshCommandOutput> {
    return deserializeAws_restJson1CreateMeshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
