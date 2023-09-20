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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdateWorkGroupInput, UpdateWorkGroupOutput } from "../models/models_0";
import { de_UpdateWorkGroupCommand, se_UpdateWorkGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkGroupCommand}.
 */
export interface UpdateWorkGroupCommandInput extends UpdateWorkGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateWorkGroupCommand}.
 */
export interface UpdateWorkGroupCommandOutput extends UpdateWorkGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the workgroup with the specified name. The workgroup's name cannot be changed.
 *             Only <code>ConfigurationUpdates</code> can be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // UpdateWorkGroupInput
 *   WorkGroup: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ConfigurationUpdates: { // WorkGroupConfigurationUpdates
 *     EnforceWorkGroupConfiguration: true || false,
 *     ResultConfigurationUpdates: { // ResultConfigurationUpdates
 *       OutputLocation: "STRING_VALUE",
 *       RemoveOutputLocation: true || false,
 *       EncryptionConfiguration: { // EncryptionConfiguration
 *         EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 *         KmsKey: "STRING_VALUE",
 *       },
 *       RemoveEncryptionConfiguration: true || false,
 *       ExpectedBucketOwner: "STRING_VALUE",
 *       RemoveExpectedBucketOwner: true || false,
 *       AclConfiguration: { // AclConfiguration
 *         S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 *       },
 *       RemoveAclConfiguration: true || false,
 *     },
 *     PublishCloudWatchMetricsEnabled: true || false,
 *     BytesScannedCutoffPerQuery: Number("long"),
 *     RemoveBytesScannedCutoffPerQuery: true || false,
 *     RequesterPaysEnabled: true || false,
 *     EngineVersion: { // EngineVersion
 *       SelectedEngineVersion: "STRING_VALUE",
 *       EffectiveEngineVersion: "STRING_VALUE",
 *     },
 *     RemoveCustomerContentEncryptionConfiguration: true || false,
 *     AdditionalConfiguration: "STRING_VALUE",
 *     ExecutionRole: "STRING_VALUE",
 *     CustomerContentEncryptionConfiguration: { // CustomerContentEncryptionConfiguration
 *       KmsKey: "STRING_VALUE", // required
 *     },
 *     EnableMinimumEncryptionConfiguration: true || false,
 *   },
 *   State: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateWorkGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkGroupCommandInput - {@link UpdateWorkGroupCommandInput}
 * @returns {@link UpdateWorkGroupCommandOutput}
 * @see {@link UpdateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class UpdateWorkGroupCommand extends $Command<
  UpdateWorkGroupCommandInput,
  UpdateWorkGroupCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: UpdateWorkGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "UpdateWorkGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "UpdateWorkGroup",
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
  private serialize(input: UpdateWorkGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkGroupCommandOutput> {
    return de_UpdateWorkGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
