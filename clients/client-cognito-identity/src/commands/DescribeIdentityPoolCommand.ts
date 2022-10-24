// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import {
  DescribeIdentityPoolInput,
  DescribeIdentityPoolInputFilterSensitiveLog,
  IdentityPool,
  IdentityPoolFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeIdentityPoolCommand,
  serializeAws_json1_1DescribeIdentityPoolCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeIdentityPoolCommandInput extends DescribeIdentityPoolInput {}
export interface DescribeIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {}

/**
 * <p>Gets details about a particular identity pool, including the pool name, ID
 *          description, creation date, and current number of users.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DescribeIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DescribeIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DescribeIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export class DescribeIdentityPoolCommand extends $Command<
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
  CognitoIdentityClientResolvedConfig
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

  constructor(readonly input: DescribeIdentityPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityPoolCommandInput, DescribeIdentityPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIdentityPoolCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "DescribeIdentityPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdentityPoolInputFilterSensitiveLog,
      outputFilterSensitiveLog: IdentityPoolFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdentityPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeIdentityPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdentityPoolCommandOutput> {
    return deserializeAws_json1_1DescribeIdentityPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
