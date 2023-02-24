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
  ListSolFunctionInstancesInput,
  ListSolFunctionInstancesInputFilterSensitiveLog,
  ListSolFunctionInstancesOutput,
  ListSolFunctionInstancesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSolFunctionInstancesCommand,
  serializeAws_restJson1ListSolFunctionInstancesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface ListSolFunctionInstancesCommandInput extends ListSolFunctionInstancesInput {}
export interface ListSolFunctionInstancesCommandOutput extends ListSolFunctionInstancesOutput, __MetadataBearer {}

/**
 * <p>Lists network function instances.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolFunctionInstancesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolFunctionInstancesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new ListSolFunctionInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolFunctionInstancesCommandInput} for command's `input` shape.
 * @see {@link ListSolFunctionInstancesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class ListSolFunctionInstancesCommand extends $Command<
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput,
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

  constructor(readonly input: ListSolFunctionInstancesCommandInput) {
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
  ): Handler<ListSolFunctionInstancesCommandInput, ListSolFunctionInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolFunctionInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolFunctionInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSolFunctionInstancesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSolFunctionInstancesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSolFunctionInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSolFunctionInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolFunctionInstancesCommandOutput> {
    return deserializeAws_restJson1ListSolFunctionInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
