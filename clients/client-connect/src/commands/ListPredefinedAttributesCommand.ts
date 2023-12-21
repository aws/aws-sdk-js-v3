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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListPredefinedAttributesRequest, ListPredefinedAttributesResponse } from "../models/models_1";
import { de_ListPredefinedAttributesCommand, se_ListPredefinedAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPredefinedAttributesCommand}.
 */
export interface ListPredefinedAttributesCommandInput extends ListPredefinedAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListPredefinedAttributesCommand}.
 */
export interface ListPredefinedAttributesCommandOutput extends ListPredefinedAttributesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists predefined attributes for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListPredefinedAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListPredefinedAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListPredefinedAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPredefinedAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListPredefinedAttributesResponse
 * //   NextToken: "STRING_VALUE",
 * //   PredefinedAttributeSummaryList: [ // PredefinedAttributeSummaryList
 * //     { // PredefinedAttributeSummary
 * //       Name: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPredefinedAttributesCommandInput - {@link ListPredefinedAttributesCommandInput}
 * @returns {@link ListPredefinedAttributesCommandOutput}
 * @see {@link ListPredefinedAttributesCommandInput} for command's `input` shape.
 * @see {@link ListPredefinedAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListPredefinedAttributesCommand extends $Command<
  ListPredefinedAttributesCommandInput,
  ListPredefinedAttributesCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListPredefinedAttributesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPredefinedAttributesCommandInput, ListPredefinedAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPredefinedAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListPredefinedAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "ListPredefinedAttributes",
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
  private serialize(input: ListPredefinedAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPredefinedAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPredefinedAttributesCommandOutput> {
    return de_ListPredefinedAttributesCommand(output, context);
  }
}
