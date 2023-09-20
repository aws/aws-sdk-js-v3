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
  DescribeFolderContentsRequest,
  DescribeFolderContentsRequestFilterSensitiveLog,
  DescribeFolderContentsResponse,
  DescribeFolderContentsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeFolderContentsCommand, se_DescribeFolderContentsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFolderContentsCommand}.
 */
export interface DescribeFolderContentsCommandInput extends DescribeFolderContentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFolderContentsCommand}.
 */
export interface DescribeFolderContentsCommandOutput extends DescribeFolderContentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the contents of the specified folder, including its documents and
 *             subfolders.</p>
 *          <p>By default, Amazon WorkDocs returns the first 100 active document and folder
 *             metadata items. If there are more results, the response includes a marker that you can
 *             use to request the next set of results. You can also request initialized
 *             documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeFolderContentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeFolderContentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeFolderContentsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   FolderId: "STRING_VALUE", // required
 *   Sort: "DATE" || "NAME",
 *   Order: "ASCENDING" || "DESCENDING",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 *   Type: "ALL" || "DOCUMENT" || "FOLDER",
 *   Include: "STRING_VALUE",
 * };
 * const command = new DescribeFolderContentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFolderContentsResponse
 * //   Folders: [ // FolderMetadataList
 * //     { // FolderMetadata
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatorId: "STRING_VALUE",
 * //       ParentFolderId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //       Signature: "STRING_VALUE",
 * //       Labels: [ // SharedLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       Size: Number("long"),
 * //       LatestVersionSize: Number("long"),
 * //     },
 * //   ],
 * //   Documents: [ // DocumentMetadataList
 * //     { // DocumentMetadata
 * //       Id: "STRING_VALUE",
 * //       CreatorId: "STRING_VALUE",
 * //       ParentFolderId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       LatestVersionMetadata: { // DocumentVersionMetadata
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         ContentType: "STRING_VALUE",
 * //         Size: Number("long"),
 * //         Signature: "STRING_VALUE",
 * //         Status: "INITIALIZED" || "ACTIVE",
 * //         CreatedTimestamp: new Date("TIMESTAMP"),
 * //         ModifiedTimestamp: new Date("TIMESTAMP"),
 * //         ContentCreatedTimestamp: new Date("TIMESTAMP"),
 * //         ContentModifiedTimestamp: new Date("TIMESTAMP"),
 * //         CreatorId: "STRING_VALUE",
 * //         Thumbnail: { // DocumentThumbnailUrlMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Source: { // DocumentSourceUrlMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //       Labels: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFolderContentsCommandInput - {@link DescribeFolderContentsCommandInput}
 * @returns {@link DescribeFolderContentsCommandOutput}
 * @see {@link DescribeFolderContentsCommandInput} for command's `input` shape.
 * @see {@link DescribeFolderContentsCommandOutput} for command's `response` shape.
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
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 */
export class DescribeFolderContentsCommand extends $Command<
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
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
  constructor(readonly input: DescribeFolderContentsCommandInput) {
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
  ): Handler<DescribeFolderContentsCommandInput, DescribeFolderContentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFolderContentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeFolderContentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFolderContentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFolderContentsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGorillaBoyService",
        operation: "DescribeFolderContents",
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
  private serialize(input: DescribeFolderContentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFolderContentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFolderContentsCommandOutput> {
    return de_DescribeFolderContentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
