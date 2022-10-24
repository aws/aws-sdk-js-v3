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
  GetCloudFormationStackRecordsRequest,
  GetCloudFormationStackRecordsRequestFilterSensitiveLog,
  GetCloudFormationStackRecordsResult,
  GetCloudFormationStackRecordsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCloudFormationStackRecordsCommand,
  serializeAws_json1_1GetCloudFormationStackRecordsCommand,
} from "../protocols/Aws_json1_1";

export interface GetCloudFormationStackRecordsCommandInput extends GetCloudFormationStackRecordsRequest {}
export interface GetCloudFormationStackRecordsCommandOutput
  extends GetCloudFormationStackRecordsResult,
    __MetadataBearer {}

/**
 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> operation.</p>
 *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
 *       snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCloudFormationStackRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCloudFormationStackRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetCloudFormationStackRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFormationStackRecordsCommandInput} for command's `input` shape.
 * @see {@link GetCloudFormationStackRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetCloudFormationStackRecordsCommand extends $Command<
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput,
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

  constructor(readonly input: GetCloudFormationStackRecordsCommandInput) {
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
  ): Handler<GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCloudFormationStackRecordsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetCloudFormationStackRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCloudFormationStackRecordsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCloudFormationStackRecordsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCloudFormationStackRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCloudFormationStackRecordsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCloudFormationStackRecordsCommandOutput> {
    return deserializeAws_json1_1GetCloudFormationStackRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
