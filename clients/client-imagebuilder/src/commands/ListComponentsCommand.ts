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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import {
  ListComponentsRequest,
  ListComponentsRequestFilterSensitiveLog,
  ListComponentsResponse,
  ListComponentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListComponentsCommand,
  serializeAws_restJson1ListComponentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListComponentsCommandInput extends ListComponentsRequest {}
export interface ListComponentsCommandOutput extends ListComponentsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of components that can be filtered by name, or by using
 * 			the listed <code>filters</code> to streamline results. Newly created components
 * 			can take up to two minutes to appear in the ListComponents API Results.</p>
 *          <note>
 *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
 * 	You can assign values for the first three, and can filter on all of them.</p>
 *             <p>
 *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
 * 	to specify the most recent versions or nodes when selecting the base image or components for your
 * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
 * 	wildcards.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListComponentsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListComponentsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentsCommandInput} for command's `input` shape.
 * @see {@link ListComponentsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class ListComponentsCommand extends $Command<
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
  ImagebuilderClientResolvedConfig
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

  constructor(readonly input: ListComponentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComponentsCommandInput, ListComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListComponentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListComponentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComponentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListComponentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListComponentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComponentsCommandOutput> {
    return deserializeAws_restJson1ListComponentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
