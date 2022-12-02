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

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import {
  ListClusterSnapshotsInput,
  ListClusterSnapshotsInputFilterSensitiveLog,
  ListClusterSnapshotsOutput,
  ListClusterSnapshotsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListClusterSnapshotsCommand,
  serializeAws_restJson1ListClusterSnapshotsCommand,
} from "../protocols/Aws_restJson1";

export interface ListClusterSnapshotsCommandInput extends ListClusterSnapshotsInput {}
export interface ListClusterSnapshotsCommandOutput extends ListClusterSnapshotsOutput, __MetadataBearer {}

/**
 * <p>Returns information about Elastic DocumentDB snapshots for a specified cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, ListClusterSnapshotsCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, ListClusterSnapshotsCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const command = new ListClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 */
export class ListClusterSnapshotsCommand extends $Command<
  ListClusterSnapshotsCommandInput,
  ListClusterSnapshotsCommandOutput,
  DocDBElasticClientResolvedConfig
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

  constructor(readonly input: ListClusterSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBElasticClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClusterSnapshotsCommandInput, ListClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListClusterSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBElasticClient";
    const commandName = "ListClusterSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClusterSnapshotsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListClusterSnapshotsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListClusterSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterSnapshotsCommandOutput> {
    return deserializeAws_restJson1ListClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
