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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import {
  CreateVirtualServiceInput,
  CreateVirtualServiceInputFilterSensitiveLog,
  CreateVirtualServiceOutput,
  CreateVirtualServiceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualServiceCommand,
  serializeAws_restJson1CreateVirtualServiceCommand,
} from "../protocols/Aws_restJson1";

export interface CreateVirtualServiceCommandInput extends CreateVirtualServiceInput {}
export interface CreateVirtualServiceCommandOutput extends CreateVirtualServiceOutput, __MetadataBearer {}

/**
 * <p>Creates a virtual service within a service mesh.</p>
 *          <p>A virtual service is an abstraction of a real service that is provided by a virtual node
 *          directly or indirectly by means of a virtual router. Dependent services call your virtual
 *          service by its <code>virtualServiceName</code>, and those requests are routed to the
 *          virtual node or virtual router that is specified as the provider for the virtual
 *          service.</p>
 *          <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class CreateVirtualServiceCommand extends $Command<
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
  AppMeshClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVirtualServiceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateVirtualServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualServiceInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualServiceOutputFilterSensitiveLog,
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
