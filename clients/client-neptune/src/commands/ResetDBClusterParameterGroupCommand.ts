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

import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_ResetDBClusterParameterGroupCommand, se_ResetDBClusterParameterGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetDBClusterParameterGroupCommand}.
 */
export interface ResetDBClusterParameterGroupCommandInput extends ResetDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetDBClusterParameterGroupCommand}.
 */
export interface ResetDBClusterParameterGroupCommandOutput
  extends DBClusterParameterGroupNameMessage,
    __MetadataBearer {}

/**
 * @public
 * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset
 *       specific parameters submit a list of the following: <code>ParameterName</code> and
 *       <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the
 *       <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p>
 *          <p> When resetting the entire group, dynamic parameters are updated immediately and static
 *       parameters are set to <code>pending-reboot</code> to take effect on the next DB instance
 *       restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster
 *       that you want the updated static parameter to apply to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // ResetDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   ResetAllParameters: true || false,
 *   Parameters: [ // ParametersList
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
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupNameMessage
 * //   DBClusterParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetDBClusterParameterGroupCommandInput - {@link ResetDBClusterParameterGroupCommandInput}
 * @returns {@link ResetDBClusterParameterGroupCommandOutput}
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
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
export class ResetDBClusterParameterGroupCommand extends $Command<
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: ResetDBClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetDBClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ResetDBClusterParameterGroupCommand";
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
  private serialize(input: ResetDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetDBClusterParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetDBClusterParameterGroupCommandOutput> {
    return de_ResetDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
