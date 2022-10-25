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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  GetUtterancesViewRequest,
  GetUtterancesViewRequestFilterSensitiveLog,
  GetUtterancesViewResponse,
  GetUtterancesViewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetUtterancesViewCommand,
  serializeAws_restJson1GetUtterancesViewCommand,
} from "../protocols/Aws_restJson1";

export interface GetUtterancesViewCommandInput extends GetUtterancesViewRequest {}
export interface GetUtterancesViewCommandOutput extends GetUtterancesViewResponse, __MetadataBearer {}

/**
 * <p>Use the <code>GetUtterancesView</code> operation to get information
 *       about the utterances that your users have made to your bot. You can use
 *       this list to tune the utterances that your bot responds to.</p>
 *          <p>For example, say that you have created a bot to order flowers.
 *       After your users have used your bot for a while, use the
 *         <code>GetUtterancesView</code> operation to see the requests that they
 *       have made and whether they have been successful. You might find that the
 *       utterance "I want flowers" is not being recognized. You could add this
 *       utterance to the <code>OrderFlowers</code> intent so that your bot
 *       recognizes that utterance.</p>
 *          <p>After you publish a new version of a bot, you can get information
 *       about the old version and the new so that you can compare the performance
 *       across the two versions. </p>
 *          <p>Utterance statistics are generated once a day. Data is available
 *       for the last 15 days. You can request information for up to 5 versions of
 *       your bot in each request. Amazon Lex returns the most frequent utterances
 *       received by the bot in the last 15 days. The response contains information
 *       about a maximum of 100 utterances for each version.</p>
 *          <p>If you set <code>childDirected</code> field to true when you
 *       created your bot, if you are using slot obfuscation with one or more
 *       slots, or if you opted out of participating in improving Amazon Lex, utterances
 *       are not available.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetUtterancesView</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetUtterancesViewCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetUtterancesViewCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetUtterancesViewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUtterancesViewCommandInput} for command's `input` shape.
 * @see {@link GetUtterancesViewCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class GetUtterancesViewCommand extends $Command<
  GetUtterancesViewCommandInput,
  GetUtterancesViewCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: GetUtterancesViewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUtterancesViewCommandInput, GetUtterancesViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUtterancesViewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetUtterancesViewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUtterancesViewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUtterancesViewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUtterancesViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUtterancesViewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUtterancesViewCommandOutput> {
    return deserializeAws_restJson1GetUtterancesViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
