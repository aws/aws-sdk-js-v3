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

import { PutSinkPolicyInput, PutSinkPolicyOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_PutSinkPolicyCommand, se_PutSinkPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutSinkPolicyCommand}.
 */
export interface PutSinkPolicyCommandInput extends PutSinkPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutSinkPolicyCommand}.
 */
export interface PutSinkPolicyCommandOutput extends PutSinkPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the resource policy that grants permissions to source
 *             accounts to link to the monitoring account sink. When you create a sink policy, you can grant
 *             permissions to all accounts in an organization or to individual accounts.</p>
 *         <p>You can also use a sink policy to limit the types of data that is shared. The three types that
 *             you can allow or deny are:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <b>Metrics</b> - Specify with
 *                 <code>AWS::CloudWatch::Metric</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, PutSinkPolicyCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, PutSinkPolicyCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // PutSinkPolicyInput
 *   SinkIdentifier: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutSinkPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutSinkPolicyOutput
 * //   SinkArn: "STRING_VALUE",
 * //   SinkId: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutSinkPolicyCommandInput - {@link PutSinkPolicyCommandInput}
 * @returns {@link PutSinkPolicyCommandOutput}
 * @see {@link PutSinkPolicyCommandInput} for command's `input` shape.
 * @see {@link PutSinkPolicyCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 */
export class PutSinkPolicyCommand extends $Command<
  PutSinkPolicyCommandInput,
  PutSinkPolicyCommandOutput,
  OAMClientResolvedConfig
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
  constructor(readonly input: PutSinkPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSinkPolicyCommandInput, PutSinkPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutSinkPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "PutSinkPolicyCommand";
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
  private serialize(input: PutSinkPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutSinkPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSinkPolicyCommandOutput> {
    return de_PutSinkPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
