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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeleteDBSubnetGroupMessage } from "../models/models_0";
import { de_DeleteDBSubnetGroupCommand, se_DeleteDBSubnetGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandInput extends DeleteDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a DB subnet group.</p>
 *          <note>
 *             <p>The specified database subnet group must not be associated with any DB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBSubnetGroupCommandInput - {@link DeleteDBSubnetGroupCommandInput}
 * @returns {@link DeleteDBSubnetGroupCommandOutput}
 * @see {@link DeleteDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The DB subnet group cannot be deleted because it's in use.</p>
 *
 * @throws {@link InvalidDBSubnetStateFault} (client fault)
 *  <p>The DB subnet isn't in the <i>available</i> state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To delete a DB subnet group
 * ```javascript
 * // The following example deletes the DB subnet group called mysubnetgroup.
 * const input = {
 *   "DBSubnetGroupName": "mysubnetgroup"
 * };
 * const command = new DeleteDBSubnetGroupCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-db-subnet-group-1680127744982
 * ```
 *
 */
export class DeleteDBSubnetGroupCommand extends $Command<
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteDBSubnetGroupCommandInput) {
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
  ): Handler<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DeleteDBSubnetGroup",
      },
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
  private serialize(input: DeleteDBSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDBSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBSubnetGroupCommandOutput> {
    return de_DeleteDBSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
