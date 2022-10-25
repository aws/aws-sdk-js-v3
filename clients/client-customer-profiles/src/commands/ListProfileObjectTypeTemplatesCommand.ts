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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  ListProfileObjectTypeTemplatesRequest,
  ListProfileObjectTypeTemplatesRequestFilterSensitiveLog,
  ListProfileObjectTypeTemplatesResponse,
  ListProfileObjectTypeTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand,
  serializeAws_restJson1ListProfileObjectTypeTemplatesCommand,
} from "../protocols/Aws_restJson1";

export interface ListProfileObjectTypeTemplatesCommandInput extends ListProfileObjectTypeTemplatesRequest {}
export interface ListProfileObjectTypeTemplatesCommandOutput
  extends ListProfileObjectTypeTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all of the template information for object types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectTypeTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectTypeTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypeTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class ListProfileObjectTypeTemplatesCommand extends $Command<
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
  CustomerProfilesClientResolvedConfig
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

  constructor(readonly input: ListProfileObjectTypeTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProfileObjectTypeTemplatesCommandInput, ListProfileObjectTypeTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProfileObjectTypeTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListProfileObjectTypeTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProfileObjectTypeTemplatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProfileObjectTypeTemplatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListProfileObjectTypeTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProfileObjectTypeTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProfileObjectTypeTemplatesCommandOutput> {
    return deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
