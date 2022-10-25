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
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1CreateDedicatedIpPoolCommand,
  serializeAws_restJson1CreateDedicatedIpPoolCommand,
} from "../protocols/Aws_restJson1";

export interface CreateDedicatedIpPoolCommandInput extends CreateDedicatedIpPoolRequest {}
export interface CreateDedicatedIpPoolCommandOutput extends CreateDedicatedIpPoolResponse, __MetadataBearer {}

/**
 * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 *             IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with
 *             a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint
 *             sends it using only the IP addresses in the associated pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateDedicatedIpPoolCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateDedicatedIpPoolCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new CreateDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link CreateDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class CreateDedicatedIpPoolCommand extends $Command<
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
  PinpointEmailClientResolvedConfig
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
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDedicatedIpPoolCommandInput, CreateDedicatedIpPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDedicatedIpPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
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
