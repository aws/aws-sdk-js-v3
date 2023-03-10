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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  GetResourcePolicyRequest,
  GetResourcePolicyRequestFilterSensitiveLog,
  GetResourcePolicyResponse,
  GetResourcePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetResourcePolicyCommand,
  serializeAws_json1_1GetResourcePolicyCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandInput extends GetResourcePolicyRequest {}
/**
 * The output of {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandOutput extends GetResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>
 *          Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetResourcePolicyCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetResourcePolicyCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link ResourceARNNotValidException} (client fault)
 *  <p>
 *          This exception is thrown when the provided resource does not exist, or the ARN format of the resource is not valid. The following is the valid format for a resource ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the specified resource is not found.</p>
 *
 * @throws {@link ResourcePolicyNotFoundException} (client fault)
 *  <p>
 *          This exception is thrown when the specified resource policy is not found.
 *       </p>
 *
 * @throws {@link ResourceTypeNotSupportedException} (client fault)
 *  <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 *
 */
export class GetResourcePolicyCommand extends $Command<
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: GetResourcePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourcePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetResourcePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourcePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourcePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourcePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourcePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourcePolicyCommandOutput> {
    return deserializeAws_json1_1GetResourcePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
