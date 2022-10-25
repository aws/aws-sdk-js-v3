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
  ListIdentityResolutionJobsRequest,
  ListIdentityResolutionJobsRequestFilterSensitiveLog,
  ListIdentityResolutionJobsResponse,
  ListIdentityResolutionJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListIdentityResolutionJobsCommand,
  serializeAws_restJson1ListIdentityResolutionJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListIdentityResolutionJobsCommandInput extends ListIdentityResolutionJobsRequest {}
export interface ListIdentityResolutionJobsCommandOutput extends ListIdentityResolutionJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by
 *             <code>JobStartTime</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListIdentityResolutionJobsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListIdentityResolutionJobsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListIdentityResolutionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityResolutionJobsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityResolutionJobsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class ListIdentityResolutionJobsCommand extends $Command<
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
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

  constructor(readonly input: ListIdentityResolutionJobsCommandInput) {
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
  ): Handler<ListIdentityResolutionJobsCommandInput, ListIdentityResolutionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIdentityResolutionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListIdentityResolutionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIdentityResolutionJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListIdentityResolutionJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIdentityResolutionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIdentityResolutionJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIdentityResolutionJobsCommandOutput> {
    return deserializeAws_restJson1ListIdentityResolutionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
