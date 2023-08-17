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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  GetReplicationConfigurationRequest,
  ReplicationConfiguration,
  ReplicationConfigurationFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetReplicationConfigurationCommand,
  se_GetReplicationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReplicationConfigurationCommand}.
 */
export interface GetReplicationConfigurationCommandInput extends GetReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetReplicationConfigurationCommand}.
 */
export interface GetReplicationConfigurationCommandOutput extends ReplicationConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Lists all ReplicationConfigurations, filtered by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetReplicationConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetReplicationConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // GetReplicationConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new GetReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ReplicationConfiguration
 * //   sourceServerID: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   stagingAreaSubnetId: "STRING_VALUE",
 * //   associateDefaultSecurityGroup: true || false,
 * //   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 * //     "STRING_VALUE",
 * //   ],
 * //   replicationServerInstanceType: "STRING_VALUE",
 * //   useDedicatedReplicationServer: true || false,
 * //   defaultLargeStagingDiskType: "STRING_VALUE",
 * //   replicatedDisks: [ // ReplicationConfigurationReplicatedDisks
 * //     { // ReplicationConfigurationReplicatedDisk
 * //       deviceName: "STRING_VALUE",
 * //       isBootDisk: true || false,
 * //       stagingDiskType: "STRING_VALUE",
 * //       iops: Number("long"),
 * //       throughput: Number("long"),
 * //     },
 * //   ],
 * //   ebsEncryption: "STRING_VALUE",
 * //   ebsEncryptionKeyArn: "STRING_VALUE",
 * //   bandwidthThrottling: Number("long"),
 * //   dataPlaneRouting: "STRING_VALUE",
 * //   createPublicIP: true || false,
 * //   stagingAreaTags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   useFipsEndpoint: true || false,
 * // };
 *
 * ```
 *
 * @param GetReplicationConfigurationCommandInput - {@link GetReplicationConfigurationCommandInput}
 * @returns {@link GetReplicationConfigurationCommandOutput}
 * @see {@link GetReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class GetReplicationConfigurationCommand extends $Command<
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
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
  constructor(readonly input: GetReplicationConfigurationCommandInput) {
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
  ): Handler<GetReplicationConfigurationCommandInput, GetReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReplicationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "GetReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetReplicationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetReplicationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReplicationConfigurationCommandOutput> {
    return de_GetReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
