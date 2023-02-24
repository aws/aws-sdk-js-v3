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
  ListAccessControlConfigurationsRequest,
  ListAccessControlConfigurationsRequestFilterSensitiveLog,
  ListAccessControlConfigurationsResponse,
  ListAccessControlConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAccessControlConfigurationsCommand,
  serializeAws_json1_1ListAccessControlConfigurationsCommand,
} from "../protocols/Aws_json1_1";

export interface ListAccessControlConfigurationsCommandInput extends ListAccessControlConfigurationsRequest {}
export interface ListAccessControlConfigurationsCommandOutput
  extends ListAccessControlConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists one or more access control configurations for an index. This
 *             includes user and group access information for your documents. This
 *             is useful for user context filtering, where search results are filtered
 *             based on the user or their group access to documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListAccessControlConfigurationsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListAccessControlConfigurationsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListAccessControlConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessControlConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAccessControlConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class ListAccessControlConfigurationsCommand extends $Command<
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput,
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

  constructor(readonly input: ListAccessControlConfigurationsCommandInput) {
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
  ): Handler<ListAccessControlConfigurationsCommandInput, ListAccessControlConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccessControlConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListAccessControlConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessControlConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAccessControlConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAccessControlConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccessControlConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAccessControlConfigurationsCommandOutput> {
    return deserializeAws_json1_1ListAccessControlConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
