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
import { ListAnalyticsDataAssociationsRequest, ListAnalyticsDataAssociationsResponse } from "../models/models_1";
import {
  de_ListAnalyticsDataAssociationsCommand,
  se_ListAnalyticsDataAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnalyticsDataAssociationsCommand}.
 */
export interface ListAnalyticsDataAssociationsCommandInput extends ListAnalyticsDataAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalyticsDataAssociationsCommand}.
 */
export interface ListAnalyticsDataAssociationsCommandOutput
  extends ListAnalyticsDataAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Lists the association status of requested dataset ID for a given Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAnalyticsDataAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAnalyticsDataAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListAnalyticsDataAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAnalyticsDataAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalyticsDataAssociationsResponse
 * //   Results: [ // AnalyticsDataAssociationResults
 * //     { // AnalyticsDataAssociationResult
 * //       DataSetId: "STRING_VALUE",
 * //       TargetAccountId: "STRING_VALUE",
 * //       ResourceShareId: "STRING_VALUE",
 * //       ResourceShareArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalyticsDataAssociationsCommandInput - {@link ListAnalyticsDataAssociationsCommandInput}
 * @returns {@link ListAnalyticsDataAssociationsCommandOutput}
 * @see {@link ListAnalyticsDataAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAnalyticsDataAssociationsCommandOutput} for command's `response` shape.
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
export class ListAnalyticsDataAssociationsCommand extends $Command<
  ListAnalyticsDataAssociationsCommandInput,
  ListAnalyticsDataAssociationsCommandOutput,
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
  constructor(readonly input: ListAnalyticsDataAssociationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnalyticsDataAssociationsCommandInput, ListAnalyticsDataAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnalyticsDataAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListAnalyticsDataAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "ListAnalyticsDataAssociations",
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
  private serialize(input: ListAnalyticsDataAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAnalyticsDataAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnalyticsDataAssociationsCommandOutput> {
    return de_ListAnalyticsDataAssociationsCommand(output, context);
  }
}
