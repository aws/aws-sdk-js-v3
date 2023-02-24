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
  ListOpsItemRelatedItemsRequest,
  ListOpsItemRelatedItemsRequestFilterSensitiveLog,
  ListOpsItemRelatedItemsResponse,
  ListOpsItemRelatedItemsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ListOpsItemRelatedItemsCommand,
  serializeAws_json1_1ListOpsItemRelatedItemsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ListOpsItemRelatedItemsCommandInput extends ListOpsItemRelatedItemsRequest {}
export interface ListOpsItemRelatedItemsCommandOutput extends ListOpsItemRelatedItemsResponse, __MetadataBearer {}

/**
 * <p>Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a
 *    capability of Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemRelatedItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemRelatedItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsItemRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsItemRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ListOpsItemRelatedItemsCommand extends $Command<
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: ListOpsItemRelatedItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOpsItemRelatedItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListOpsItemRelatedItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOpsItemRelatedItemsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOpsItemRelatedItemsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOpsItemRelatedItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOpsItemRelatedItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOpsItemRelatedItemsCommandOutput> {
    return deserializeAws_json1_1ListOpsItemRelatedItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
