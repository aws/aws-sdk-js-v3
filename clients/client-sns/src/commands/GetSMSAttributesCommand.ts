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
  GetSMSAttributesInput,
  GetSMSAttributesInputFilterSensitiveLog,
  GetSMSAttributesResponse,
  GetSMSAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetSMSAttributesCommand,
  serializeAws_queryGetSMSAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface GetSMSAttributesCommandInput extends GetSMSAttributesInput {}
export interface GetSMSAttributesCommandOutput extends GetSMSAttributesResponse, __MetadataBearer {}

/**
 * <p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p>
 *         <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSMSAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSMSAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class GetSMSAttributesCommand extends $Command<
  GetSMSAttributesCommandInput,
  GetSMSAttributesCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: GetSMSAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSMSAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetSMSAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSMSAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSMSAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSMSAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSMSAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSMSAttributesCommandOutput> {
    return deserializeAws_queryGetSMSAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
