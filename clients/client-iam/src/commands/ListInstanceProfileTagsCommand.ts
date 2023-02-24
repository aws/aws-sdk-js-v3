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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListInstanceProfileTagsRequest,
  ListInstanceProfileTagsRequestFilterSensitiveLog,
  ListInstanceProfileTagsResponse,
  ListInstanceProfileTagsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListInstanceProfileTagsCommand,
  serializeAws_queryListInstanceProfileTagsCommand,
} from "../protocols/Aws_query";

export interface ListInstanceProfileTagsCommandInput extends ListInstanceProfileTagsRequest {}
export interface ListInstanceProfileTagsCommandOutput extends ListInstanceProfileTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key.
 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfileTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfileTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListInstanceProfileTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceProfileTagsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfileTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListInstanceProfileTagsCommand extends $Command<
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: ListInstanceProfileTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceProfileTagsCommandInput, ListInstanceProfileTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceProfileTagsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListInstanceProfileTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceProfileTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceProfileTagsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceProfileTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListInstanceProfileTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceProfileTagsCommandOutput> {
    return deserializeAws_queryListInstanceProfileTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
