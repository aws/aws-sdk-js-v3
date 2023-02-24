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
  DeleteDatalakeRequest,
  DeleteDatalakeRequestFilterSensitiveLog,
  DeleteDatalakeResponse,
  DeleteDatalakeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDatalakeCommand,
  serializeAws_restJson1DeleteDatalakeCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface DeleteDatalakeCommandInput extends DeleteDatalakeRequest {}
export interface DeleteDatalakeCommandOutput extends DeleteDatalakeResponse, __MetadataBearer {}

/**
 * <p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from
 *          Security Lake . </p>
 *          <p>This operation disables security data collection from sources, deletes data stored, and
 *          stops making data accessible to subscribers. Security Lake also deletes all the existing
 *          settings and resources that it stores or maintains for your Amazon Web Services account in
 *          the current Region, including security log and event data. The <code>DeleteDatalake</code>
 *          operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteDatalakeCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteDatalakeCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new DeleteDatalakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatalakeCommandInput} for command's `input` shape.
 * @see {@link DeleteDatalakeCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class DeleteDatalakeCommand extends $Command<
  DeleteDatalakeCommandInput,
  DeleteDatalakeCommandOutput,
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

  constructor(readonly input: DeleteDatalakeCommandInput) {
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
  ): Handler<DeleteDatalakeCommandInput, DeleteDatalakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDatalakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "DeleteDatalakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatalakeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDatalakeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatalakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDatalakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatalakeCommandOutput> {
    return deserializeAws_restJson1DeleteDatalakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
