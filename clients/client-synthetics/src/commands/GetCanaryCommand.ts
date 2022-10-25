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
  GetCanaryRequest,
  GetCanaryRequestFilterSensitiveLog,
  GetCanaryResponse,
  GetCanaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCanaryCommand,
  serializeAws_restJson1GetCanaryCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

export interface GetCanaryCommandInput extends GetCanaryRequest {}
export interface GetCanaryCommandOutput extends GetCanaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves complete information about one canary. You must specify
 *       the name of the canary that you want. To get a list of canaries
 *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new GetCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCanaryCommandInput} for command's `input` shape.
 * @see {@link GetCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 */
export class GetCanaryCommand extends $Command<
  GetCanaryCommandInput,
  GetCanaryCommandOutput,
  SyntheticsClientResolvedConfig
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

  constructor(readonly input: GetCanaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCanaryCommandInput, GetCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetCanaryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "GetCanaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCanaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCanaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCanaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCanaryCommandOutput> {
    return deserializeAws_restJson1GetCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
