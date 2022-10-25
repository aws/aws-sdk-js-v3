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

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import {
  ListSnapshotBlocksRequest,
  ListSnapshotBlocksRequestFilterSensitiveLog,
  ListSnapshotBlocksResponse,
  ListSnapshotBlocksResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSnapshotBlocksCommand,
  serializeAws_restJson1ListSnapshotBlocksCommand,
} from "../protocols/Aws_restJson1";

export interface ListSnapshotBlocksCommandInput extends ListSnapshotBlocksRequest {}
export interface ListSnapshotBlocksCommandOutput extends ListSnapshotBlocksResponse, __MetadataBearer {}

/**
 * <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListSnapshotBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListSnapshotBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new ListSnapshotBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSnapshotBlocksCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 */
export class ListSnapshotBlocksCommand extends $Command<
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput,
  EBSClientResolvedConfig
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

  constructor(readonly input: ListSnapshotBlocksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSnapshotBlocksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "ListSnapshotBlocksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSnapshotBlocksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSnapshotBlocksResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSnapshotBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSnapshotBlocksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSnapshotBlocksCommandOutput> {
    return deserializeAws_restJson1ListSnapshotBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
