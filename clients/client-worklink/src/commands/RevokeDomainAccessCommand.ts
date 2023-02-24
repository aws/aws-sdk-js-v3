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
  RevokeDomainAccessRequest,
  RevokeDomainAccessRequestFilterSensitiveLog,
  RevokeDomainAccessResponse,
  RevokeDomainAccessResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RevokeDomainAccessCommand,
  serializeAws_restJson1RevokeDomainAccessCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface RevokeDomainAccessCommandInput extends RevokeDomainAccessRequest {}
export interface RevokeDomainAccessCommandOutput extends RevokeDomainAccessResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RevokeDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RevokeDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new RevokeDomainAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class RevokeDomainAccessCommand extends $Command<
  RevokeDomainAccessCommandInput,
  RevokeDomainAccessCommandOutput,
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

  constructor(readonly input: RevokeDomainAccessCommandInput) {
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
  ): Handler<RevokeDomainAccessCommandInput, RevokeDomainAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeDomainAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "RevokeDomainAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeDomainAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RevokeDomainAccessResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeDomainAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokeDomainAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeDomainAccessCommandOutput> {
    return deserializeAws_restJson1RevokeDomainAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
