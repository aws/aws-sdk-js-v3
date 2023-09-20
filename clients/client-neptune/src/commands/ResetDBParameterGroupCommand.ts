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

import { DBParameterGroupNameMessage, ResetDBParameterGroupMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_ResetDBParameterGroupCommand, se_ResetDBParameterGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetDBParameterGroupCommand}.
 */
export interface ResetDBParameterGroupCommandInput extends ResetDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetDBParameterGroupCommand}.
 */
export interface ResetDBParameterGroupCommandOutput extends DBParameterGroupNameMessage, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the parameters of a DB parameter group to the engine/system default value. To
 *       reset specific parameters, provide a list of the following: <code>ParameterName</code> and
 *       <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the
 *       <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When
 *       resetting the entire group, dynamic parameters are updated immediately and static parameters
 *       are set to <code>pending-reboot</code> to take effect on the next DB instance restart or
 *       <code>RebootDBInstance</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ResetDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ResetDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // ResetDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
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
 * const command = new ResetDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupNameMessage
 * //   DBParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetDBParameterGroupCommandInput - {@link ResetDBParameterGroupCommandInput}
 * @returns {@link ResetDBParameterGroupCommandOutput}
 * @see {@link ResetDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBParameterGroupCommandOutput} for command's `response` shape.
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
export class ResetDBParameterGroupCommand extends $Command<
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
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
  constructor(readonly input: ResetDBParameterGroupCommandInput) {
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
  ): Handler<ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetDBParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ResetDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ResetDBParameterGroup",
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
  private serialize(input: ResetDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetDBParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetDBParameterGroupCommandOutput> {
    return de_ResetDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
