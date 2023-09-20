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

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { ModifyClusterRequest, ModifyClusterResponse } from "../models/models_0";
import { de_ModifyClusterCommand, se_ModifyClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandInput extends ModifyClusterRequest {}
/**
 * @public
 *
 * The output of {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandOutput extends ModifyClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies AWS CloudHSM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ModifyClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, ModifyClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // ModifyClusterRequest
 *   BackupRetentionPolicy: { // BackupRetentionPolicy
 *     Type: "DAYS",
 *     Value: "STRING_VALUE",
 *   },
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClusterResponse
 * //   Cluster: { // Cluster
 * //     BackupPolicy: "DEFAULT",
 * //     BackupRetentionPolicy: { // BackupRetentionPolicy
 * //       Type: "DAYS",
 * //       Value: "STRING_VALUE",
 * //     },
 * //     ClusterId: "STRING_VALUE",
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     Hsms: [ // Hsms
 * //       { // Hsm
 * //         AvailabilityZone: "STRING_VALUE",
 * //         ClusterId: "STRING_VALUE",
 * //         SubnetId: "STRING_VALUE",
 * //         EniId: "STRING_VALUE",
 * //         EniIp: "STRING_VALUE",
 * //         HsmId: "STRING_VALUE", // required
 * //         State: "CREATE_IN_PROGRESS" || "ACTIVE" || "DEGRADED" || "DELETE_IN_PROGRESS" || "DELETED",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HsmType: "STRING_VALUE",
 * //     PreCoPassword: "STRING_VALUE",
 * //     SecurityGroup: "STRING_VALUE",
 * //     SourceBackupId: "STRING_VALUE",
 * //     State: "CREATE_IN_PROGRESS" || "UNINITIALIZED" || "INITIALIZE_IN_PROGRESS" || "INITIALIZED" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DEGRADED",
 * //     StateMessage: "STRING_VALUE",
 * //     SubnetMapping: { // ExternalSubnetMapping
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     VpcId: "STRING_VALUE",
 * //     Certificates: { // Certificates
 * //       ClusterCsr: "STRING_VALUE",
 * //       HsmCertificate: "STRING_VALUE",
 * //       AwsHardwareCertificate: "STRING_VALUE",
 * //       ManufacturerHardwareCertificate: "STRING_VALUE",
 * //       ClusterCertificate: "STRING_VALUE",
 * //     },
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyClusterCommandInput - {@link ModifyClusterCommandInput}
 * @returns {@link ModifyClusterCommandOutput}
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an AWS CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 */
export class ModifyClusterCommand extends $Command<
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
  CloudHSMV2ClientResolvedConfig
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
  constructor(readonly input: ModifyClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyClusterCommandInput, ModifyClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ModifyClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "ModifyClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BaldrApiService",
        operation: "ModifyCluster",
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
  private serialize(input: ModifyClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterCommandOutput> {
    return de_ModifyClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
