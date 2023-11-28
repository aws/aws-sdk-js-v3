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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { ListTransformersRequest, ListTransformersResponse } from "../models/models_0";
import { de_ListTransformersCommand, se_ListTransformersCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTransformersCommand}.
 */
export interface ListTransformersCommandInput extends ListTransformersRequest {}
/**
 * @public
 *
 * The output of {@link ListTransformersCommand}.
 */
export interface ListTransformersCommandOutput extends ListTransformersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the available transformers. Transformers describe how to process the incoming EDI (electronic data interchange) documents, and extract the necessary information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListTransformersCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListTransformersCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // ListTransformersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTransformersCommand(input);
 * const response = await client.send(command);
 * // { // ListTransformersResponse
 * //   transformers: [ // TransformerList // required
 * //     { // TransformerSummary
 * //       transformerId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       fileFormat: "XML" || "JSON", // required
 * //       mappingTemplate: "STRING_VALUE", // required
 * //       status: "active" || "inactive", // required
 * //       ediType: { // EdiType Union: only one key present
 * //         x12Details: { // X12Details
 * //           transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 * //           version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 * //         },
 * //       },
 * //       sampleDocument: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransformersCommandInput - {@link ListTransformersCommandInput}
 * @returns {@link ListTransformersCommandOutput}
 * @see {@link ListTransformersCommandInput} for command's `input` shape.
 * @see {@link ListTransformersCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample ListTransformers call
 * ```javascript
 * //
 * const input = {
 *   "maxResults": 50,
 *   "nextToken": "foo"
 * };
 * const command = new ListTransformersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "foo",
 *   "transformers": [
 *     {
 *       "name": "transformJSON",
 *       "createdAt": "2023-11-01T21:51:05.504Z",
 *       "ediType": {
 *         "x12Details": {
 *           "version": "VERSION_4010",
 *           "transactionSet": "X12_110"
 *         }
 *       },
 *       "fileFormat": "JSON",
 *       "mappingTemplate": "$",
 *       "modifiedAt": "2023-11-01T21:51:05.504Z",
 *       "sampleDocument": "s3://test-bucket/sampleDoc.txt",
 *       "status": "inactive",
 *       "transformerId": "tr-974c129999f84d8c9"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class ListTransformersCommand extends $Command<
  ListTransformersCommandInput,
  ListTransformersCommandOutput,
  B2biClientResolvedConfig
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
  constructor(readonly input: ListTransformersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTransformersCommandInput, ListTransformersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTransformersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "ListTransformersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "ListTransformers",
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
  private serialize(input: ListTransformersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTransformersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTransformersCommandOutput> {
    return de_ListTransformersCommand(output, context);
  }
}
