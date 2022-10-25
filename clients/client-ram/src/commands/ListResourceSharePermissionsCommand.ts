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
  ListResourceSharePermissionsRequest,
  ListResourceSharePermissionsRequestFilterSensitiveLog,
  ListResourceSharePermissionsResponse,
  ListResourceSharePermissionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListResourceSharePermissionsCommand,
  serializeAws_restJson1ListResourceSharePermissionsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface ListResourceSharePermissionsCommandInput extends ListResourceSharePermissionsRequest {}
export interface ListResourceSharePermissionsCommandOutput
  extends ListResourceSharePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the RAM permissions that are associated with a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceSharePermissionsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourceSharePermissionsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListResourceSharePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceSharePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSharePermissionsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class ListResourceSharePermissionsCommand extends $Command<
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
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

  constructor(readonly input: ListResourceSharePermissionsCommandInput) {
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
  ): Handler<ListResourceSharePermissionsCommandInput, ListResourceSharePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceSharePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListResourceSharePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceSharePermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListResourceSharePermissionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceSharePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResourceSharePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourceSharePermissionsCommandOutput> {
    return deserializeAws_restJson1ListResourceSharePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
