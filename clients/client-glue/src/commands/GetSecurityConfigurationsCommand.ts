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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetSecurityConfigurationsRequest,
  GetSecurityConfigurationsRequestFilterSensitiveLog,
  GetSecurityConfigurationsResponse,
  GetSecurityConfigurationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetSecurityConfigurationsCommand,
  serializeAws_json1_1GetSecurityConfigurationsCommand,
} from "../protocols/Aws_json1_1";

export interface GetSecurityConfigurationsCommandInput extends GetSecurityConfigurationsRequest {}
export interface GetSecurityConfigurationsCommandOutput extends GetSecurityConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of all security configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetSecurityConfigurationsCommand extends $Command<
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: GetSecurityConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSecurityConfigurationsCommandInput, GetSecurityConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSecurityConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetSecurityConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSecurityConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSecurityConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSecurityConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSecurityConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSecurityConfigurationsCommandOutput> {
    return deserializeAws_json1_1GetSecurityConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
