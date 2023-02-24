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
  DescribeHomeRegionControlsRequest,
  DescribeHomeRegionControlsRequestFilterSensitiveLog,
  DescribeHomeRegionControlsResult,
  DescribeHomeRegionControlsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeHomeRegionControlsCommand,
  serializeAws_json1_1DescribeHomeRegionControlsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeHomeRegionControlsCommandInput extends DescribeHomeRegionControlsRequest {}
export interface DescribeHomeRegionControlsCommandOutput extends DescribeHomeRegionControlsResult, __MetadataBearer {}

/**
 * <p>This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code>
 *       fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new DescribeHomeRegionControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHomeRegionControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeHomeRegionControlsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 */
export class DescribeHomeRegionControlsCommand extends $Command<
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
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

  constructor(readonly input: DescribeHomeRegionControlsCommandInput) {
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
  ): Handler<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHomeRegionControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubConfigClient";
    const commandName = "DescribeHomeRegionControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHomeRegionControlsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeHomeRegionControlsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHomeRegionControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHomeRegionControlsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHomeRegionControlsCommandOutput> {
    return deserializeAws_json1_1DescribeHomeRegionControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
