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

import { ListAdapterVersionsRequest, ListAdapterVersionsResponse } from "../models/models_0";
import { de_ListAdapterVersionsCommand, se_ListAdapterVersionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAdapterVersionsCommand}.
 */
export interface ListAdapterVersionsCommandInput extends ListAdapterVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAdapterVersionsCommand}.
 */
export interface ListAdapterVersionsCommandOutput extends ListAdapterVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List all version of an adapter that meet the specified filtration criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, ListAdapterVersionsCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, ListAdapterVersionsCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // ListAdapterVersionsRequest
 *   AdapterId: "STRING_VALUE",
 *   AfterCreationTime: new Date("TIMESTAMP"),
 *   BeforeCreationTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAdapterVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAdapterVersionsResponse
 * //   AdapterVersions: [ // AdapterVersionList
 * //     { // AdapterVersionOverview
 * //       AdapterId: "STRING_VALUE",
 * //       AdapterVersion: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FeatureTypes: [ // FeatureTypes
 * //         "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 * //       ],
 * //       Status: "ACTIVE" || "AT_RISK" || "DEPRECATED" || "CREATION_ERROR" || "CREATION_IN_PROGRESS",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdapterVersionsCommandInput - {@link ListAdapterVersionsCommandInput}
 * @returns {@link ListAdapterVersionsCommandOutput}
 * @see {@link ListAdapterVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAdapterVersionsCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> Returned when an operation tried to access a nonexistent resource. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 */
export class ListAdapterVersionsCommand extends $Command<
  ListAdapterVersionsCommandInput,
  ListAdapterVersionsCommandOutput,
  TextractClientResolvedConfig
> {
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
  constructor(readonly input: ListAdapterVersionsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAdapterVersionsCommandInput, ListAdapterVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAdapterVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "ListAdapterVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Textract",
        operation: "ListAdapterVersions",
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
  private serialize(input: ListAdapterVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAdapterVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAdapterVersionsCommandOutput> {
    return de_ListAdapterVersionsCommand(output, context);
  }
}
