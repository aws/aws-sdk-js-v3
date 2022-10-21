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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  ListEntityPersonasRequest,
  ListEntityPersonasRequestFilterSensitiveLog,
  ListEntityPersonasResponse,
  ListEntityPersonasResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListEntityPersonasCommand,
  serializeAws_json1_1ListEntityPersonasCommand,
} from "../protocols/Aws_json1_1";

export interface ListEntityPersonasCommandInput extends ListEntityPersonasRequest {}
export interface ListEntityPersonasCommandOutput extends ListEntityPersonasResponse, __MetadataBearer {}

/**
 * <p>Lists specific permissions of users and groups with access to your
 *             Amazon Kendra experience.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListEntityPersonasCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListEntityPersonasCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListEntityPersonasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntityPersonasCommandInput} for command's `input` shape.
 * @see {@link ListEntityPersonasCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class ListEntityPersonasCommand extends $Command<
  ListEntityPersonasCommandInput,
  ListEntityPersonasCommandOutput,
  KendraClientResolvedConfig
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

  constructor(readonly input: ListEntityPersonasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntityPersonasCommandInput, ListEntityPersonasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEntityPersonasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListEntityPersonasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEntityPersonasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEntityPersonasResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEntityPersonasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEntityPersonasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEntityPersonasCommandOutput> {
    return deserializeAws_json1_1ListEntityPersonasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
