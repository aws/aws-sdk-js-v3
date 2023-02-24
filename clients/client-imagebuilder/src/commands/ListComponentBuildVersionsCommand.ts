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
  ListComponentBuildVersionsRequest,
  ListComponentBuildVersionsRequestFilterSensitiveLog,
  ListComponentBuildVersionsResponse,
  ListComponentBuildVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListComponentBuildVersionsCommand,
  serializeAws_restJson1ListComponentBuildVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListComponentBuildVersionsCommandInput extends ListComponentBuildVersionsRequest {}
export interface ListComponentBuildVersionsCommandOutput extends ListComponentBuildVersionsResponse, __MetadataBearer {}

/**
 * <p> Returns the list of component build versions for the specified semantic version.</p>
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
 * import { ImagebuilderClient, ListComponentBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListComponentBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListComponentBuildVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListComponentBuildVersionsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class ListComponentBuildVersionsCommand extends $Command<
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
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

  constructor(readonly input: ListComponentBuildVersionsCommandInput) {
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
  ): Handler<ListComponentBuildVersionsCommandInput, ListComponentBuildVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListComponentBuildVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListComponentBuildVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComponentBuildVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListComponentBuildVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComponentBuildVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListComponentBuildVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListComponentBuildVersionsCommandOutput> {
    return deserializeAws_restJson1ListComponentBuildVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
