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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListTriggersRequest, ListTriggersResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListTriggersCommand,
  serializeAws_json1_1ListTriggersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListTriggersCommand}.
 */
export interface ListTriggersCommandInput extends ListTriggersRequest {}
/**
 * @public
 *
 * The output of {@link ListTriggersCommand}.
 */
export interface ListTriggersCommandOutput extends ListTriggersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p>
 *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
 *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
 *       filtering, only resources with the tag are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListTriggersRequest
 *   NextToken: "STRING_VALUE",
 *   DependentJobName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListTriggersCommandInput - {@link ListTriggersCommandInput}
 * @returns {@link ListTriggersCommandOutput}
 * @see {@link ListTriggersCommandInput} for command's `input` shape.
 * @see {@link ListTriggersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class ListTriggersCommand extends $Command<
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: ListTriggersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTriggersCommandInput, ListTriggersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTriggersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListTriggersCommand";
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
  private serialize(input: ListTriggersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTriggersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTriggersCommandOutput> {
    return deserializeAws_json1_1ListTriggersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
