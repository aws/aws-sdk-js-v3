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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxClusterCodeConfigurationRequest, UpdateKxClusterCodeConfigurationResponse } from "../models/models_0";
import {
  de_UpdateKxClusterCodeConfigurationCommand,
  se_UpdateKxClusterCodeConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxClusterCodeConfigurationCommand}.
 */
export interface UpdateKxClusterCodeConfigurationCommandInput extends UpdateKxClusterCodeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxClusterCodeConfigurationCommand}.
 */
export interface UpdateKxClusterCodeConfigurationCommandOutput
  extends UpdateKxClusterCodeConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Allows you to update code configuration on a running cluster. By using this API you can update the code, the initialization script path, and the command line arguments for a specific cluster.
 *       The configuration that you want to update will override any existing configurations on the cluster.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxClusterCodeConfigurationCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxClusterCodeConfigurationCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxClusterCodeConfigurationRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   code: { // CodeConfiguration
 *     s3Bucket: "STRING_VALUE",
 *     s3Key: "STRING_VALUE",
 *     s3ObjectVersion: "STRING_VALUE",
 *   },
 *   initializationScript: "STRING_VALUE",
 *   commandLineArguments: [ // KxCommandLineArguments
 *     { // KxCommandLineArgument
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   deploymentConfiguration: { // KxClusterCodeDeploymentConfiguration
 *     deploymentStrategy: "ROLLING" || "FORCE", // required
 *   },
 * };
 * const command = new UpdateKxClusterCodeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateKxClusterCodeConfigurationCommandInput - {@link UpdateKxClusterCodeConfigurationCommandInput}
 * @returns {@link UpdateKxClusterCodeConfigurationCommandOutput}
 * @see {@link UpdateKxClusterCodeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateKxClusterCodeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class UpdateKxClusterCodeConfigurationCommand extends $Command<
  UpdateKxClusterCodeConfigurationCommandInput,
  UpdateKxClusterCodeConfigurationCommandOutput,
  FinspaceClientResolvedConfig
> {
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
  constructor(readonly input: UpdateKxClusterCodeConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKxClusterCodeConfigurationCommandInput, UpdateKxClusterCodeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKxClusterCodeConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "UpdateKxClusterCodeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroManagementService",
        operation: "UpdateKxClusterCodeConfiguration",
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
    input: UpdateKxClusterCodeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateKxClusterCodeConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateKxClusterCodeConfigurationCommandOutput> {
    return de_UpdateKxClusterCodeConfigurationCommand(output, context);
  }
}
