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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  GetProgrammaticAccessCredentialsRequest,
  GetProgrammaticAccessCredentialsRequestFilterSensitiveLog,
  GetProgrammaticAccessCredentialsResponse,
  GetProgrammaticAccessCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand,
  serializeAws_restJson1GetProgrammaticAccessCredentialsCommand,
} from "../protocols/Aws_restJson1";

export interface GetProgrammaticAccessCredentialsCommandInput extends GetProgrammaticAccessCredentialsRequest {}
export interface GetProgrammaticAccessCredentialsCommandOutput
  extends GetProgrammaticAccessCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Request programmatic credentials to use with FinSpace SDK.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetProgrammaticAccessCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProgrammaticAccessCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetProgrammaticAccessCredentialsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class GetProgrammaticAccessCredentialsCommand extends $Command<
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
  FinspaceDataClientResolvedConfig
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

  constructor(readonly input: GetProgrammaticAccessCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProgrammaticAccessCredentialsCommandInput, GetProgrammaticAccessCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProgrammaticAccessCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetProgrammaticAccessCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProgrammaticAccessCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetProgrammaticAccessCredentialsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetProgrammaticAccessCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProgrammaticAccessCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProgrammaticAccessCredentialsCommandOutput> {
    return deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
