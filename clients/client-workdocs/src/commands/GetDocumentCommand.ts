// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  GetDocumentRequest,
  GetDocumentRequestFilterSensitiveLog,
  GetDocumentResponse,
  GetDocumentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDocumentCommand, se_GetDocumentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandInput extends GetDocumentRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandOutput extends GetDocumentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details of a document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // GetDocumentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   IncludeCustomMetadata: true || false,
 * };
 * const command = new GetDocumentCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentResponse
 * //   Metadata: { // DocumentMetadata
 * //     Id: "STRING_VALUE",
 * //     CreatorId: "STRING_VALUE",
 * //     ParentFolderId: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     ModifiedTimestamp: new Date("TIMESTAMP"),
 * //     LatestVersionMetadata: { // DocumentVersionMetadata
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ContentType: "STRING_VALUE",
 * //       Size: Number("long"),
 * //       Signature: "STRING_VALUE",
 * //       Status: "INITIALIZED" || "ACTIVE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       ContentCreatedTimestamp: new Date("TIMESTAMP"),
 * //       ContentModifiedTimestamp: new Date("TIMESTAMP"),
 * //       CreatorId: "STRING_VALUE",
 * //       Thumbnail: { // DocumentThumbnailUrlMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Source: { // DocumentSourceUrlMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //     Labels: [ // SharedLabels
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CustomMetadata: { // CustomMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDocumentCommandInput - {@link GetDocumentCommandInput}
 * @returns {@link GetDocumentCommandOutput}
 * @see {@link GetDocumentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>The password is invalid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 */
export class GetDocumentCommand extends $Command<
  GetDocumentCommandInput,
  GetDocumentCommandOutput,
  WorkDocsClientResolvedConfig
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
  constructor(readonly input: GetDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentCommandInput, GetDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDocumentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "GetDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDocumentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGorillaBoyService",
        operation: "GetDocument",
      },
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
  private serialize(input: GetDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentCommandOutput> {
    return de_GetDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
