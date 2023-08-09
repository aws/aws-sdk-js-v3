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

import { DescribeDataSharesForProducerMessage, DescribeDataSharesForProducerResult } from "../models/models_0";
import {
  de_DescribeDataSharesForProducerCommand,
  se_DescribeDataSharesForProducerCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSharesForProducerCommand}.
 */
export interface DescribeDataSharesForProducerCommandInput extends DescribeDataSharesForProducerMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDataSharesForProducerCommand}.
 */
export interface DescribeDataSharesForProducerCommandOutput
  extends DescribeDataSharesForProducerResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of datashares when the account identifier being called is a producer account identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDataSharesForProducerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDataSharesForProducerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeDataSharesForProducerMessage
 *   ProducerArn: "STRING_VALUE",
 *   Status: "ACTIVE" || "AUTHORIZED" || "PENDING_AUTHORIZATION" || "DEAUTHORIZED" || "REJECTED",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDataSharesForProducerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSharesForProducerResult
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
 * @param DescribeDataSharesForProducerCommandInput - {@link DescribeDataSharesForProducerCommandInput}
 * @returns {@link DescribeDataSharesForProducerCommandOutput}
 * @see {@link DescribeDataSharesForProducerCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSharesForProducerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *  <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeDataSharesForProducerCommand extends $Command<
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
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
  constructor(readonly input: DescribeDataSharesForProducerCommandInput) {
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
  ): Handler<DescribeDataSharesForProducerCommandInput, DescribeDataSharesForProducerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataSharesForProducerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeDataSharesForProducerCommand";
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
  private serialize(input: DescribeDataSharesForProducerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDataSharesForProducerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataSharesForProducerCommandOutput> {
    return de_DescribeDataSharesForProducerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
