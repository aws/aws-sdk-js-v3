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
  DBClusterEndpoint,
  DBClusterEndpointFilterSensitiveLog,
  DeleteDBClusterEndpointMessage,
  DeleteDBClusterEndpointMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteDBClusterEndpointCommand,
  serializeAws_queryDeleteDBClusterEndpointCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DeleteDBClusterEndpointCommandInput extends DeleteDBClusterEndpointMessage {}
export interface DeleteDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {}

/**
 * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DeleteDBClusterEndpointCommand extends $Command<
  DeleteDBClusterEndpointCommandInput,
  DeleteDBClusterEndpointCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: DeleteDBClusterEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterEndpointCommandInput, DeleteDBClusterEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBClusterEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBClusterEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBClusterEndpointMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterEndpointFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBClusterEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBClusterEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBClusterEndpointCommandOutput> {
    return deserializeAws_queryDeleteDBClusterEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
