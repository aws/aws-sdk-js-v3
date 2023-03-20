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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListCoreDefinitionsRequest, ListCoreDefinitionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListCoreDefinitionsCommand,
  serializeAws_restJson1ListCoreDefinitionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListCoreDefinitionsCommand}.
 */
export interface ListCoreDefinitionsCommandInput extends ListCoreDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreDefinitionsCommand}.
 */
export interface ListCoreDefinitionsCommandOutput extends ListCoreDefinitionsResponse, __MetadataBearer {}

/**
 * @public
 * Retrieves a list of core definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListCoreDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListCoreDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListCoreDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListCoreDefinitionsCommandInput - {@link ListCoreDefinitionsCommandInput}
 * @returns {@link ListCoreDefinitionsCommandOutput}
 * @see {@link ListCoreDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCoreDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 *
 */
export class ListCoreDefinitionsCommand extends $Command<
  ListCoreDefinitionsCommandInput,
  ListCoreDefinitionsCommandOutput,
  GreengrassClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ListCoreDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCoreDefinitionsCommandInput, ListCoreDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCoreDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListCoreDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListCoreDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCoreDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCoreDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListCoreDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
