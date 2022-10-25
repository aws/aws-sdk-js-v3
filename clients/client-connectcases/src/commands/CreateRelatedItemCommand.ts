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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import {
  CreateRelatedItemRequest,
  CreateRelatedItemRequestFilterSensitiveLog,
  CreateRelatedItemResponse,
  CreateRelatedItemResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateRelatedItemCommand,
  serializeAws_restJson1CreateRelatedItemCommand,
} from "../protocols/Aws_restJson1";

export interface CreateRelatedItemCommandInput extends CreateRelatedItemRequest {}
export interface CreateRelatedItemCommandOutput extends CreateRelatedItemResponse, __MetadataBearer {}

/**
 * <p>Creates a related item (comments, tasks, and contacts) and associates it with a
 *       case.</p>
 *          <note>
 *             <p>A Related Item is a resource that is associated with a case. It may or may not have an
 *         external identifier linking it to an external resource (for example, a
 *           <code>contactArn</code>). All Related Items have their own internal identifier, the
 *           <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and
 *           <code>contacts</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateRelatedItemCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateRelatedItemCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const command = new CreateRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRelatedItemCommandInput} for command's `input` shape.
 * @see {@link CreateRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 */
export class CreateRelatedItemCommand extends $Command<
  CreateRelatedItemCommandInput,
  CreateRelatedItemCommandOutput,
  ConnectCasesClientResolvedConfig
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

  constructor(readonly input: CreateRelatedItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRelatedItemCommandInput, CreateRelatedItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRelatedItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "CreateRelatedItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRelatedItemRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRelatedItemResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRelatedItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRelatedItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRelatedItemCommandOutput> {
    return deserializeAws_restJson1CreateRelatedItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
