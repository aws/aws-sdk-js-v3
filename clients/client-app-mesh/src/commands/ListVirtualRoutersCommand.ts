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
  ListVirtualRoutersInput,
  ListVirtualRoutersInputFilterSensitiveLog,
  ListVirtualRoutersOutput,
  ListVirtualRoutersOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListVirtualRoutersCommand,
  serializeAws_restJson1ListVirtualRoutersCommand,
} from "../protocols/Aws_restJson1";

export interface ListVirtualRoutersCommandInput extends ListVirtualRoutersInput {}
export interface ListVirtualRoutersCommandOutput extends ListVirtualRoutersOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing virtual routers in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualRoutersCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualRoutersCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualRoutersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualRoutersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualRoutersCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class ListVirtualRoutersCommand extends $Command<
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput,
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

  constructor(readonly input: ListVirtualRoutersCommandInput) {
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
  ): Handler<ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVirtualRoutersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "ListVirtualRoutersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVirtualRoutersInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualRoutersOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVirtualRoutersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVirtualRoutersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualRoutersCommandOutput> {
    return deserializeAws_restJson1ListVirtualRoutersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
