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

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import {
  DeleteSubnetGroupRequest,
  DeleteSubnetGroupRequestFilterSensitiveLog,
  DeleteSubnetGroupResponse,
  DeleteSubnetGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSubnetGroupCommand,
  serializeAws_json1_1DeleteSubnetGroupCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteSubnetGroupCommandInput extends DeleteSubnetGroupRequest {}
export interface DeleteSubnetGroupCommandOutput extends DeleteSubnetGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes a subnet group.</p>
 *         <note>
 *             <p>You cannot delete a subnet group if it is associated with any DAX
 *                 clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DeleteSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DeleteSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DeleteSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 */
export class DeleteSubnetGroupCommand extends $Command<
  DeleteSubnetGroupCommandInput,
  DeleteSubnetGroupCommandOutput,
  DAXClientResolvedConfig
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

  constructor(readonly input: DeleteSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "DeleteSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSubnetGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubnetGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSubnetGroupCommandOutput> {
    return deserializeAws_json1_1DeleteSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
