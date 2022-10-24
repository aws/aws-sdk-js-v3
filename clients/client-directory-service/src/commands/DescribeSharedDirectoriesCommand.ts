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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  DescribeSharedDirectoriesRequest,
  DescribeSharedDirectoriesRequestFilterSensitiveLog,
  DescribeSharedDirectoriesResult,
  DescribeSharedDirectoriesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSharedDirectoriesCommand,
  serializeAws_json1_1DescribeSharedDirectoriesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeSharedDirectoriesCommandInput extends DescribeSharedDirectoriesRequest {}
export interface DescribeSharedDirectoriesCommandOutput extends DescribeSharedDirectoriesResult, __MetadataBearer {}

/**
 * <p>Returns the shared directories in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSharedDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSharedDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeSharedDirectoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSharedDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeSharedDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class DescribeSharedDirectoriesCommand extends $Command<
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
  DirectoryServiceClientResolvedConfig
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

  constructor(readonly input: DescribeSharedDirectoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSharedDirectoriesCommandInput, DescribeSharedDirectoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSharedDirectoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeSharedDirectoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSharedDirectoriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSharedDirectoriesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSharedDirectoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSharedDirectoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSharedDirectoriesCommandOutput> {
    return deserializeAws_json1_1DescribeSharedDirectoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
