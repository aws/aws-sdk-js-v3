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
  ListOpenIDConnectProviderTagsRequest,
  ListOpenIDConnectProviderTagsRequestFilterSensitiveLog,
  ListOpenIDConnectProviderTagsResponse,
  ListOpenIDConnectProviderTagsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListOpenIDConnectProviderTagsCommand,
  serializeAws_queryListOpenIDConnectProviderTagsCommand,
} from "../protocols/Aws_query";

export interface ListOpenIDConnectProviderTagsCommandInput extends ListOpenIDConnectProviderTagsRequest {}
export interface ListOpenIDConnectProviderTagsCommandOutput
  extends ListOpenIDConnectProviderTagsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible
 *       identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOpenIDConnectProviderTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOpenIDConnectProviderTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListOpenIDConnectProviderTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpenIDConnectProviderTagsCommandInput} for command's `input` shape.
 * @see {@link ListOpenIDConnectProviderTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListOpenIDConnectProviderTagsCommand extends $Command<
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
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

  constructor(readonly input: ListOpenIDConnectProviderTagsCommandInput) {
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
  ): Handler<ListOpenIDConnectProviderTagsCommandInput, ListOpenIDConnectProviderTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOpenIDConnectProviderTagsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListOpenIDConnectProviderTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOpenIDConnectProviderTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOpenIDConnectProviderTagsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOpenIDConnectProviderTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListOpenIDConnectProviderTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOpenIDConnectProviderTagsCommandOutput> {
    return deserializeAws_queryListOpenIDConnectProviderTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
