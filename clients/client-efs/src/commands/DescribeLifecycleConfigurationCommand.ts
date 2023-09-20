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
import { DescribeLifecycleConfigurationRequest, LifecycleConfigurationDescription } from "../models/models_0";
import {
  de_DescribeLifecycleConfigurationCommand,
  se_DescribeLifecycleConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLifecycleConfigurationCommand}.
 */
export interface DescribeLifecycleConfigurationCommandInput extends DescribeLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLifecycleConfigurationCommand}.
 */
export interface DescribeLifecycleConfigurationCommandOutput
  extends LifecycleConfigurationDescription,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon
 *       EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object
 *       to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system
 *       without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the
 *       response.</p>
 *          <p>When EFS Intelligent-Tiering is enabled, <code>TransitionToPrimaryStorageClass</code> has
 *       a value of <code>AFTER_1_ACCESS</code>.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeLifecycleConfigurationRequest
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DescribeLifecycleConfigurationCommand(input);
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
 * @param DescribeLifecycleConfigurationCommandInput - {@link DescribeLifecycleConfigurationCommandInput}
 * @returns {@link DescribeLifecycleConfigurationCommandOutput}
 * @see {@link DescribeLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @example To describe the lifecycle configuration for a file system
 * ```javascript
 * // This operation describes a file system's LifecycleConfiguration. EFS lifecycle management uses the LifecycleConfiguration object to identify which files to move to the EFS Infrequent Access (IA) storage class.
 * const input = {
 *   "FileSystemId": "fs-01234567"
 * };
 * const command = new DescribeLifecycleConfigurationCommand(input);
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
 * // example id: to-describe-the-lifecycle-configuration-for-a-file-system-1551200664502
 * ```
 *
 */
export class DescribeLifecycleConfigurationCommand extends $Command<
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
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
  constructor(readonly input: DescribeLifecycleConfigurationCommandInput) {
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
  ): Handler<DescribeLifecycleConfigurationCommandInput, DescribeLifecycleConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLifecycleConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeLifecycleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MagnolioAPIService_v20150201",
        operation: "DescribeLifecycleConfiguration",
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
  private serialize(
    input: DescribeLifecycleConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLifecycleConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLifecycleConfigurationCommandOutput> {
    return de_DescribeLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
