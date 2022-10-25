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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import {
  DescribeTagsRequest,
  DescribeTagsRequestFilterSensitiveLog,
  DescribeTagsResponse,
  DescribeTagsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeTagsCommand,
  serializeAws_restJson1DescribeTagsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeTagsCommandInput extends DescribeTagsRequest {}
export interface DescribeTagsCommandOutput extends DescribeTagsResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <note>
 *             <p>DEPRECATED - The <code>DescribeTags</code> action is deprecated and not maintained. To view
 *         tags associated with EFS resources, use the <code>ListTagsForResource</code> API
 *         action.</p>
 *          </note>
 *          <p>Returns the tags associated with a file system. The order of tags returned in the
 *       response of one <code>DescribeTags</code> call and the order of tags returned across the
 *       responses of a multiple-call iteration (when using pagination) is unspecified. </p>
 *          <p> This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeTags</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class DescribeTagsCommand extends $Command<
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
  EFSClientResolvedConfig
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

  constructor(readonly input: DescribeTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTagsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTagsCommandOutput> {
    return deserializeAws_restJson1DescribeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
