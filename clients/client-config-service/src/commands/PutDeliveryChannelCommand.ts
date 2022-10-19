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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutDeliveryChannelRequest, PutDeliveryChannelRequestFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_json1_1PutDeliveryChannelCommand,
  serializeAws_json1_1PutDeliveryChannelCommand,
} from "../protocols/Aws_json1_1";

export interface PutDeliveryChannelCommandInput extends PutDeliveryChannelRequest {}
export interface PutDeliveryChannelCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a delivery channel object to deliver configuration
 * 			information to an Amazon S3 bucket and Amazon SNS topic.</p>
 * 		       <p>Before you can create a delivery channel, you must create a
 * 			configuration recorder.</p>
 * 		       <p>You can use this action to change the Amazon S3 bucket or an
 * 			Amazon SNS topic of the existing delivery channel. To change the
 * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
 * 			specify the changed values for the S3 bucket and the SNS topic. If
 * 			you specify a different value for either the S3 bucket or the SNS
 * 			topic, this action will keep the existing value for the parameter
 * 			that is not changed.</p>
 * 		       <note>
 * 			         <p>You can have only one delivery channel per region in your
 * 				account.</p>
 *
 *
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class PutDeliveryChannelCommand extends $Command<
  PutDeliveryChannelCommandInput,
  PutDeliveryChannelCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: PutDeliveryChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDeliveryChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutDeliveryChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDeliveryChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDeliveryChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutDeliveryChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDeliveryChannelCommandOutput> {
    return deserializeAws_json1_1PutDeliveryChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
