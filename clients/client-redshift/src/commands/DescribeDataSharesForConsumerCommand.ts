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
} from "@smithy/types";

import { DescribeDataSharesForConsumerMessage, DescribeDataSharesForConsumerResult } from "../models/models_0";
import {
  de_DescribeDataSharesForConsumerCommand,
  se_DescribeDataSharesForConsumerCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSharesForConsumerCommand}.
 */
export interface DescribeDataSharesForConsumerCommandInput extends DescribeDataSharesForConsumerMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDataSharesForConsumerCommand}.
 */
export interface DescribeDataSharesForConsumerCommandOutput
  extends DescribeDataSharesForConsumerResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of datashares where the account identifier being called is a consumer account identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDataSharesForConsumerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDataSharesForConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeDataSharesForConsumerMessage
 *   ConsumerArn: "STRING_VALUE",
 *   Status: "ACTIVE" || "AVAILABLE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDataSharesForConsumerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSharesForConsumerResult
 * //   DataShares: [ // DataShareList
 * //     { // DataShare
 * //       DataShareArn: "STRING_VALUE",
 * //       ProducerArn: "STRING_VALUE",
 * //       AllowPubliclyAccessibleConsumers: true || false,
 * //       DataShareAssociations: [ // DataShareAssociationList
 * //         { // DataShareAssociation
 * //           ConsumerIdentifier: "STRING_VALUE",
 * //           Status: "ACTIVE" || "PENDING_AUTHORIZATION" || "AUTHORIZED" || "DEAUTHORIZED" || "REJECTED" || "AVAILABLE",
 * //           ConsumerRegion: "STRING_VALUE",
 * //           CreatedDate: new Date("TIMESTAMP"),
 * //           StatusChangeDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       ManagedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataSharesForConsumerCommandInput - {@link DescribeDataSharesForConsumerCommandInput}
 * @returns {@link DescribeDataSharesForConsumerCommandOutput}
 * @see {@link DescribeDataSharesForConsumerCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSharesForConsumerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *  <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeDataSharesForConsumerCommand extends $Command<
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeDataSharesForConsumerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataSharesForConsumerCommandInput, DescribeDataSharesForConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataSharesForConsumerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeDataSharesForConsumerCommand";
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
  private serialize(input: DescribeDataSharesForConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDataSharesForConsumerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataSharesForConsumerCommandOutput> {
    return de_DescribeDataSharesForConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
