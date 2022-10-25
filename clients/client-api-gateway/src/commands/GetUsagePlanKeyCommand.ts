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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import {
  GetUsagePlanKeyRequest,
  GetUsagePlanKeyRequestFilterSensitiveLog,
  UsagePlanKey,
  UsagePlanKeyFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetUsagePlanKeyCommand,
  serializeAws_restJson1GetUsagePlanKeyCommand,
} from "../protocols/Aws_restJson1";

export interface GetUsagePlanKeyCommandInput extends GetUsagePlanKeyRequest {}
export interface GetUsagePlanKeyCommandOutput extends UsagePlanKey, __MetadataBearer {}

/**
 * <p>Gets a usage plan key of a given key identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class GetUsagePlanKeyCommand extends $Command<
  GetUsagePlanKeyCommandInput,
  GetUsagePlanKeyCommandOutput,
  APIGatewayClientResolvedConfig
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

  constructor(readonly input: GetUsagePlanKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsagePlanKeyCommandInput, GetUsagePlanKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUsagePlanKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetUsagePlanKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUsagePlanKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UsagePlanKeyFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUsagePlanKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUsagePlanKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsagePlanKeyCommandOutput> {
    return deserializeAws_restJson1GetUsagePlanKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
