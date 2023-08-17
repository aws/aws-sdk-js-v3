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

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { RestoreBackupRequest, RestoreBackupResponse } from "../models/models_0";
import { de_RestoreBackupCommand, se_RestoreBackupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreBackupCommand}.
 */
export interface RestoreBackupCommandInput extends RestoreBackupRequest {}
/**
 * @public
 *
 * The output of {@link RestoreBackupCommand}.
 */
export interface RestoreBackupCommandOutput extends RestoreBackupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Restores a specified AWS CloudHSM backup that is in the
 *                 <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see
 *                 <a>DeleteBackup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, RestoreBackupCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, RestoreBackupCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // RestoreBackupRequest
 *   BackupId: "STRING_VALUE", // required
 * };
 * const command = new RestoreBackupCommand(input);
 * const response = await client.send(command);
 * // { // RestoreBackupResponse
 * //   Backup: { // Backup
 * //     BackupId: "STRING_VALUE", // required
 * //     BackupState: "STRING_VALUE",
 * //     ClusterId: "STRING_VALUE",
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     CopyTimestamp: new Date("TIMESTAMP"),
 * //     NeverExpires: true || false,
 * //     SourceRegion: "STRING_VALUE",
 * //     SourceBackup: "STRING_VALUE",
 * //     SourceCluster: "STRING_VALUE",
 * //     DeleteTimestamp: new Date("TIMESTAMP"),
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
 * @param RestoreBackupCommandInput - {@link RestoreBackupCommandInput}
 * @returns {@link RestoreBackupCommandOutput}
 * @see {@link RestoreBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreBackupCommandOutput} for command's `response` shape.
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
export class RestoreBackupCommand extends $Command<
  RestoreBackupCommandInput,
  RestoreBackupCommandOutput,
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
  constructor(readonly input: RestoreBackupCommandInput) {
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
  ): Handler<RestoreBackupCommandInput, RestoreBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RestoreBackupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "RestoreBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RestoreBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreBackupCommandOutput> {
    return de_RestoreBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
