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
  RestoreClusterFromSnapshotInput,
  RestoreClusterFromSnapshotInputFilterSensitiveLog,
  RestoreClusterFromSnapshotOutput,
  RestoreClusterFromSnapshotOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RestoreClusterFromSnapshotCommand,
  serializeAws_restJson1RestoreClusterFromSnapshotCommand,
} from "../protocols/Aws_restJson1";

export interface RestoreClusterFromSnapshotCommandInput extends RestoreClusterFromSnapshotInput {}
export interface RestoreClusterFromSnapshotCommandOutput extends RestoreClusterFromSnapshotOutput, __MetadataBearer {}

/**
 * <p>Restores a Elastic DocumentDB cluster from a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, RestoreClusterFromSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, RestoreClusterFromSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const command = new RestoreClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 */
export class RestoreClusterFromSnapshotCommand extends $Command<
  RestoreClusterFromSnapshotCommandInput,
  RestoreClusterFromSnapshotCommandOutput,
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

  constructor(readonly input: RestoreClusterFromSnapshotCommandInput) {
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
  ): Handler<RestoreClusterFromSnapshotCommandInput, RestoreClusterFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreClusterFromSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBElasticClient";
    const commandName = "RestoreClusterFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreClusterFromSnapshotInputFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreClusterFromSnapshotOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreClusterFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RestoreClusterFromSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreClusterFromSnapshotCommandOutput> {
    return deserializeAws_restJson1RestoreClusterFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
