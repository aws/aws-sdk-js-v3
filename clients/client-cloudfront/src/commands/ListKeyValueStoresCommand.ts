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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListKeyValueStoresRequest, ListKeyValueStoresResult } from "../models/models_1";
import { de_ListKeyValueStoresCommand, se_ListKeyValueStoresCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListKeyValueStoresCommand}.
 */
export interface ListKeyValueStoresCommandInput extends ListKeyValueStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListKeyValueStoresCommand}.
 */
export interface ListKeyValueStoresCommandOutput extends ListKeyValueStoresResult, __MetadataBearer {}

/**
 * @public
 * <p>Specifies the Key Value Stores to list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListKeyValueStoresCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListKeyValueStoresCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListKeyValueStoresRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Status: "STRING_VALUE",
 * };
 * const command = new ListKeyValueStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyValueStoresResult
 * //   KeyValueStoreList: { // KeyValueStoreList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // KeyValueStoreSummaryList
 * //       { // KeyValueStore
 * //         Name: "STRING_VALUE", // required
 * //         Id: "STRING_VALUE", // required
 * //         Comment: "STRING_VALUE", // required
 * //         ARN: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE",
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListKeyValueStoresCommandInput - {@link ListKeyValueStoresCommandInput}
 * @returns {@link ListKeyValueStoresCommandOutput}
 * @see {@link ListKeyValueStoresCommandInput} for command's `input` shape.
 * @see {@link ListKeyValueStoresCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListKeyValueStoresCommand extends $Command<
  ListKeyValueStoresCommandInput,
  ListKeyValueStoresCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: ListKeyValueStoresCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeyValueStoresCommandInput, ListKeyValueStoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListKeyValueStoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListKeyValueStoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "ListKeyValueStores",
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
  private serialize(input: ListKeyValueStoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListKeyValueStoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKeyValueStoresCommandOutput> {
    return de_ListKeyValueStoresCommand(output, context);
  }
}
