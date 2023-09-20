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

import {
  DescribeServersRequest,
  DescribeServersResponse,
  DescribeServersResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_DescribeServersCommand, se_DescribeServersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServersCommand}.
 */
export interface DescribeServersCommandInput extends DescribeServersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServersCommand}.
 */
export interface DescribeServersCommandOutput extends DescribeServersResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Lists all configuration management servers that are identified with your account.
 *       Only the stored results from Amazon DynamoDB
 *       are returned. AWS OpsWorks CM does not query other services.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeServersCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeServersCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // DescribeServersRequest
 *   ServerName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeServersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServersResponse
 * //   Servers: [ // Servers
 * //     { // Server
 * //       AssociatePublicIpAddress: true || false,
 * //       BackupRetentionCount: Number("int"),
 * //       ServerName: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       CloudFormationStackArn: "STRING_VALUE",
 * //       CustomDomain: "STRING_VALUE",
 * //       DisableAutomatedBackup: true || false,
 * //       Endpoint: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineModel: "STRING_VALUE",
 * //       EngineAttributes: [ // EngineAttributes
 * //         { // EngineAttribute
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EngineVersion: "STRING_VALUE",
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       KeyPair: "STRING_VALUE",
 * //       MaintenanceStatus: "SUCCESS" || "FAILED",
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       SecurityGroupIds: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       ServiceRoleArn: "STRING_VALUE",
 * //       Status: "BACKING_UP" || "CONNECTION_LOST" || "CREATING" || "DELETING" || "MODIFYING" || "FAILED" || "HEALTHY" || "RUNNING" || "RESTORING" || "SETUP" || "UNDER_MAINTENANCE" || "UNHEALTHY" || "TERMINATED",
 * //       StatusReason: "STRING_VALUE",
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       ServerArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeServersCommandInput - {@link DescribeServersCommandInput}
 * @returns {@link DescribeServersCommandOutput}
 * @see {@link DescribeServersCommandInput} for command's `input` shape.
 * @see {@link DescribeServersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>This occurs when the provided nextToken is not valid.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 */
export class DescribeServersCommand extends $Command<
  DescribeServersCommandInput,
  DescribeServersCommandOutput,
  OpsWorksCMClientResolvedConfig
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
  constructor(readonly input: DescribeServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServersCommandInput, DescribeServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DescribeServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeServersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorksCM_V2016_11_01",
        operation: "DescribeServers",
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
  private serialize(input: DescribeServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeServersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServersCommandOutput> {
    return de_DescribeServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
