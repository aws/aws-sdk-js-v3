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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  SearchOrganizationInsightsRequest,
  SearchOrganizationInsightsRequestFilterSensitiveLog,
  SearchOrganizationInsightsResponse,
  SearchOrganizationInsightsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SearchOrganizationInsightsCommand,
  serializeAws_restJson1SearchOrganizationInsightsCommand,
} from "../protocols/Aws_restJson1";

export interface SearchOrganizationInsightsCommandInput extends SearchOrganizationInsightsRequest {}
export interface SearchOrganizationInsightsCommandOutput extends SearchOrganizationInsightsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of insights in your organization. You can specify which insights are
 * 			returned by their start time, one or more statuses (<code>ONGOING</code>,
 * 				<code>CLOSED</code>, and <code>CLOSED</code>), one or more severities
 * 				(<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type
 * 				(<code>REACTIVE</code> or <code>PROACTIVE</code>). </p>
 * 		       <p> Use the <code>Filters</code> parameter to specify status and severity search
 * 			parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or
 * 				<code>PROACTIVE</code> in your search. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, SearchOrganizationInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, SearchOrganizationInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new SearchOrganizationInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchOrganizationInsightsCommandInput} for command's `input` shape.
 * @see {@link SearchOrganizationInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class SearchOrganizationInsightsCommand extends $Command<
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  constructor(readonly input: SearchOrganizationInsightsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchOrganizationInsightsCommandInput, SearchOrganizationInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchOrganizationInsightsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "SearchOrganizationInsightsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchOrganizationInsightsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchOrganizationInsightsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchOrganizationInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchOrganizationInsightsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchOrganizationInsightsCommandOutput> {
    return deserializeAws_restJson1SearchOrganizationInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
