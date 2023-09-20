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

import { DeleteClusterSubnetGroupMessage } from "../models/models_0";
import { de_DeleteClusterSubnetGroupCommand, se_DeleteClusterSubnetGroupCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterSubnetGroupCommand}.
 */
export interface DeleteClusterSubnetGroupCommandInput extends DeleteClusterSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteClusterSubnetGroupCommand}.
 */
export interface DeleteClusterSubnetGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified cluster subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DeleteClusterSubnetGroupMessage
 *   ClusterSubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClusterSubnetGroupCommandInput - {@link DeleteClusterSubnetGroupCommandInput}
 * @returns {@link DeleteClusterSubnetGroupCommandOutput}
 * @see {@link DeleteClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link InvalidClusterSubnetGroupStateFault} (client fault)
 *  <p>The cluster subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidClusterSubnetStateFault} (client fault)
 *  <p>The state of the subnet is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DeleteClusterSubnetGroupCommand extends $Command<
  DeleteClusterSubnetGroupCommandInput,
  DeleteClusterSubnetGroupCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DeleteClusterSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterSubnetGroupCommandInput, DeleteClusterSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteClusterSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteClusterSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DeleteClusterSubnetGroup",
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
  private serialize(input: DeleteClusterSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteClusterSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterSubnetGroupCommandOutput> {
    return de_DeleteClusterSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
