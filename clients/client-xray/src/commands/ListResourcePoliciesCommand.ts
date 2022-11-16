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
  ListResourcePoliciesRequest,
  ListResourcePoliciesRequestFilterSensitiveLog,
  ListResourcePoliciesResult,
  ListResourcePoliciesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListResourcePoliciesCommand,
  serializeAws_restJson1ListResourcePoliciesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface ListResourcePoliciesCommandInput extends ListResourcePoliciesRequest {}
export interface ListResourcePoliciesCommandOutput extends ListResourcePoliciesResult, __MetadataBearer {}

/**
 * <p>Returns the list of resource policies in the target Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, ListResourcePoliciesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, ListResourcePoliciesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new ListResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class ListResourcePoliciesCommand extends $Command<
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
  XRayClientResolvedConfig
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

  constructor(readonly input: ListResourcePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourcePoliciesCommandInput, ListResourcePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourcePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "ListResourcePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourcePoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListResourcePoliciesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourcePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResourcePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourcePoliciesCommandOutput> {
    return deserializeAws_restJson1ListResourcePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
