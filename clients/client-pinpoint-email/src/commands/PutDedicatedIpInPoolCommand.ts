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
  PutDedicatedIpInPoolRequest,
  PutDedicatedIpInPoolRequestFilterSensitiveLog,
  PutDedicatedIpInPoolResponse,
  PutDedicatedIpInPoolResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1PutDedicatedIpInPoolCommand,
  serializeAws_restJson1PutDedicatedIpInPoolCommand,
} from "../protocols/Aws_restJson1";

export interface PutDedicatedIpInPoolCommandInput extends PutDedicatedIpInPoolRequest {}
export interface PutDedicatedIpInPoolCommandOutput extends PutDedicatedIpInPoolResponse, __MetadataBearer {}

/**
 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
 *         <note>
 *             <p>The dedicated IP address that you specify must already exist, and must be
 *                 associated with your Amazon Pinpoint account.
 *
 *             </p>
 *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
 *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
 *
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutDedicatedIpInPoolCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutDedicatedIpInPoolCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutDedicatedIpInPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDedicatedIpInPoolCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpInPoolCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class PutDedicatedIpInPoolCommand extends $Command<
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
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

  constructor(readonly input: PutDedicatedIpInPoolCommandInput) {
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
  ): Handler<PutDedicatedIpInPoolCommandInput, PutDedicatedIpInPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDedicatedIpInPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutDedicatedIpInPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDedicatedIpInPoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutDedicatedIpInPoolResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDedicatedIpInPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDedicatedIpInPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDedicatedIpInPoolCommandOutput> {
    return deserializeAws_restJson1PutDedicatedIpInPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
