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

import { ClusterParameterGroupNameMessage } from "../models/models_0";
import { ResetClusterParameterGroupMessage } from "../models/models_1";
import { de_ResetClusterParameterGroupCommand, se_ResetClusterParameterGroupCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetClusterParameterGroupCommand}.
 */
export interface ResetClusterParameterGroupCommandInput extends ResetClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetClusterParameterGroupCommand}.
 */
export interface ResetClusterParameterGroupCommandOutput extends ClusterParameterGroupNameMessage, __MetadataBearer {}

/**
 * @public
 * <p>Sets one or more parameters of the specified parameter group to their default
 *             values and sets the source values of the parameters to "engine-default". To reset the
 *             entire parameter group specify the <i>ResetAllParameters</i> parameter.
 *             For parameter changes to take effect you must reboot any associated clusters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResetClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResetClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ResetClusterParameterGroupMessage
 *   ParameterGroupName: "STRING_VALUE", // required
 *   ResetAllParameters: true || false,
 *   Parameters: [ // ParametersList
 *     { // Parameter
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       DataType: "STRING_VALUE",
 *       AllowedValues: "STRING_VALUE",
 *       ApplyType: "static" || "dynamic",
 *       IsModifiable: true || false,
 *       MinimumEngineVersion: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ResetClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // ClusterParameterGroupNameMessage
 * //   ParameterGroupName: "STRING_VALUE",
 * //   ParameterGroupStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetClusterParameterGroupCommandInput - {@link ResetClusterParameterGroupCommandInput}
 * @returns {@link ResetClusterParameterGroupCommandOutput}
 * @see {@link ResetClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
 *
 * @throws {@link InvalidClusterParameterGroupStateFault} (client fault)
 *  <p>The cluster parameter group action can not be completed because another task is in
 *             progress that involves the parameter group. Wait a few moments and try the operation
 *             again.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class ResetClusterParameterGroupCommand extends $Command<
  ResetClusterParameterGroupCommandInput,
  ResetClusterParameterGroupCommandOutput,
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
  constructor(readonly input: ResetClusterParameterGroupCommandInput) {
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
  ): Handler<ResetClusterParameterGroupCommandInput, ResetClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ResetClusterParameterGroupCommand";
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
  private serialize(input: ResetClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetClusterParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetClusterParameterGroupCommandOutput> {
    return de_ResetClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
