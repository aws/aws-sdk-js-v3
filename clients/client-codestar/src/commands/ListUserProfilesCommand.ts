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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import {
  ListUserProfilesRequest,
  ListUserProfilesResult,
  ListUserProfilesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListUserProfilesCommand,
  serializeAws_json1_1ListUserProfilesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListUserProfilesCommand}.
 */
export interface ListUserProfilesCommandInput extends ListUserProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListUserProfilesCommand}.
 */
export interface ListUserProfilesCommandOutput extends ListUserProfilesResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the user profiles configured for your AWS account in AWS CodeStar.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListUserProfilesCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListUserProfilesCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = {
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUserProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListUserProfilesCommandInput - {@link ListUserProfilesCommandInput}
 * @returns {@link ListUserProfilesCommandOutput}
 * @see {@link ListUserProfilesCommandInput} for command's `input` shape.
 * @see {@link ListUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 *
 */
export class ListUserProfilesCommand extends $Command<
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput,
  CodeStarClientResolvedConfig
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
  constructor(readonly input: ListUserProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUserProfilesCommandInput, ListUserProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUserProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "ListUserProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListUserProfilesResultFilterSensitiveLog,
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
  private serialize(input: ListUserProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListUserProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUserProfilesCommandOutput> {
    return deserializeAws_json1_1ListUserProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
