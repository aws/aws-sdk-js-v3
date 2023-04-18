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

import { UpdateDocumentRequest, UpdateDocumentResult } from "../models/models_2";
import { de_UpdateDocumentCommand, se_UpdateDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 *
 * The input for {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandOutput extends UpdateDocumentResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates one or more values for an SSM document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateDocumentRequest
 *   Content: "STRING_VALUE", // required
 *   Attachments: [ // AttachmentsSourceList
 *     { // AttachmentsSource
 *       Key: "SourceUrl" || "S3FileUrl" || "AttachmentReference",
 *       Values: [ // AttachmentsSourceValues
 *         "STRING_VALUE",
 *       ],
 *       Name: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 *   DocumentVersion: "STRING_VALUE",
 *   DocumentFormat: "YAML" || "JSON" || "TEXT",
 *   TargetType: "STRING_VALUE",
 * };
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDocumentCommandInput - {@link UpdateDocumentCommandInput}
 * @returns {@link UpdateDocumentCommandOutput}
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DocumentVersionLimitExceeded} (client fault)
 *  <p>The document has too many versions. Delete one or more document versions and try
 *    again.</p>
 *
 * @throws {@link DuplicateDocumentContent} (client fault)
 *  <p>The content of the association document matches another document. Change the content of the
 *    document and try again.</p>
 *
 * @throws {@link DuplicateDocumentVersionName} (client fault)
 *  <p>The version name has already been used in this document. Specify a different version name,
 *    and then try again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentContent} (client fault)
 *  <p>The content for the document isn't valid.</p>
 *
 * @throws {@link InvalidDocumentOperation} (client fault)
 *  <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 *
 * @throws {@link InvalidDocumentSchemaVersion} (client fault)
 *  <p>The version of the document schema isn't supported.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link MaxDocumentSizeExceeded} (client fault)
 *  <p>The size limit of a document is 64 KB.</p>
 *
 *
 */
export class UpdateDocumentCommand extends $Command<
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateDocumentCommandInput) {
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
  ): Handler<UpdateDocumentCommandInput, UpdateDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDocumentCommandOutput> {
    return de_UpdateDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
