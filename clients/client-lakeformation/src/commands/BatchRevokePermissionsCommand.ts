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
  BatchRevokePermissionsRequest,
  BatchRevokePermissionsRequestFilterSensitiveLog,
  BatchRevokePermissionsResponse,
  BatchRevokePermissionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchRevokePermissionsCommand,
  serializeAws_restJson1BatchRevokePermissionsCommand,
} from "../protocols/Aws_restJson1";

export interface BatchRevokePermissionsCommandInput extends BatchRevokePermissionsRequest {}
export interface BatchRevokePermissionsCommandOutput extends BatchRevokePermissionsResponse, __MetadataBearer {}

/**
 * <p>Batch operation to revoke permissions from the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchRevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchRevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new BatchRevokePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchRevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchRevokePermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class BatchRevokePermissionsCommand extends $Command<
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
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

  constructor(readonly input: BatchRevokePermissionsCommandInput) {
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
  ): Handler<BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchRevokePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "BatchRevokePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchRevokePermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchRevokePermissionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchRevokePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchRevokePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchRevokePermissionsCommandOutput> {
    return deserializeAws_restJson1BatchRevokePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
