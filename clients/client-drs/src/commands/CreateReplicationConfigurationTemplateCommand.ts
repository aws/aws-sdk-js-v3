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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  CreateReplicationConfigurationTemplateRequest,
  CreateReplicationConfigurationTemplateRequestFilterSensitiveLog,
  ReplicationConfigurationTemplate,
  ReplicationConfigurationTemplateFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateReplicationConfigurationTemplateCommand,
  se_CreateReplicationConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationConfigurationTemplateCommand}.
 */
export interface CreateReplicationConfigurationTemplateCommandInput
  extends CreateReplicationConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicationConfigurationTemplateCommand}.
 */
export interface CreateReplicationConfigurationTemplateCommandOutput
  extends ReplicationConfigurationTemplate,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new ReplicationConfigurationTemplate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateReplicationConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // CreateReplicationConfigurationTemplateRequest
 *   stagingAreaSubnetId: "STRING_VALUE", // required
 *   associateDefaultSecurityGroup: true || false, // required
 *   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs // required
 *     "STRING_VALUE",
 *   ],
 *   replicationServerInstanceType: "STRING_VALUE", // required
 *   useDedicatedReplicationServer: true || false, // required
 *   defaultLargeStagingDiskType: "STRING_VALUE", // required
 *   ebsEncryption: "STRING_VALUE", // required
 *   ebsEncryptionKeyArn: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"), // required
 *   dataPlaneRouting: "STRING_VALUE", // required
 *   createPublicIP: true || false, // required
 *   stagingAreaTags: { // TagsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   pitPolicy: [ // PITPolicy // required
 *     { // PITPolicyRule
 *       ruleID: Number("long"),
 *       units: "STRING_VALUE", // required
 *       interval: Number("int"), // required
 *       retentionDuration: Number("int"), // required
 *       enabled: true || false,
 *     },
 *   ],
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   autoReplicateNewDisks: true || false,
 * };
 * const command = new CreateReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ReplicationConfigurationTemplate
 * //   replicationConfigurationTemplateID: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * //   stagingAreaSubnetId: "STRING_VALUE",
 * //   associateDefaultSecurityGroup: true || false,
 * //   replicationServersSecurityGroupsIDs: [ // ReplicationServersSecurityGroupsIDs
 * //     "STRING_VALUE",
 * //   ],
 * //   replicationServerInstanceType: "STRING_VALUE",
 * //   useDedicatedReplicationServer: true || false,
 * //   defaultLargeStagingDiskType: "STRING_VALUE",
 * //   ebsEncryption: "STRING_VALUE",
 * //   ebsEncryptionKeyArn: "STRING_VALUE",
 * //   bandwidthThrottling: Number("long"),
 * //   dataPlaneRouting: "STRING_VALUE",
 * //   createPublicIP: true || false,
 * //   stagingAreaTags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   pitPolicy: [ // PITPolicy
 * //     { // PITPolicyRule
 * //       ruleID: Number("long"),
 * //       units: "STRING_VALUE", // required
 * //       interval: Number("int"), // required
 * //       retentionDuration: Number("int"), // required
 * //       enabled: true || false,
 * //     },
 * //   ],
 * //   autoReplicateNewDisks: true || false,
 * // };
 *
 * ```
 *
 * @param CreateReplicationConfigurationTemplateCommandInput - {@link CreateReplicationConfigurationTemplateCommandInput}
 * @returns {@link CreateReplicationConfigurationTemplateCommandOutput}
 * @see {@link CreateReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class CreateReplicationConfigurationTemplateCommand extends $Command<
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: CreateReplicationConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationConfigurationTemplateCommandInput, CreateReplicationConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "CreateReplicationConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationConfigurationTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReplicationConfigurationTemplateFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "CreateReplicationConfigurationTemplate",
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
    input: CreateReplicationConfigurationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateReplicationConfigurationTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationConfigurationTemplateCommandOutput> {
    return de_CreateReplicationConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
