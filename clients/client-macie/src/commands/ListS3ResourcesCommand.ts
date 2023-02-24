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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import {
  ListS3ResourcesRequest,
  ListS3ResourcesRequestFilterSensitiveLog,
  ListS3ResourcesResult,
  ListS3ResourcesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListS3ResourcesCommand,
  serializeAws_json1_1ListS3ResourcesCommand,
} from "../protocols/Aws_json1_1";

export interface ListS3ResourcesCommandInput extends ListS3ResourcesRequest {}
export interface ListS3ResourcesCommandOutput extends ListS3ResourcesResult, __MetadataBearer {}

/**
 * <p>(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If
 *       <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie
 *       Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified,
 *       the action lists the S3 resources associated with Macie Classic for the specified member
 *       account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, ListS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, ListS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new ListS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link ListS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 */
export class ListS3ResourcesCommand extends $Command<
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput,
  MacieClientResolvedConfig
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

  constructor(readonly input: ListS3ResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListS3ResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "ListS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListS3ResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListS3ResourcesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListS3ResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListS3ResourcesCommandOutput> {
    return deserializeAws_json1_1ListS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
