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
  GetTopicAttributesInput,
  GetTopicAttributesInputFilterSensitiveLog,
  GetTopicAttributesResponse,
  GetTopicAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetTopicAttributesCommand,
  serializeAws_queryGetTopicAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface GetTopicAttributesCommandInput extends GetTopicAttributesInput {}
export interface GetTopicAttributesCommandOutput extends GetTopicAttributesResponse, __MetadataBearer {}

/**
 * <p>Returns all of the properties of a topic. Topic properties returned might differ based
 *             on the authorization of the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetTopicAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetTopicAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetTopicAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTopicAttributesCommandInput} for command's `input` shape.
 * @see {@link GetTopicAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class GetTopicAttributesCommand extends $Command<
  GetTopicAttributesCommandInput,
  GetTopicAttributesCommandOutput,
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

  constructor(readonly input: GetTopicAttributesCommandInput) {
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
  ): Handler<GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTopicAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetTopicAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTopicAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetTopicAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTopicAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetTopicAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTopicAttributesCommandOutput> {
    return deserializeAws_queryGetTopicAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
