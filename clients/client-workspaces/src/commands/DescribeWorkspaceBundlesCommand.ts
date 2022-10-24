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
  DescribeWorkspaceBundlesRequest,
  DescribeWorkspaceBundlesRequestFilterSensitiveLog,
  DescribeWorkspaceBundlesResult,
  DescribeWorkspaceBundlesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWorkspaceBundlesCommand,
  serializeAws_json1_1DescribeWorkspaceBundlesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface DescribeWorkspaceBundlesCommandInput extends DescribeWorkspaceBundlesRequest {}
export interface DescribeWorkspaceBundlesCommandOutput extends DescribeWorkspaceBundlesResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the available WorkSpace bundles.</p>
 *          <p>You can filter the results using either bundle ID or owner, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceBundlesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceBundlesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspaceBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceBundlesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceBundlesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class DescribeWorkspaceBundlesCommand extends $Command<
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
  WorkSpacesClientResolvedConfig
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

  constructor(readonly input: DescribeWorkspaceBundlesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceBundlesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceBundlesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceBundlesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkspaceBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspaceBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspaceBundlesCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspaceBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
