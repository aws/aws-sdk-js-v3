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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetBucketAccessKeysRequest,
  GetBucketAccessKeysRequestFilterSensitiveLog,
  GetBucketAccessKeysResult,
  GetBucketAccessKeysResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetBucketAccessKeysCommand,
  serializeAws_json1_1GetBucketAccessKeysCommand,
} from "../protocols/Aws_json1_1";

export interface GetBucketAccessKeysCommandInput extends GetBucketAccessKeysRequest {}
export interface GetBucketAccessKeysCommandOutput extends GetBucketAccessKeysResult, __MetadataBearer {}

/**
 * <p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p>
 *          <important>
 *             <p>This action does not return the secret access key value of an access key. You can get a
 *         secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create
 *         a new access key.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketAccessKeysCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketAccessKeysCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBucketAccessKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketAccessKeysCommandInput} for command's `input` shape.
 * @see {@link GetBucketAccessKeysCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetBucketAccessKeysCommand extends $Command<
  GetBucketAccessKeysCommandInput,
  GetBucketAccessKeysCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: GetBucketAccessKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketAccessKeysCommandInput, GetBucketAccessKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketAccessKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBucketAccessKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketAccessKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBucketAccessKeysResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketAccessKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBucketAccessKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketAccessKeysCommandOutput> {
    return deserializeAws_json1_1GetBucketAccessKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
