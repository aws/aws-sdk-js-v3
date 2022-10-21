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
  DeleteQualificationTypeRequest,
  DeleteQualificationTypeRequestFilterSensitiveLog,
  DeleteQualificationTypeResponse,
  DeleteQualificationTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1DeleteQualificationTypeCommand,
  serializeAws_json1_1DeleteQualificationTypeCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteQualificationTypeCommandInput extends DeleteQualificationTypeRequest {}
export interface DeleteQualificationTypeCommandOutput extends DeleteQualificationTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>DeleteQualificationType</code>
 *             deletes a Qualification type and deletes any HIT types that are
 *             associated with the Qualification type.
 *         </p>
 *         <p>This operation does not revoke Qualifications already assigned
 *             to Workers because the Qualifications might be needed for active HITs.
 *             If there are any pending requests for the Qualification type, Amazon
 *             Mechanical Turk rejects those requests. After you delete a
 *             Qualification type, you can no longer use it to create HITs or HIT
 *             types.</p>
 *         <note>
 *             <p>DeleteQualificationType must wait for all the HITs that use
 *                 the deleted Qualification type to be deleted before completing. It
 *                 may take up to 48 hours before DeleteQualificationType completes and
 *                 the unique name of the Qualification type is available for reuse with
 *                 CreateQualificationType.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DeleteQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class DeleteQualificationTypeCommand extends $Command<
  DeleteQualificationTypeCommandInput,
  DeleteQualificationTypeCommandOutput,
  MTurkClientResolvedConfig
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

  constructor(readonly input: DeleteQualificationTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQualificationTypeCommandInput, DeleteQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteQualificationTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "DeleteQualificationTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQualificationTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteQualificationTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQualificationTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteQualificationTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQualificationTypeCommandOutput> {
    return deserializeAws_json1_1DeleteQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
