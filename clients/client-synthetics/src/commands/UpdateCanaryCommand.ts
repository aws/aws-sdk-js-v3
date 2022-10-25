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
  UpdateCanaryRequest,
  UpdateCanaryRequestFilterSensitiveLog,
  UpdateCanaryResponse,
  UpdateCanaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateCanaryCommand,
  serializeAws_restJson1UpdateCanaryCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

export interface UpdateCanaryCommandInput extends UpdateCanaryRequest {}
export interface UpdateCanaryCommandOutput extends UpdateCanaryResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a canary that has
 *          already been created.</p>
 *          <p>You can't use this operation to update the tags of an existing canary. To
 *          change the tags of an existing canary, use
 *          <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, UpdateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, UpdateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new UpdateCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCanaryCommandInput} for command's `input` shape.
 * @see {@link UpdateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 */
export class UpdateCanaryCommand extends $Command<
  UpdateCanaryCommandInput,
  UpdateCanaryCommandOutput,
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

  constructor(readonly input: UpdateCanaryCommandInput) {
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
  ): Handler<UpdateCanaryCommandInput, UpdateCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateCanaryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "UpdateCanaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCanaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCanaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCanaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCanaryCommandOutput> {
    return deserializeAws_restJson1UpdateCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
