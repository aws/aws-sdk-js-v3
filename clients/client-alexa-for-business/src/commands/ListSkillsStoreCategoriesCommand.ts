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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  ListSkillsStoreCategoriesRequest,
  ListSkillsStoreCategoriesRequestFilterSensitiveLog,
  ListSkillsStoreCategoriesResponse,
  ListSkillsStoreCategoriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListSkillsStoreCategoriesCommand,
  serializeAws_json1_1ListSkillsStoreCategoriesCommand,
} from "../protocols/Aws_json1_1";

export interface ListSkillsStoreCategoriesCommandInput extends ListSkillsStoreCategoriesRequest {}
export interface ListSkillsStoreCategoriesCommandOutput extends ListSkillsStoreCategoriesResponse, __MetadataBearer {}

/**
 * <p>Lists all categories in the Alexa skill store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListSkillsStoreCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSkillsStoreCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreCategoriesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class ListSkillsStoreCategoriesCommand extends $Command<
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
  AlexaForBusinessClientResolvedConfig
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

  constructor(readonly input: ListSkillsStoreCategoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSkillsStoreCategoriesCommandInput, ListSkillsStoreCategoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSkillsStoreCategoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListSkillsStoreCategoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSkillsStoreCategoriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSkillsStoreCategoriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSkillsStoreCategoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSkillsStoreCategoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSkillsStoreCategoriesCommandOutput> {
    return deserializeAws_json1_1ListSkillsStoreCategoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
