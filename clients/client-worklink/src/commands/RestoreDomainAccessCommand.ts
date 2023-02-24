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
  RestoreDomainAccessRequest,
  RestoreDomainAccessRequestFilterSensitiveLog,
  RestoreDomainAccessResponse,
  RestoreDomainAccessResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RestoreDomainAccessCommand,
  serializeAws_restJson1RestoreDomainAccessCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface RestoreDomainAccessCommandInput extends RestoreDomainAccessRequest {}
export interface RestoreDomainAccessCommandOutput extends RestoreDomainAccessResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Moves a domain to ACTIVE status if it was in the INACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RestoreDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RestoreDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new RestoreDomainAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RestoreDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class RestoreDomainAccessCommand extends $Command<
  RestoreDomainAccessCommandInput,
  RestoreDomainAccessCommandOutput,
  WorkLinkClientResolvedConfig
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

  constructor(readonly input: RestoreDomainAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDomainAccessCommandInput, RestoreDomainAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDomainAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "RestoreDomainAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDomainAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreDomainAccessResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDomainAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RestoreDomainAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreDomainAccessCommandOutput> {
    return deserializeAws_restJson1RestoreDomainAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
