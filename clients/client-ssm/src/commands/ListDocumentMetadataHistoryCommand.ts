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

import { ListDocumentMetadataHistoryRequest, ListDocumentMetadataHistoryResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ListDocumentMetadataHistoryCommand,
  serializeAws_json1_1ListDocumentMetadataHistoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 *
 * The input for {@link ListDocumentMetadataHistoryCommand}.
 */
export interface ListDocumentMetadataHistoryCommandInput extends ListDocumentMetadataHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListDocumentMetadataHistoryCommand}.
 */
export interface ListDocumentMetadataHistoryCommandOutput
  extends ListDocumentMetadataHistoryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Information about approval reviews for a version of a change template in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentMetadataHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentMetadataHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   Metadata: "DocumentReviews", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDocumentMetadataHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListDocumentMetadataHistoryCommandInput - {@link ListDocumentMetadataHistoryCommandInput}
 * @returns {@link ListDocumentMetadataHistoryCommandOutput}
 * @see {@link ListDocumentMetadataHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDocumentMetadataHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 *
 */
export class ListDocumentMetadataHistoryCommand extends $Command<
  ListDocumentMetadataHistoryCommandInput,
  ListDocumentMetadataHistoryCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListDocumentMetadataHistoryCommandInput) {
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
  ): Handler<ListDocumentMetadataHistoryCommandInput, ListDocumentMetadataHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDocumentMetadataHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListDocumentMetadataHistoryCommand";
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
  private serialize(input: ListDocumentMetadataHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDocumentMetadataHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDocumentMetadataHistoryCommandOutput> {
    return deserializeAws_json1_1ListDocumentMetadataHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
