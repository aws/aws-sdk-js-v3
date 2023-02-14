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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  GetClusterSessionCredentialsInput,
  GetClusterSessionCredentialsInputFilterSensitiveLog,
  GetClusterSessionCredentialsOutput,
  GetClusterSessionCredentialsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetClusterSessionCredentialsCommand,
  serializeAws_json1_1GetClusterSessionCredentialsCommand,
} from "../protocols/Aws_json1_1";

export interface GetClusterSessionCredentialsCommandInput extends GetClusterSessionCredentialsInput {}
export interface GetClusterSessionCredentialsCommandOutput
  extends GetClusterSessionCredentialsOutput,
    __MetadataBearer {}

/**
 * <p>Provides Temporary, basic HTTP credentials that are associated with a given runtime IAM role
 *          and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username-based and password-based authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetClusterSessionCredentialsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetClusterSessionCredentialsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetClusterSessionCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClusterSessionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetClusterSessionCredentialsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class GetClusterSessionCredentialsCommand extends $Command<
  GetClusterSessionCredentialsCommandInput,
  GetClusterSessionCredentialsCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: GetClusterSessionCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClusterSessionCredentialsCommandInput, GetClusterSessionCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClusterSessionCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetClusterSessionCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClusterSessionCredentialsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetClusterSessionCredentialsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClusterSessionCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetClusterSessionCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetClusterSessionCredentialsCommandOutput> {
    return deserializeAws_json1_1GetClusterSessionCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
