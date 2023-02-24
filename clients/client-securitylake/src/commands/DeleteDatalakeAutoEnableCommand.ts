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

import {
  DeleteDatalakeAutoEnableRequest,
  DeleteDatalakeAutoEnableRequestFilterSensitiveLog,
  DeleteDatalakeAutoEnableResponse,
  DeleteDatalakeAutoEnableResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDatalakeAutoEnableCommand,
  serializeAws_restJson1DeleteDatalakeAutoEnableCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface DeleteDatalakeAutoEnableCommandInput extends DeleteDatalakeAutoEnableRequest {}
export interface DeleteDatalakeAutoEnableCommandOutput extends DeleteDatalakeAutoEnableResponse, __MetadataBearer {}

/**
 * <p>Automatically deletes Amazon Security Lake to stop collecting security data. When you delete
 *          Amazon Security Lake from your account, Security Lake is disabled in all Regions. Also, this API
 *          automatically takes steps to remove the account from Security Lake . </p>
 *          <p>This operation disables security data collection from sources, deletes data stored, and
 *          stops making data accessible to subscribers. Security Lake also deletes all the existing
 *          settings and resources that it stores or maintains for your Amazon Web Services account in
 *          the current Region, including security log and event data. The <code>DeleteDatalake</code>
 *          operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteDatalakeAutoEnableCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteDatalakeAutoEnableCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new DeleteDatalakeAutoEnableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatalakeAutoEnableCommandInput} for command's `input` shape.
 * @see {@link DeleteDatalakeAutoEnableCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class DeleteDatalakeAutoEnableCommand extends $Command<
  DeleteDatalakeAutoEnableCommandInput,
  DeleteDatalakeAutoEnableCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: DeleteDatalakeAutoEnableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatalakeAutoEnableCommandInput, DeleteDatalakeAutoEnableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDatalakeAutoEnableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "DeleteDatalakeAutoEnableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatalakeAutoEnableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDatalakeAutoEnableResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatalakeAutoEnableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDatalakeAutoEnableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatalakeAutoEnableCommandOutput> {
    return deserializeAws_restJson1DeleteDatalakeAutoEnableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
