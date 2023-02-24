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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  ListCustomRoutingAcceleratorsRequest,
  ListCustomRoutingAcceleratorsRequestFilterSensitiveLog,
  ListCustomRoutingAcceleratorsResponse,
  ListCustomRoutingAcceleratorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand,
  serializeAws_json1_1ListCustomRoutingAcceleratorsCommand,
} from "../protocols/Aws_json1_1";

export interface ListCustomRoutingAcceleratorsCommandInput extends ListCustomRoutingAcceleratorsRequest {}
export interface ListCustomRoutingAcceleratorsCommandOutput
  extends ListCustomRoutingAcceleratorsResponse,
    __MetadataBearer {}

/**
 * <p>List the custom routing accelerators for an Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingAcceleratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class ListCustomRoutingAcceleratorsCommand extends $Command<
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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

  constructor(readonly input: ListCustomRoutingAcceleratorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomRoutingAcceleratorsCommandInput, ListCustomRoutingAcceleratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCustomRoutingAcceleratorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingAcceleratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomRoutingAcceleratorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCustomRoutingAcceleratorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomRoutingAcceleratorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomRoutingAcceleratorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingAcceleratorsCommandOutput> {
    return deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
