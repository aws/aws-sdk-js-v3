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
  AssociateResourceRequest,
  AssociateResourceRequestFilterSensitiveLog,
  AssociateResourceResponse,
  AssociateResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateResourceCommand,
  serializeAws_restJson1AssociateResourceCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

export interface AssociateResourceCommandInput extends AssociateResourceRequest {}
export interface AssociateResourceCommandOutput extends AssociateResourceResponse, __MetadataBearer {}

/**
 * <p>Associates a canary with a group. Using groups can help you with
 *          managing and automating your canaries, and you can also view aggregated run results and statistics
 *          for all canaries in a group. </p>
 *          <p>You must run this operation in the Region where the canary exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, AssociateResourceCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, AssociateResourceCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new AssociateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 */
export class AssociateResourceCommand extends $Command<
  AssociateResourceCommandInput,
  AssociateResourceCommandOutput,
  SyntheticsClientResolvedConfig
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

  constructor(readonly input: AssociateResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateResourceCommandInput, AssociateResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "AssociateResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateResourceCommandOutput> {
    return deserializeAws_restJson1AssociateResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
