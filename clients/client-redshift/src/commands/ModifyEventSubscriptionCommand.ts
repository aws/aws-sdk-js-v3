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

import { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult } from "../models/models_1";
import {
  deserializeAws_queryModifyEventSubscriptionCommand,
  serializeAws_queryModifyEventSubscriptionCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link ModifyEventSubscriptionCommand}.
 */
export interface ModifyEventSubscriptionCommandInput extends ModifyEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link ModifyEventSubscriptionCommand}.
 */
export interface ModifyEventSubscriptionCommandOutput extends ModifyEventSubscriptionResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing Amazon Redshift event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyEventSubscriptionCommandInput - {@link ModifyEventSubscriptionCommandInput}
 * @returns {@link ModifyEventSubscriptionCommandOutput}
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidSubscriptionStateFault} (client fault)
 *  <p>The subscription request is invalid because it is a duplicate request. This
 *             subscription request is already in progress.</p>
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *  <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS
 *             topic.</p>
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *  <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *  <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not
 *             exist.</p>
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The specified Amazon Redshift event source could not be found.</p>
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *  <p>The value specified for the event category was not one of the allowed values, or it
 *             specified a category that does not apply to the specified source type. The allowed
 *             values are Configuration, Management, Monitoring, and Security.</p>
 *
 * @throws {@link SubscriptionEventIdNotFoundFault} (client fault)
 *  <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>An Amazon Redshift event notification subscription with the specified name does not
 *             exist.</p>
 *
 * @throws {@link SubscriptionSeverityNotFoundFault} (client fault)
 *  <p>The value specified for the event severity was not one of the allowed values, or it
 *             specified a severity that does not apply to the specified source type. The allowed
 *             values are ERROR and INFO.</p>
 *
 *
 */
export class ModifyEventSubscriptionCommand extends $Command<
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
  RedshiftClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ModifyEventSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyEventSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyEventSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifyEventSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyEventSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyEventSubscriptionCommandOutput> {
    return deserializeAws_queryModifyEventSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
