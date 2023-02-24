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
  RemoveDraftAppVersionResourceMappingsRequest,
  RemoveDraftAppVersionResourceMappingsRequestFilterSensitiveLog,
  RemoveDraftAppVersionResourceMappingsResponse,
  RemoveDraftAppVersionResourceMappingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand,
  serializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface RemoveDraftAppVersionResourceMappingsCommandInput
  extends RemoveDraftAppVersionResourceMappingsRequest {}
export interface RemoveDraftAppVersionResourceMappingsCommandOutput
  extends RemoveDraftAppVersionResourceMappingsResponse,
    __MetadataBearer {}

/**
 * <p>Removes resource mappings from a draft application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, RemoveDraftAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, RemoveDraftAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new RemoveDraftAppVersionResourceMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveDraftAppVersionResourceMappingsCommandInput} for command's `input` shape.
 * @see {@link RemoveDraftAppVersionResourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class RemoveDraftAppVersionResourceMappingsCommand extends $Command<
  RemoveDraftAppVersionResourceMappingsCommandInput,
  RemoveDraftAppVersionResourceMappingsCommandOutput,
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

  constructor(readonly input: RemoveDraftAppVersionResourceMappingsCommandInput) {
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
  ): Handler<RemoveDraftAppVersionResourceMappingsCommandInput, RemoveDraftAppVersionResourceMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveDraftAppVersionResourceMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "RemoveDraftAppVersionResourceMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveDraftAppVersionResourceMappingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveDraftAppVersionResourceMappingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RemoveDraftAppVersionResourceMappingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput> {
    return deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
