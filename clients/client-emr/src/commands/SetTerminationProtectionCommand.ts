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
import { SetTerminationProtectionInput } from "../models/models_0";
import { de_SetTerminationProtectionCommand, se_SetTerminationProtectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetTerminationProtectionCommand}.
 */
export interface SetTerminationProtectionCommandInput extends SetTerminationProtectionInput {}
/**
 * @public
 *
 * The output of {@link SetTerminationProtectionCommand}.
 */
export interface SetTerminationProtectionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>SetTerminationProtection locks a cluster (job flow) so the Amazon EC2 instances
 *          in the cluster cannot be terminated by user intervention, an API call, or in the event of a
 *          job-flow error. The cluster still terminates upon successful completion of the job flow.
 *          Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the
 *             Amazon EC2
 *          <code>DisableAPITermination</code> API on all Amazon EC2 instances in a
 *          cluster.</p>
 *          <p>
 *             <code>SetTerminationProtection</code> is used to prevent accidental termination of a
 *          cluster and to ensure that in the event of an error, the instances persist so that you can
 *          recover any data stored in their ephemeral instance storage.</p>
 *          <p> To terminate a cluster that has been locked by setting
 *             <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the
 *          job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the
 *          value to <code>false</code>. </p>
 *          <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster
 *             Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetTerminationProtectionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetTerminationProtectionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // SetTerminationProtectionInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 *   TerminationProtected: true || false, // required
 * };
 * const command = new SetTerminationProtectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetTerminationProtectionCommandInput - {@link SetTerminationProtectionCommandInput}
 * @returns {@link SetTerminationProtectionCommandOutput}
 * @see {@link SetTerminationProtectionCommandInput} for command's `input` shape.
 * @see {@link SetTerminationProtectionCommandOutput} for command's `response` shape.
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
export class SetTerminationProtectionCommand extends $Command<
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
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
  constructor(readonly input: SetTerminationProtectionCommandInput) {
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
  ): Handler<SetTerminationProtectionCommandInput, SetTerminationProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetTerminationProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "SetTerminationProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "SetTerminationProtection",
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
  private serialize(input: SetTerminationProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetTerminationProtectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTerminationProtectionCommandOutput> {
    return de_SetTerminationProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
