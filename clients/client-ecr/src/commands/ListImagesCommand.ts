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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  ListImagesRequest,
  ListImagesRequestFilterSensitiveLog,
  ListImagesResponse,
  ListImagesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListImagesCommand,
  serializeAws_json1_1ListImagesCommand,
} from "../protocols/Aws_json1_1";

export interface ListImagesCommandInput extends ListImagesRequest {}
export interface ListImagesCommandOutput extends ListImagesResponse, __MetadataBearer {}

/**
 * <p>Lists all the image IDs for the specified repository.</p>
 *         <p>You can filter images based on whether or not they are tagged by using the
 *                 <code>tagStatus</code> filter and specifying either <code>TAGGED</code>,
 *                 <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results
 *             to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your
 *             results to return only <code>TAGGED</code> images to list all of the tags in your
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ListImagesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ListImagesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class ListImagesCommand extends $Command<
  ListImagesCommandInput,
  ListImagesCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: ListImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImagesCommandInput, ListImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListImagesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "ListImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImagesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListImagesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagesCommandOutput> {
    return deserializeAws_json1_1ListImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
