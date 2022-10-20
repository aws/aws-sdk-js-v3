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
  ListEndpointGroupsRequest,
  ListEndpointGroupsRequestFilterSensitiveLog,
  ListEndpointGroupsResponse,
  ListEndpointGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListEndpointGroupsCommand,
  serializeAws_json1_1ListEndpointGroupsCommand,
} from "../protocols/Aws_json1_1";

export interface ListEndpointGroupsCommandInput extends ListEndpointGroupsRequest {}
export interface ListEndpointGroupsCommandOutput extends ListEndpointGroupsResponse, __MetadataBearer {}

/**
 * <p>List the endpoint groups that are associated with a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class ListEndpointGroupsCommand extends $Command<
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput,
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

  constructor(readonly input: ListEndpointGroupsCommandInput) {
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
  ): Handler<ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEndpointGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListEndpointGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEndpointGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEndpointGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEndpointGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEndpointGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEndpointGroupsCommandOutput> {
    return deserializeAws_json1_1ListEndpointGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
