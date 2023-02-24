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
  DescribeMountTargetsRequest,
  DescribeMountTargetsRequestFilterSensitiveLog,
  DescribeMountTargetsResponse,
  DescribeMountTargetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeMountTargetsCommand,
  serializeAws_restJson1DescribeMountTargetsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeMountTargetsCommandInput extends DescribeMountTargetsRequest {}
export interface DescribeMountTargetsCommandOutput extends DescribeMountTargetsResponse, __MetadataBearer {}

/**
 * <p>Returns the descriptions of all the current mount targets, or a specific mount target,
 *       for a file system. When requesting all of the current mount targets, the order of mount
 *       targets returned in the response is unspecified.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID
 *       that you specify in <code>FileSystemId</code>, or on the file system of the mount target that
 *       you specify in <code>MountTargetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeMountTargetsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeMountTargetsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeMountTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMountTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMountTargetsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class DescribeMountTargetsCommand extends $Command<
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
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

  constructor(readonly input: DescribeMountTargetsCommandInput) {
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
  ): Handler<DescribeMountTargetsCommandInput, DescribeMountTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMountTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeMountTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMountTargetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMountTargetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMountTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMountTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMountTargetsCommandOutput> {
    return deserializeAws_restJson1DescribeMountTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
