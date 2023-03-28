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

import { ListAttachedLinksInput, ListAttachedLinksOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1ListAttachedLinksCommand,
  serializeAws_restJson1ListAttachedLinksCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListAttachedLinksCommand}.
 */
export interface ListAttachedLinksCommandInput extends ListAttachedLinksInput {}
/**
 * @public
 *
 * The output of {@link ListAttachedLinksCommand}.
 */
export interface ListAttachedLinksCommandOutput extends ListAttachedLinksOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of source account links that are linked to this monitoring account sink.</p>
 *         <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
 *         <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, ListAttachedLinksCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, ListAttachedLinksCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // ListAttachedLinksInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SinkIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListAttachedLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListAttachedLinksCommandInput - {@link ListAttachedLinksCommandInput}
 * @returns {@link ListAttachedLinksCommandOutput}
 * @see {@link ListAttachedLinksCommandInput} for command's `input` shape.
 * @see {@link ListAttachedLinksCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 *
 */
export class ListAttachedLinksCommand extends $Command<
  ListAttachedLinksCommandInput,
  ListAttachedLinksCommandOutput,
  OAMClientResolvedConfig
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
  constructor(readonly input: ListAttachedLinksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttachedLinksCommandInput, ListAttachedLinksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAttachedLinksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "ListAttachedLinksCommand";
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
  private serialize(input: ListAttachedLinksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAttachedLinksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttachedLinksCommandOutput> {
    return deserializeAws_restJson1ListAttachedLinksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
