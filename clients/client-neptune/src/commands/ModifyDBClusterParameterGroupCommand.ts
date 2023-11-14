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

import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  de_ModifyDBClusterParameterGroupCommand,
  se_ModifyDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBClusterParameterGroupCommand}.
 */
export interface ModifyDBClusterParameterGroupCommandInput extends ModifyDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterParameterGroupCommand}.
 */
export interface ModifyDBClusterParameterGroupCommandOutput
  extends DBClusterParameterGroupNameMessage,
    __MetadataBearer {}

/**
 * @public
 * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one
 *       parameter, submit a list of the following: <code>ParameterName</code>,
 *       <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be
 *       modified in a single request.</p>
 *          <note>
 *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters
 *         require a reboot without failover to the DB cluster associated with the parameter group
 *         before the change can take effect.</p>
 *          </note>
 *          <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before
 *         creating your first DB cluster that uses that DB cluster parameter group as the default
 *         parameter group. This allows Amazon Neptune to fully complete the create action before the
 *         parameter group is used as the default for a new DB cluster. This is especially important
 *         for parameters that are critical when creating the default database for a DB cluster, such
 *         as the character set for the default database defined by the
 *         <code>character_set_database</code> parameter. You can use the <i>Parameter
 *         Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter
 *         group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // ModifyDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   Parameters: [ // ParametersList // required
 *     { // Parameter
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       ApplyType: "STRING_VALUE",
 *       DataType: "STRING_VALUE",
 *       AllowedValues: "STRING_VALUE",
 *       IsModifiable: true || false,
 *       MinimumEngineVersion: "STRING_VALUE",
 *       ApplyMethod: "immediate" || "pending-reboot",
 *     },
 *   ],
 * };
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupNameMessage
 * //   DBClusterParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyDBClusterParameterGroupCommandInput - {@link ModifyDBClusterParameterGroupCommandInput}
 * @returns {@link ModifyDBClusterParameterGroupCommandOutput}
 * @see {@link ModifyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *  <p>The DB parameter group is in use or is in an invalid state. If you are attempting to
 *       delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class ModifyDBClusterParameterGroupCommand extends $Command<
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
  NeptuneClientResolvedConfig
> {
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
  constructor(readonly input: ModifyDBClusterParameterGroupCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ModifyDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyDBClusterParameterGroup",
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
  private serialize(input: ModifyDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBClusterParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBClusterParameterGroupCommandOutput> {
    return de_ModifyDBClusterParameterGroupCommand(output, context);
  }
}
