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
  GetDatalakeAutoEnableRequest,
  GetDatalakeAutoEnableRequestFilterSensitiveLog,
  GetDatalakeAutoEnableResponse,
  GetDatalakeAutoEnableResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDatalakeAutoEnableCommand,
  serializeAws_restJson1GetDatalakeAutoEnableCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface GetDatalakeAutoEnableCommandInput extends GetDatalakeAutoEnableRequest {}
export interface GetDatalakeAutoEnableCommandOutput extends GetDatalakeAutoEnableResponse, __MetadataBearer {}

/**
 * <p>Retrieves the configuration that will be automatically set up for accounts added to the
 *          organization after the organization has onboarded to Amazon Security Lake. This API does not take
 *          input parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, GetDatalakeAutoEnableCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, GetDatalakeAutoEnableCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new GetDatalakeAutoEnableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatalakeAutoEnableCommandInput} for command's `input` shape.
 * @see {@link GetDatalakeAutoEnableCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class GetDatalakeAutoEnableCommand extends $Command<
  GetDatalakeAutoEnableCommandInput,
  GetDatalakeAutoEnableCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: GetDatalakeAutoEnableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDatalakeAutoEnableCommandInput, GetDatalakeAutoEnableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDatalakeAutoEnableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "GetDatalakeAutoEnableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDatalakeAutoEnableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDatalakeAutoEnableResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDatalakeAutoEnableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDatalakeAutoEnableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDatalakeAutoEnableCommandOutput> {
    return deserializeAws_restJson1GetDatalakeAutoEnableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
