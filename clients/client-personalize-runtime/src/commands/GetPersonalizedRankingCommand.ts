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
  GetPersonalizedRankingRequest,
  GetPersonalizedRankingRequestFilterSensitiveLog,
  GetPersonalizedRankingResponse,
  GetPersonalizedRankingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import {
  deserializeAws_restJson1GetPersonalizedRankingCommand,
  serializeAws_restJson1GetPersonalizedRankingCommand,
} from "../protocols/Aws_restJson1";

export interface GetPersonalizedRankingCommandInput extends GetPersonalizedRankingRequest {}
export interface GetPersonalizedRankingCommandOutput extends GetPersonalizedRankingResponse, __MetadataBearer {}

/**
 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
 *       deemed the most likely item to be of interest to the user.</p>
 *          <note>
 *             <p>The solution backing the campaign must have been created using a recipe of type
 *         PERSONALIZED_RANKING.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const command = new GetPersonalizedRankingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPersonalizedRankingCommandInput} for command's `input` shape.
 * @see {@link GetPersonalizedRankingCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for PersonalizeRuntimeClient's `config` shape.
 *
 */
export class GetPersonalizedRankingCommand extends $Command<
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput,
  PersonalizeRuntimeClientResolvedConfig
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

  constructor(readonly input: GetPersonalizedRankingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPersonalizedRankingCommandInput, GetPersonalizedRankingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPersonalizedRankingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeRuntimeClient";
    const commandName = "GetPersonalizedRankingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPersonalizedRankingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPersonalizedRankingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPersonalizedRankingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPersonalizedRankingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPersonalizedRankingCommandOutput> {
    return deserializeAws_restJson1GetPersonalizedRankingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
