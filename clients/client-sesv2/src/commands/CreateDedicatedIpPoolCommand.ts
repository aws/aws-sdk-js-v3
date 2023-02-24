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
  CreateDedicatedIpPoolRequest,
  CreateDedicatedIpPoolRequestFilterSensitiveLog,
  CreateDedicatedIpPoolResponse,
  CreateDedicatedIpPoolResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDedicatedIpPoolCommand,
  serializeAws_restJson1CreateDedicatedIpPoolCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

export interface CreateDedicatedIpPoolCommandInput extends CreateDedicatedIpPoolRequest {}
export interface CreateDedicatedIpPoolCommandOutput extends CreateDedicatedIpPoolResponse, __MetadataBearer {}

/**
 * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 *             IP addresses that are associated with your Amazon Web Services account. You can associate a pool with
 *             a configuration set. When you send an email that uses that configuration set, the
 *             message is sent from one of the addresses in the associated pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateDedicatedIpPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateDedicatedIpPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link CreateDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class CreateDedicatedIpPoolCommand extends $Command<
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
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

  constructor(readonly input: CreateDedicatedIpPoolCommandInput) {
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
  ): Handler<CreateDedicatedIpPoolCommandInput, CreateDedicatedIpPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDedicatedIpPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateDedicatedIpPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDedicatedIpPoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDedicatedIpPoolResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDedicatedIpPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDedicatedIpPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDedicatedIpPoolCommandOutput> {
    return deserializeAws_restJson1CreateDedicatedIpPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
