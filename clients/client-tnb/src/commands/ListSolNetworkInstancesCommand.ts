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
  ListSolNetworkInstancesInput,
  ListSolNetworkInstancesInputFilterSensitiveLog,
  ListSolNetworkInstancesOutput,
  ListSolNetworkInstancesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSolNetworkInstancesCommand,
  serializeAws_restJson1ListSolNetworkInstancesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface ListSolNetworkInstancesCommandInput extends ListSolNetworkInstancesInput {}
export interface ListSolNetworkInstancesCommandOutput extends ListSolNetworkInstancesOutput, __MetadataBearer {}

/**
 * <p>Lists your network instances.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkInstancesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkInstancesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new ListSolNetworkInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolNetworkInstancesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkInstancesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class ListSolNetworkInstancesCommand extends $Command<
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput,
  TnbClientResolvedConfig
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

  constructor(readonly input: ListSolNetworkInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSolNetworkInstancesCommandInput, ListSolNetworkInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolNetworkInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolNetworkInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSolNetworkInstancesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSolNetworkInstancesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSolNetworkInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSolNetworkInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolNetworkInstancesCommandOutput> {
    return deserializeAws_restJson1ListSolNetworkInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
