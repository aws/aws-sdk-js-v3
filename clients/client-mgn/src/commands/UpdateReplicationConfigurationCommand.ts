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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  ReplicationConfiguration,
  ReplicationConfigurationFilterSensitiveLog,
  UpdateReplicationConfigurationRequest,
  UpdateReplicationConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateReplicationConfigurationCommand,
  serializeAws_restJson1UpdateReplicationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateReplicationConfigurationCommand}.
 */
export interface UpdateReplicationConfigurationCommandInput extends UpdateReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReplicationConfigurationCommand}.
 */
export interface UpdateReplicationConfigurationCommandOutput extends ReplicationConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Allows you to update multiple ReplicationConfigurations by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateReplicationConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateReplicationConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = {
 *   sourceServerID: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   stagingAreaSubnetId: "STRING_VALUE",
 *   associateDefaultSecurityGroup: true || false,
 *   replicationServersSecurityGroupsIDs: [
 *     "STRING_VALUE",
 *   ],
 *   replicationServerInstanceType: "STRING_VALUE",
 *   useDedicatedReplicationServer: true || false,
 *   defaultLargeStagingDiskType: "STRING_VALUE",
 *   replicatedDisks: [
 *     {
 *       deviceName: "STRING_VALUE",
 *       isBootDisk: true || false,
 *       stagingDiskType: "STRING_VALUE",
 *       iops: Number("long"),
 *       throughput: Number("long"),
 *     },
 *   ],
 *   ebsEncryption: "STRING_VALUE",
 *   ebsEncryptionKeyArn: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"),
 *   dataPlaneRouting: "STRING_VALUE",
 *   createPublicIP: true || false,
 *   stagingAreaTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateReplicationConfigurationCommandInput - {@link UpdateReplicationConfigurationCommandInput}
 * @returns {@link UpdateReplicationConfigurationCommandOutput}
 * @see {@link UpdateReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
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
 *
 */
export class UpdateReplicationConfigurationCommand extends $Command<
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: UpdateReplicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReplicationConfigurationCommandInput, UpdateReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateReplicationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "UpdateReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateReplicationConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReplicationConfigurationFilterSensitiveLog,
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
    input: UpdateReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateReplicationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateReplicationConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
