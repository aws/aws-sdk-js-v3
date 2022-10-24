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
  DescribeDocumentPermissionRequest,
  DescribeDocumentPermissionRequestFilterSensitiveLog,
  DescribeDocumentPermissionResponse,
  DescribeDocumentPermissionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDocumentPermissionCommand,
  serializeAws_json1_1DescribeDocumentPermissionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DescribeDocumentPermissionCommandInput extends DescribeDocumentPermissionRequest {}
export interface DescribeDocumentPermissionCommandOutput extends DescribeDocumentPermissionResponse, __MetadataBearer {}

/**
 * <p>Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the
 *    document, you are the owner. If a document is shared, it can either be shared privately (by
 *    specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DescribeDocumentPermissionCommand extends $Command<
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: DescribeDocumentPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDocumentPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeDocumentPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDocumentPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDocumentPermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDocumentPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDocumentPermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDocumentPermissionCommandOutput> {
    return deserializeAws_json1_1DescribeDocumentPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
