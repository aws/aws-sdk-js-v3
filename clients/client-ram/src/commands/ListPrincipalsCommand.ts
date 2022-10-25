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
  ListPrincipalsRequest,
  ListPrincipalsRequestFilterSensitiveLog,
  ListPrincipalsResponse,
  ListPrincipalsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPrincipalsCommand,
  serializeAws_restJson1ListPrincipalsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface ListPrincipalsCommandInput extends ListPrincipalsRequest {}
export interface ListPrincipalsCommandOutput extends ListPrincipalsResponse, __MetadataBearer {}

/**
 * <p>Lists the principals that you are sharing resources with or that are sharing resources
 *             with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPrincipalsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPrincipalsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class ListPrincipalsCommand extends $Command<
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput,
  RAMClientResolvedConfig
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

  constructor(readonly input: ListPrincipalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPrincipalsCommandInput, ListPrincipalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPrincipalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListPrincipalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPrincipalsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPrincipalsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPrincipalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPrincipalsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPrincipalsCommandOutput> {
    return deserializeAws_restJson1ListPrincipalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
