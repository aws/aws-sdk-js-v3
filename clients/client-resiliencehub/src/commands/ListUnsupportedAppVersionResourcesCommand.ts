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
  ListUnsupportedAppVersionResourcesRequest,
  ListUnsupportedAppVersionResourcesRequestFilterSensitiveLog,
  ListUnsupportedAppVersionResourcesResponse,
  ListUnsupportedAppVersionResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommand,
  serializeAws_restJson1ListUnsupportedAppVersionResourcesCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface ListUnsupportedAppVersionResourcesCommandInput extends ListUnsupportedAppVersionResourcesRequest {}
export interface ListUnsupportedAppVersionResourcesCommandOutput
  extends ListUnsupportedAppVersionResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resources that are not currently supported in AWS Resilience Hub. An unsupported
 *       resource is a resource that exists in the object that was used to create an app, but is not
 *       supported by Resilience Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListUnsupportedAppVersionResourcesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListUnsupportedAppVersionResourcesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new ListUnsupportedAppVersionResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUnsupportedAppVersionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListUnsupportedAppVersionResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class ListUnsupportedAppVersionResourcesCommand extends $Command<
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
  ResiliencehubClientResolvedConfig
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

  constructor(readonly input: ListUnsupportedAppVersionResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUnsupportedAppVersionResourcesCommandInput, ListUnsupportedAppVersionResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUnsupportedAppVersionResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListUnsupportedAppVersionResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUnsupportedAppVersionResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListUnsupportedAppVersionResourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListUnsupportedAppVersionResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListUnsupportedAppVersionResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListUnsupportedAppVersionResourcesCommandOutput> {
    return deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
