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

import { EnableLoggingMessage, LoggingStatus } from "../models/models_1";
import { de_EnableLoggingCommand, se_EnableLoggingCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableLoggingCommand}.
 */
export interface EnableLoggingCommandInput extends EnableLoggingMessage {}
/**
 * @public
 *
 * The output of {@link EnableLoggingCommand}.
 */
export interface EnableLoggingCommandOutput extends LoggingStatus, __MetadataBearer {}

/**
 * @public
 * <p>Starts logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, EnableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, EnableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // EnableLoggingMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   BucketName: "STRING_VALUE",
 *   S3KeyPrefix: "STRING_VALUE",
 *   LogDestinationType: "s3" || "cloudwatch",
 *   LogExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableLoggingCommand(input);
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
 * @param EnableLoggingCommandInput - {@link EnableLoggingCommandInput}
 * @returns {@link EnableLoggingCommandOutput}
 * @see {@link EnableLoggingCommandInput} for command's `input` shape.
 * @see {@link EnableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link BucketNotFoundFault} (client fault)
 *  <p>Could not find the specified S3 bucket.</p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InsufficientS3BucketPolicyFault} (client fault)
 *  <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidS3BucketNameFault} (client fault)
 *  <p>The S3 bucket name is invalid. For more information about naming rules, go to
 *                 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
 *                 Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3)
 *             Developer Guide.</p>
 *
 * @throws {@link InvalidS3KeyPrefixFault} (client fault)
 *  <p>The string specified for the logging S3 key prefix does not comply with the
 *             documented constraints.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class EnableLoggingCommand extends $Command<
  EnableLoggingCommandInput,
  EnableLoggingCommandOutput,
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
  constructor(readonly input: EnableLoggingCommandInput) {
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
  ): Handler<EnableLoggingCommandInput, EnableLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EnableLoggingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "EnableLoggingCommand";
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
  private serialize(input: EnableLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableLoggingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableLoggingCommandOutput> {
    return de_EnableLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
