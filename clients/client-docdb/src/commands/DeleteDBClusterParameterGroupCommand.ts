// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DeleteDBClusterParameterGroupMessage } from "../models/models_0";
import {
  de_DeleteDBClusterParameterGroupCommand,
  se_DeleteDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterParameterGroupCommand}.
 */
export interface DeleteDBClusterParameterGroupCommandInput extends DeleteDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterParameterGroupCommand}.
 */
export interface DeleteDBClusterParameterGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBClusterParameterGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBClusterParameterGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DeleteDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBClusterParameterGroupCommandInput - {@link DeleteDBClusterParameterGroupCommandInput}
 * @returns {@link DeleteDBClusterParameterGroupCommandOutput}
 * @see {@link DeleteDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter group. </p>
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *  <p>The parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class DeleteDBClusterParameterGroupCommand extends $Command<
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteDBClusterParameterGroupCommandInput) {
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
  ): Handler<DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DeleteDBClusterParameterGroupCommand";
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
  private serialize(input: DeleteDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDBClusterParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDBClusterParameterGroupCommandOutput> {
    return de_DeleteDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
