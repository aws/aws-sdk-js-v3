// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import {
  LifecycleConfigurationDescription,
  LifecycleConfigurationDescriptionFilterSensitiveLog,
  PutLifecycleConfigurationRequest,
  PutLifecycleConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutLifecycleConfigurationCommand,
  serializeAws_restJson1PutLifecycleConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface PutLifecycleConfigurationCommandInput extends PutLifecycleConfigurationRequest {}
export interface PutLifecycleConfigurationCommandOutput extends LifecycleConfigurationDescription, __MetadataBearer {}

/**
 * <p>Use this action to manage EFS lifecycle management and EFS Intelligent-Tiering. A
 *         <code>LifecycleConfiguration</code> consists of one or more <code>LifecyclePolicy</code>
 *       objects that define the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>EFS Lifecycle management</b> - When Amazon EFS
 *           automatically transitions files in a file system into the lower-cost EFS Infrequent Access
 *           (IA) storage class.</p>
 *                <p>To enable EFS Lifecycle management, set the value of <code>TransitionToIA</code> to one of the available options.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>EFS Intelligent-Tiering</b> - When Amazon EFS
 *           automatically transitions files from IA back into the file system's primary storage class
 *           (EFS Standard or EFS One Zone Standard).</p>
 *                <p>To enable EFS Intelligent-Tiering, set the value of
 *             <code>TransitionToPrimaryStorageClass</code> to <code>AFTER_1_ACCESS</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Lifecycle Management</a>.</p>
 *          <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to
 *       all files in the file system. If a <code>LifecycleConfiguration</code> object already exists
 *       for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the
 *       existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty
 *         <code>LifecyclePolicies</code> array in the request body deletes any existing
 *         <code>LifecycleConfiguration</code> and turns off lifecycle management and EFS
 *       Intelligent-Tiering for the file system.</p>
 *          <p>In the request, specify the following: </p>
 *          <ul>
 *             <li>
 *                <p>The ID for the file system for which you are enabling, disabling, or modifying
 *           lifecycle management and EFS Intelligent-Tiering.</p>
 *             </li>
 *             <li>
 *                <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that
 *           define when files are moved into IA storage, and when they are moved back to Standard storage.</p>
 *                <note>
 *                   <p>Amazon EFS requires that each <code>LifecyclePolicy</code>
 *           object have only have a single transition, so the <code>LifecyclePolicies</code> array needs to be structured with separate
 *           <code>LifecyclePolicy</code> objects. See the example requests in the following section for more information.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p>
 *          <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you
 *       need the same Key Management Service permissions as when you created the encrypted file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class PutLifecycleConfigurationCommand extends $Command<
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
  EFSClientResolvedConfig
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

  constructor(readonly input: PutLifecycleConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLifecycleConfigurationCommandInput, PutLifecycleConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutLifecycleConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutLifecycleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLifecycleConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: LifecycleConfigurationDescriptionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLifecycleConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutLifecycleConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutLifecycleConfigurationCommandOutput> {
    return deserializeAws_restJson1PutLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
