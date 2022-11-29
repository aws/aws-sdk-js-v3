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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  UpdateResourceProfileDetectionsRequest,
  UpdateResourceProfileDetectionsRequestFilterSensitiveLog,
  UpdateResourceProfileDetectionsResponse,
  UpdateResourceProfileDetectionsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateResourceProfileDetectionsCommand,
  serializeAws_restJson1UpdateResourceProfileDetectionsCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateResourceProfileDetectionsCommandInput extends UpdateResourceProfileDetectionsRequest {}
export interface UpdateResourceProfileDetectionsCommandOutput
  extends UpdateResourceProfileDetectionsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the sensitivity scoring settings for an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateResourceProfileDetectionsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateResourceProfileDetectionsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateResourceProfileDetectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceProfileDetectionsCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceProfileDetectionsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class UpdateResourceProfileDetectionsCommand extends $Command<
  UpdateResourceProfileDetectionsCommandInput,
  UpdateResourceProfileDetectionsCommandOutput,
  Macie2ClientResolvedConfig
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

  constructor(readonly input: UpdateResourceProfileDetectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResourceProfileDetectionsCommandInput, UpdateResourceProfileDetectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceProfileDetectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "UpdateResourceProfileDetectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceProfileDetectionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceProfileDetectionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateResourceProfileDetectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateResourceProfileDetectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateResourceProfileDetectionsCommandOutput> {
    return deserializeAws_restJson1UpdateResourceProfileDetectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
