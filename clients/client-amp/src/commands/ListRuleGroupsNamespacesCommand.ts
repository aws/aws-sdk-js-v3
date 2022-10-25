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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import {
  ListRuleGroupsNamespacesRequest,
  ListRuleGroupsNamespacesRequestFilterSensitiveLog,
  ListRuleGroupsNamespacesResponse,
  ListRuleGroupsNamespacesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRuleGroupsNamespacesCommand,
  serializeAws_restJson1ListRuleGroupsNamespacesCommand,
} from "../protocols/Aws_restJson1";

export interface ListRuleGroupsNamespacesCommandInput extends ListRuleGroupsNamespacesRequest {}
export interface ListRuleGroupsNamespacesCommandOutput extends ListRuleGroupsNamespacesResponse, __MetadataBearer {}

/**
 * Lists rule groups namespaces.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListRuleGroupsNamespacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListRuleGroupsNamespacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new ListRuleGroupsNamespacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRuleGroupsNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsNamespacesCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class ListRuleGroupsNamespacesCommand extends $Command<
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput,
  AmpClientResolvedConfig
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

  constructor(readonly input: ListRuleGroupsNamespacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRuleGroupsNamespacesCommandInput, ListRuleGroupsNamespacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRuleGroupsNamespacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "ListRuleGroupsNamespacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRuleGroupsNamespacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRuleGroupsNamespacesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRuleGroupsNamespacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRuleGroupsNamespacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRuleGroupsNamespacesCommandOutput> {
    return deserializeAws_restJson1ListRuleGroupsNamespacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
