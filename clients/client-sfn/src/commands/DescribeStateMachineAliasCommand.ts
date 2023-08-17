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

import {
  DescribeStateMachineAliasInput,
  DescribeStateMachineAliasOutput,
  DescribeStateMachineAliasOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeStateMachineAliasCommand, se_DescribeStateMachineAliasCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStateMachineAliasCommand}.
 */
export interface DescribeStateMachineAliasCommandInput extends DescribeStateMachineAliasInput {}
/**
 * @public
 *
 * The output of {@link DescribeStateMachineAliasCommand}.
 */
export interface DescribeStateMachineAliasCommandOutput extends DescribeStateMachineAliasOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStateMachineAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStateMachineAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DescribeStateMachineAliasInput
 *   stateMachineAliasArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeStateMachineAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStateMachineAliasOutput
 * //   stateMachineAliasArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   routingConfiguration: [ // RoutingConfigurationList
 * //     { // RoutingConfigurationListItem
 * //       stateMachineVersionArn: "STRING_VALUE", // required
 * //       weight: Number("int"), // required
 * //     },
 * //   ],
 * //   creationDate: new Date("TIMESTAMP"),
 * //   updateDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeStateMachineAliasCommandInput - {@link DescribeStateMachineAliasCommandInput}
 * @returns {@link DescribeStateMachineAliasCommandOutput}
 * @see {@link DescribeStateMachineAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineAliasCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class DescribeStateMachineAliasCommand extends $Command<
  DescribeStateMachineAliasCommandInput,
  DescribeStateMachineAliasCommandOutput,
  SFNClientResolvedConfig
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
  constructor(readonly input: DescribeStateMachineAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStateMachineAliasCommandInput, DescribeStateMachineAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStateMachineAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeStateMachineAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeStateMachineAliasOutputFilterSensitiveLog,
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
  private serialize(input: DescribeStateMachineAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStateMachineAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStateMachineAliasCommandOutput> {
    return de_DescribeStateMachineAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
