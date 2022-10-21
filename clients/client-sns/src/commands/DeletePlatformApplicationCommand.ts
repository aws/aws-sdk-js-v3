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

import { DeletePlatformApplicationInput, DeletePlatformApplicationInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDeletePlatformApplicationCommand,
  serializeAws_queryDeletePlatformApplicationCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface DeletePlatformApplicationCommandInput extends DeletePlatformApplicationInput {}
export interface DeletePlatformApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a platform application object for one of the supported push notification
 *             services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see
 *                 <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS
 *                 Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeletePlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeletePlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new DeletePlatformApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class DeletePlatformApplicationCommand extends $Command<
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput,
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

  constructor(readonly input: DeletePlatformApplicationCommandInput) {
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
  ): Handler<DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePlatformApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "DeletePlatformApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlatformApplicationInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlatformApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeletePlatformApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePlatformApplicationCommandOutput> {
    return deserializeAws_queryDeletePlatformApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
