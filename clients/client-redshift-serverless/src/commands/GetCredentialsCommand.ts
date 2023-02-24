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
  GetCredentialsRequest,
  GetCredentialsRequestFilterSensitiveLog,
  GetCredentialsResponse,
  GetCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCredentialsCommand,
  serializeAws_json1_1GetCredentialsCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

export interface GetCredentialsCommandInput extends GetCredentialsRequest {}
export interface GetCredentialsCommandOutput extends GetCredentialsResponse, __MetadataBearer {}

/**
 * <p>Returns a database user name and temporary password with
 *          temporary authorization to log in to Amazon Redshift Serverless.</p>
 *          <p>By default, the temporary credentials expire in 900 seconds.
 *          You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p>
 *
 *          <p>The Identity and Access Management (IAM) user or role that runs
 *       GetCredentials must have an IAM policy attached that allows access to all
 *       necessary actions and resources.</p>
 *
 *          <p>If the <code>DbName</code> parameter is specified, the IAM policy must
 *       allow access to the resource dbname for the specified database name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetCredentialsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetCredentialsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new GetCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 */
export class GetCredentialsCommand extends $Command<
  GetCredentialsCommandInput,
  GetCredentialsCommandOutput,
  RedshiftServerlessClientResolvedConfig
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

  constructor(readonly input: GetCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCredentialsCommandInput, GetCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "GetCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCredentialsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCredentialsCommandOutput> {
    return deserializeAws_json1_1GetCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
