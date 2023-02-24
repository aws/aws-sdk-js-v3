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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import {
  GrantFlowEntitlementsRequest,
  GrantFlowEntitlementsRequestFilterSensitiveLog,
  GrantFlowEntitlementsResponse,
  GrantFlowEntitlementsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GrantFlowEntitlementsCommand,
  serializeAws_restJson1GrantFlowEntitlementsCommand,
} from "../protocols/Aws_restJson1";

export interface GrantFlowEntitlementsCommandInput extends GrantFlowEntitlementsRequest {}
export interface GrantFlowEntitlementsCommandOutput extends GrantFlowEntitlementsResponse, __MetadataBearer {}

/**
 * Grants entitlements to an existing flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GrantFlowEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GrantFlowEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new GrantFlowEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GrantFlowEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GrantFlowEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 */
export class GrantFlowEntitlementsCommand extends $Command<
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput,
  MediaConnectClientResolvedConfig
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

  constructor(readonly input: GrantFlowEntitlementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GrantFlowEntitlementsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "GrantFlowEntitlementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GrantFlowEntitlementsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GrantFlowEntitlementsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GrantFlowEntitlementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GrantFlowEntitlementsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GrantFlowEntitlementsCommandOutput> {
    return deserializeAws_restJson1GrantFlowEntitlementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
