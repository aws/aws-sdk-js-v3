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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { LaunchConfiguration, UpdateLaunchConfigurationRequest } from "../models/models_0";
import { de_UpdateLaunchConfigurationCommand, se_UpdateLaunchConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLaunchConfigurationCommand}.
 */
export interface UpdateLaunchConfigurationCommandInput extends UpdateLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchConfigurationCommand}.
 */
export interface UpdateLaunchConfigurationCommandOutput extends LaunchConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Updates multiple LaunchConfigurations by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateLaunchConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateLaunchConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // UpdateLaunchConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   launchDisposition: "STRING_VALUE",
 *   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 *   copyPrivateIp: true || false,
 *   copyTags: true || false,
 *   licensing: { // Licensing
 *     osByol: true || false,
 *   },
 *   bootMode: "STRING_VALUE",
 *   postLaunchActions: { // PostLaunchActions
 *     deployment: "STRING_VALUE",
 *     s3LogBucket: "STRING_VALUE",
 *     s3OutputKeyPrefix: "STRING_VALUE",
 *     cloudWatchLogGroupName: "STRING_VALUE",
 *     ssmDocuments: [ // SsmDocuments
 *       { // SsmDocument
 *         actionName: "STRING_VALUE", // required
 *         ssmDocumentName: "STRING_VALUE", // required
 *         timeoutSeconds: Number("int"),
 *         mustSucceedForCutover: true || false,
 *         parameters: { // SsmDocumentParameters
 *           "<keys>": [ // SsmParameterStoreParameters
 *             { // SsmParameterStoreParameter
 *               parameterType: "STRING_VALUE", // required
 *               parameterName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         externalParameters: { // SsmDocumentExternalParameters
 *           "<keys>": { // SsmExternalParameter Union: only one key present
 *             dynamicPath: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   enableMapAutoTagging: true || false,
 *   mapAutoTaggingMpeID: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new UpdateLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // LaunchConfiguration
 * //   sourceServerID: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   ec2LaunchTemplateID: "STRING_VALUE",
 * //   launchDisposition: "STRING_VALUE",
 * //   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //   copyPrivateIp: true || false,
 * //   copyTags: true || false,
 * //   licensing: { // Licensing
 * //     osByol: true || false,
 * //   },
 * //   bootMode: "STRING_VALUE",
 * //   postLaunchActions: { // PostLaunchActions
 * //     deployment: "STRING_VALUE",
 * //     s3LogBucket: "STRING_VALUE",
 * //     s3OutputKeyPrefix: "STRING_VALUE",
 * //     cloudWatchLogGroupName: "STRING_VALUE",
 * //     ssmDocuments: [ // SsmDocuments
 * //       { // SsmDocument
 * //         actionName: "STRING_VALUE", // required
 * //         ssmDocumentName: "STRING_VALUE", // required
 * //         timeoutSeconds: Number("int"),
 * //         mustSucceedForCutover: true || false,
 * //         parameters: { // SsmDocumentParameters
 * //           "<keys>": [ // SsmParameterStoreParameters
 * //             { // SsmParameterStoreParameter
 * //               parameterType: "STRING_VALUE", // required
 * //               parameterName: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         externalParameters: { // SsmDocumentExternalParameters
 * //           "<keys>": { // SsmExternalParameter Union: only one key present
 * //             dynamicPath: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   enableMapAutoTagging: true || false,
 * //   mapAutoTaggingMpeID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateLaunchConfigurationCommandInput - {@link UpdateLaunchConfigurationCommandInput}
 * @returns {@link UpdateLaunchConfigurationCommandOutput}
 * @see {@link UpdateLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class UpdateLaunchConfigurationCommand extends $Command<
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: UpdateLaunchConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLaunchConfigurationCommandInput, UpdateLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLaunchConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "UpdateLaunchConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "UpdateLaunchConfiguration",
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
  private serialize(input: UpdateLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLaunchConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLaunchConfigurationCommandOutput> {
    return de_UpdateLaunchConfigurationCommand(output, context);
  }
}
