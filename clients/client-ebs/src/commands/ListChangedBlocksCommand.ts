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
  ListChangedBlocksRequest,
  ListChangedBlocksRequestFilterSensitiveLog,
  ListChangedBlocksResponse,
  ListChangedBlocksResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListChangedBlocksCommand,
  serializeAws_restJson1ListChangedBlocksCommand,
} from "../protocols/Aws_restJson1";

export interface ListChangedBlocksCommandInput extends ListChangedBlocksRequest {}
export interface ListChangedBlocksCommandOutput extends ListChangedBlocksResponse, __MetadataBearer {}

/**
 * <p>Returns information about the blocks that are different between two
 *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListChangedBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListChangedBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new ListChangedBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangedBlocksCommandInput} for command's `input` shape.
 * @see {@link ListChangedBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 */
export class ListChangedBlocksCommand extends $Command<
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
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

  constructor(readonly input: ListChangedBlocksCommandInput) {
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
  ): Handler<ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChangedBlocksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "ListChangedBlocksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChangedBlocksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListChangedBlocksResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChangedBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChangedBlocksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangedBlocksCommandOutput> {
    return deserializeAws_restJson1ListChangedBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
