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
  CreateSecurityPolicyRequest,
  CreateSecurityPolicyRequestFilterSensitiveLog,
  CreateSecurityPolicyResponse,
  CreateSecurityPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import {
  deserializeAws_json1_0CreateSecurityPolicyCommand,
  serializeAws_json1_0CreateSecurityPolicyCommand,
} from "../protocols/Aws_json1_0";

export interface CreateSecurityPolicyCommandInput extends CreateSecurityPolicyRequest {}
export interface CreateSecurityPolicyCommandOutput extends CreateSecurityPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a security policy to be used by one or more OpenSearch Serverless collections. Security
 *             policies provide access to a collection and its OpenSearch Dashboards endpoint from
 *             public networks or specific VPC endpoints. They also allow you to secure a collection
 *             with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access
 *                 for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at
 *                 rest for Amazon OpenSearch Serverless</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateSecurityPolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateSecurityPolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const command = new CreateSecurityPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityPolicyCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 */
export class CreateSecurityPolicyCommand extends $Command<
  CreateSecurityPolicyCommandInput,
  CreateSecurityPolicyCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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

  constructor(readonly input: CreateSecurityPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSecurityPolicyCommandInput, CreateSecurityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSecurityPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "CreateSecurityPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSecurityPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSecurityPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSecurityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateSecurityPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSecurityPolicyCommandOutput> {
    return deserializeAws_json1_0CreateSecurityPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
