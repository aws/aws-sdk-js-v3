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
  GetBundlesRequest,
  GetBundlesRequestFilterSensitiveLog,
  GetBundlesResult,
  GetBundlesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetBundlesCommand,
  serializeAws_json1_1GetBundlesCommand,
} from "../protocols/Aws_json1_1";

export interface GetBundlesCommandInput extends GetBundlesRequest {}
export interface GetBundlesCommandOutput extends GetBundlesResult, __MetadataBearer {}

/**
 * <p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create
 *       it.</p>
 *          <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of
 *       memory, the number of vCPUs, amount of storage space, and monthly network data transfer
 *       quota.</p>
 *          <note>
 *             <p>Bundles are referred to as <i>instance plans</i> in the Lightsail
 *         console.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBundlesCommandInput} for command's `input` shape.
 * @see {@link GetBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetBundlesCommand extends $Command<
  GetBundlesCommandInput,
  GetBundlesCommandOutput,
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

  constructor(readonly input: GetBundlesCommandInput) {
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
  ): Handler<GetBundlesCommandInput, GetBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBundlesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBundlesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBundlesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBundlesCommandOutput> {
    return deserializeAws_json1_1GetBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
