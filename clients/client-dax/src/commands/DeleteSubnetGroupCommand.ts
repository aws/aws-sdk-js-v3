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

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DeleteSubnetGroupRequest, DeleteSubnetGroupResponse } from "../models/models_0";
import { de_DeleteSubnetGroupCommand, se_DeleteSubnetGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubnetGroupCommand}.
 */
export interface DeleteSubnetGroupCommandInput extends DeleteSubnetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubnetGroupCommand}.
 */
export interface DeleteSubnetGroupCommandOutput extends DeleteSubnetGroupResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // DeleteSubnetGroupRequest
 *   SubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSubnetGroupResponse
 * //   DeletionMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSubnetGroupCommandInput - {@link DeleteSubnetGroupCommandInput}
 * @returns {@link DeleteSubnetGroupCommandOutput}
 * @see {@link DeleteSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link SubnetGroupInUseFault} (client fault)
 *  <p>The specified subnet group is currently in use.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The requested subnet group name does not refer to an existing subnet
 *             group.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: DeleteSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSubnetGroupCommandOutput> {
    return de_DeleteSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
