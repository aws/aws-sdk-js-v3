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

import { DisableLoggingMessage, LoggingStatus } from "../models/models_1";
import { de_DisableLoggingCommand, se_DisableLoggingCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableLoggingCommand}.
 */
export interface DisableLoggingCommandInput extends DisableLoggingMessage {}
/**
 * @public
 *
 * The output of {@link DisableLoggingCommand}.
 */
export interface DisableLoggingCommandOutput extends LoggingStatus, __MetadataBearer {}

/**
 * @public
 * <p>Stops logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DisableLoggingMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DisableLoggingCommand(input);
 * const response = await client.send(command);
 * // { // LoggingStatus
 * //   LoggingEnabled: true || false,
 * //   BucketName: "STRING_VALUE",
 * //   S3KeyPrefix: "STRING_VALUE",
 * //   LastSuccessfulDeliveryTime: new Date("TIMESTAMP"),
 * //   LastFailureTime: new Date("TIMESTAMP"),
 * //   LastFailureMessage: "STRING_VALUE",
 * //   LogDestinationType: "s3" || "cloudwatch",
 * //   LogExports: [ // LogTypeList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableLoggingCommandInput - {@link DisableLoggingCommandInput}
 * @returns {@link DisableLoggingCommandOutput}
 * @see {@link DisableLoggingCommandInput} for command's `input` shape.
 * @see {@link DisableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DisableLoggingCommand extends $Command<
  DisableLoggingCommandInput,
  DisableLoggingCommandOutput,
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
  constructor(readonly input: DisableLoggingCommandInput) {
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
  ): Handler<DisableLoggingCommandInput, DisableLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableLoggingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DisableLoggingCommand";
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
  private serialize(input: DisableLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisableLoggingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableLoggingCommandOutput> {
    return de_DisableLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
