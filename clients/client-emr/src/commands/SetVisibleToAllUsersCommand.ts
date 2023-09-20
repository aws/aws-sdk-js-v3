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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { SetVisibleToAllUsersInput } from "../models/models_0";
import { de_SetVisibleToAllUsersCommand, se_SetVisibleToAllUsersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetVisibleToAllUsersCommand}.
 */
export interface SetVisibleToAllUsersCommandInput extends SetVisibleToAllUsersInput {}
/**
 * @public
 *
 * The output of {@link SetVisibleToAllUsersCommand}.
 */
export interface SetVisibleToAllUsersCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <important>
 *             <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be
 *             visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-IAM.html">Identity and Access
 *                Management for Amazon EMR</a>. </p>
 *          </important>
 *          <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an Amazon EMR
 *          cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM
 *          principal that created the cluster and the Amazon Web Services account root user can perform
 *             Amazon EMR actions on the cluster, regardless of IAM permissions
 *          policies attached to other IAM principals.</p>
 *          <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_IAM_emr-with-IAM.html#security_set_visible_to_all_users">Understanding the Amazon EMR Cluster VisibleToAllUsers Setting</a> in the
 *                <i>Amazon EMR Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetVisibleToAllUsersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetVisibleToAllUsersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // SetVisibleToAllUsersInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 *   VisibleToAllUsers: true || false, // required
 * };
 * const command = new SetVisibleToAllUsersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetVisibleToAllUsersCommandInput - {@link SetVisibleToAllUsersCommandInput}
 * @returns {@link SetVisibleToAllUsersCommandOutput}
 * @see {@link SetVisibleToAllUsersCommandInput} for command's `input` shape.
 * @see {@link SetVisibleToAllUsersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class SetVisibleToAllUsersCommand extends $Command<
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: SetVisibleToAllUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetVisibleToAllUsersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "SetVisibleToAllUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "SetVisibleToAllUsers",
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
  private serialize(input: SetVisibleToAllUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetVisibleToAllUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetVisibleToAllUsersCommandOutput> {
    return de_SetVisibleToAllUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
