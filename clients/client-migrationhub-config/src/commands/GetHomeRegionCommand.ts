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
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient";
import {
  GetHomeRegionRequest,
  GetHomeRegionRequestFilterSensitiveLog,
  GetHomeRegionResult,
  GetHomeRegionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetHomeRegionCommand,
  serializeAws_json1_1GetHomeRegionCommand,
} from "../protocols/Aws_json1_1";

export interface GetHomeRegionCommandInput extends GetHomeRegionRequest {}
export interface GetHomeRegionCommandOutput extends GetHomeRegionResult, __MetadataBearer {}

/**
 * <p>Returns the calling account’s home region, if configured. This API is used by other AWS
 *       services to determine the regional endpoint for calling AWS Application Discovery Service and
 *       Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any
 *       other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
 *       Migration Hub home region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, GetHomeRegionCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, GetHomeRegionCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new GetHomeRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHomeRegionCommandInput} for command's `input` shape.
 * @see {@link GetHomeRegionCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 */
export class GetHomeRegionCommand extends $Command<
  GetHomeRegionCommandInput,
  GetHomeRegionCommandOutput,
  MigrationHubConfigClientResolvedConfig
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

  constructor(readonly input: GetHomeRegionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHomeRegionCommandInput, GetHomeRegionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetHomeRegionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubConfigClient";
    const commandName = "GetHomeRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHomeRegionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetHomeRegionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHomeRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetHomeRegionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHomeRegionCommandOutput> {
    return deserializeAws_json1_1GetHomeRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
