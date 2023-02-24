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
  GetDedicatedIpsRequest,
  GetDedicatedIpsRequestFilterSensitiveLog,
  GetDedicatedIpsResponse,
  GetDedicatedIpsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDedicatedIpsCommand,
  serializeAws_restJson1GetDedicatedIpsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

export interface GetDedicatedIpsCommandInput extends GetDedicatedIpsRequest {}
export interface GetDedicatedIpsCommandOutput extends GetDedicatedIpsResponse, __MetadataBearer {}

/**
 * <p>List the dedicated IP addresses that are associated with your Amazon Web Services
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDedicatedIpsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDedicatedIpsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDedicatedIpsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDedicatedIpsCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class GetDedicatedIpsCommand extends $Command<
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
  SESv2ClientResolvedConfig
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

  constructor(readonly input: GetDedicatedIpsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDedicatedIpsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetDedicatedIpsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDedicatedIpsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDedicatedIpsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDedicatedIpsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDedicatedIpsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDedicatedIpsCommandOutput> {
    return deserializeAws_restJson1GetDedicatedIpsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
