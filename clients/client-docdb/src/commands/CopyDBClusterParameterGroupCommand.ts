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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterParameterGroupMessageFilterSensitiveLog,
  CopyDBClusterParameterGroupResult,
  CopyDBClusterParameterGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCopyDBClusterParameterGroupCommand,
  serializeAws_queryCopyDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";

export interface CopyDBClusterParameterGroupCommandInput extends CopyDBClusterParameterGroupMessage {}
export interface CopyDBClusterParameterGroupCommandOutput extends CopyDBClusterParameterGroupResult, __MetadataBearer {}

/**
 * <p>Copies the specified cluster parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CopyDBClusterParameterGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CopyDBClusterParameterGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CopyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class CopyDBClusterParameterGroupCommand extends $Command<
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: CopyDBClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyDBClusterParameterGroupCommandInput, CopyDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyDBClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "CopyDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyDBClusterParameterGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CopyDBClusterParameterGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyDBClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CopyDBClusterParameterGroupCommandOutput> {
    return deserializeAws_queryCopyDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
