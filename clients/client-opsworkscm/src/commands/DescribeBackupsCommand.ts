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

import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_DescribeBackupsCommand, se_DescribeBackupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandInput extends DescribeBackupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandOutput extends DescribeBackupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Describes backups. The results are ordered by time, with newest backups first.
 *       If you do not specify a BackupId or ServerName, the command returns all backups.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeBackupsCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeBackupsCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // DescribeBackupsRequest
 *   BackupId: "STRING_VALUE",
 *   ServerName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBackupsResponse
 * //   Backups: [ // Backups
 * //     { // Backup
 * //       BackupArn: "STRING_VALUE",
 * //       BackupId: "STRING_VALUE",
 * //       BackupType: "AUTOMATED" || "MANUAL",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineModel: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       KeyPair: "STRING_VALUE",
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       S3DataSize: Number("int"),
 * //       S3DataUrl: "STRING_VALUE",
 * //       S3LogUrl: "STRING_VALUE",
 * //       SecurityGroupIds: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       ServerName: "STRING_VALUE",
 * //       ServiceRoleArn: "STRING_VALUE",
 * //       Status: "IN_PROGRESS" || "OK" || "FAILED" || "DELETING",
 * //       StatusDescription: "STRING_VALUE",
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       ToolsVersion: "STRING_VALUE",
 * //       UserArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBackupsCommandInput - {@link DescribeBackupsCommandInput}
 * @returns {@link DescribeBackupsCommandOutput}
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
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
export class DescribeBackupsCommand extends $Command<
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
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
  constructor(readonly input: DescribeBackupsCommandInput) {
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
  ): Handler<DescribeBackupsCommandInput, DescribeBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DescribeBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorksCM_V2016_11_01",
        operation: "DescribeBackups",
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
  private serialize(input: DescribeBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBackupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupsCommandOutput> {
    return de_DescribeBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
