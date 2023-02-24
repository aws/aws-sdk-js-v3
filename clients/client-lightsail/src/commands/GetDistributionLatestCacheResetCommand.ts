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
  GetDistributionLatestCacheResetRequest,
  GetDistributionLatestCacheResetRequestFilterSensitiveLog,
  GetDistributionLatestCacheResetResult,
  GetDistributionLatestCacheResetResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetDistributionLatestCacheResetCommand,
  serializeAws_json1_1GetDistributionLatestCacheResetCommand,
} from "../protocols/Aws_json1_1";

export interface GetDistributionLatestCacheResetCommandInput extends GetDistributionLatestCacheResetRequest {}
export interface GetDistributionLatestCacheResetCommandOutput
  extends GetDistributionLatestCacheResetResult,
    __MetadataBearer {}

/**
 * <p>Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail
 *       content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionLatestCacheResetCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionLatestCacheResetCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionLatestCacheResetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionLatestCacheResetCommandInput} for command's `input` shape.
 * @see {@link GetDistributionLatestCacheResetCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetDistributionLatestCacheResetCommand extends $Command<
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
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

  constructor(readonly input: GetDistributionLatestCacheResetCommandInput) {
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
  ): Handler<GetDistributionLatestCacheResetCommandInput, GetDistributionLatestCacheResetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDistributionLatestCacheResetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetDistributionLatestCacheResetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDistributionLatestCacheResetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionLatestCacheResetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDistributionLatestCacheResetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDistributionLatestCacheResetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDistributionLatestCacheResetCommandOutput> {
    return deserializeAws_json1_1GetDistributionLatestCacheResetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
