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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  DeleteLFTagRequest,
  DeleteLFTagRequestFilterSensitiveLog,
  DeleteLFTagResponse,
  DeleteLFTagResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteLFTagCommand,
  serializeAws_restJson1DeleteLFTagCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteLFTagCommandInput extends DeleteLFTagRequest {}
export interface DeleteLFTagCommandOutput extends DeleteLFTagResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new DeleteLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLFTagCommandInput} for command's `input` shape.
 * @see {@link DeleteLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class DeleteLFTagCommand extends $Command<
  DeleteLFTagCommandInput,
  DeleteLFTagCommandOutput,
  LakeFormationClientResolvedConfig
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

  constructor(readonly input: DeleteLFTagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLFTagCommandInput, DeleteLFTagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteLFTagCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "DeleteLFTagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLFTagRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLFTagResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLFTagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLFTagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLFTagCommandOutput> {
    return deserializeAws_restJson1DeleteLFTagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
