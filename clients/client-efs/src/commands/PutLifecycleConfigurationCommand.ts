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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { LifecycleConfigurationDescription, PutLifecycleConfigurationRequest } from "../models/models_0";
import { de_PutLifecycleConfigurationCommand, se_PutLifecycleConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutLifecycleConfigurationCommand}.
 */
export interface PutLifecycleConfigurationCommandInput extends PutLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutLifecycleConfigurationCommand}.
 */
export interface PutLifecycleConfigurationCommandOutput extends LifecycleConfigurationDescription, __MetadataBearer {}

/**
 * @public
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
 * const input = { // PutLifecycleConfigurationRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   LifecyclePolicies: [ // LifecyclePolicies // required
 *     { // LifecyclePolicy
 *       TransitionToIA: "AFTER_7_DAYS" || "AFTER_14_DAYS" || "AFTER_30_DAYS" || "AFTER_60_DAYS" || "AFTER_90_DAYS" || "AFTER_1_DAY",
 *       TransitionToPrimaryStorageClass: "AFTER_1_ACCESS",
 *     },
 *   ],
 * };
 * const command = new PutLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // LifecycleConfigurationDescription
 * //   LifecyclePolicies: [ // LifecyclePolicies
 * //     { // LifecyclePolicy
 * //       TransitionToIA: "AFTER_7_DAYS" || "AFTER_14_DAYS" || "AFTER_30_DAYS" || "AFTER_60_DAYS" || "AFTER_90_DAYS" || "AFTER_1_DAY",
 * //       TransitionToPrimaryStorageClass: "AFTER_1_ACCESS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutLifecycleConfigurationCommandInput - {@link PutLifecycleConfigurationCommandInput}
 * @returns {@link PutLifecycleConfigurationCommandOutput}
 * @see {@link PutLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *  <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @example Creates a new lifecycleconfiguration object for a file system
 * ```javascript
 * // This operation enables lifecycle management on a file system by creating a new LifecycleConfiguration object. A LifecycleConfiguration object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A LifecycleConfiguration applies to all files in a file system.
 * const input = {
 *   "FileSystemId": "fs-01234567",
 *   "LifecyclePolicies": [
 *     {
 *       "TransitionToIA": "AFTER_30_DAYS"
 *     }
 *   ]
 * };
 * const command = new PutLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LifecyclePolicies": [
 *     {
 *       "TransitionToIA": "AFTER_30_DAYS"
 *     }
 *   ]
 * }
 * *\/
 * // example id: creates-a-new-lifecycleconfiguration-object-for-a-file-system-1551201594692
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MagnolioAPIService_v20150201",
        operation: "PutLifecycleConfiguration",
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
  private serialize(input: PutLifecycleConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutLifecycleConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutLifecycleConfigurationCommandOutput> {
    return de_PutLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
