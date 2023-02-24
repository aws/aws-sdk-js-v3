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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  SearchSecurityProfilesRequest,
  SearchSecurityProfilesRequestFilterSensitiveLog,
  SearchSecurityProfilesResponse,
  SearchSecurityProfilesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1SearchSecurityProfilesCommand,
  serializeAws_restJson1SearchSecurityProfilesCommand,
} from "../protocols/Aws_restJson1";

export interface SearchSecurityProfilesCommandInput extends SearchSecurityProfilesRequest {}
export interface SearchSecurityProfilesCommandOutput extends SearchSecurityProfilesResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Searches security profiles in an Amazon Connect instance, with optional
 *    filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new SearchSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class SearchSecurityProfilesCommand extends $Command<
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: SearchSecurityProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchSecurityProfilesCommandInput, SearchSecurityProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchSecurityProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SearchSecurityProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchSecurityProfilesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchSecurityProfilesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchSecurityProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchSecurityProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchSecurityProfilesCommandOutput> {
    return deserializeAws_restJson1SearchSecurityProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
