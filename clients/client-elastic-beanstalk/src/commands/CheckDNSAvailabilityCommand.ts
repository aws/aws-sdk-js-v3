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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CheckDNSAvailabilityMessage, CheckDNSAvailabilityResultMessage } from "../models/models_0";
import { de_CheckDNSAvailabilityCommand, se_CheckDNSAvailabilityCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CheckDNSAvailabilityCommand}.
 */
export interface CheckDNSAvailabilityCommandInput extends CheckDNSAvailabilityMessage {}
/**
 * @public
 *
 * The output of {@link CheckDNSAvailabilityCommand}.
 */
export interface CheckDNSAvailabilityCommandOutput extends CheckDNSAvailabilityResultMessage, __MetadataBearer {}

/**
 * @public
 * <p>Checks if the specified CNAME is available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CheckDNSAvailabilityCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CheckDNSAvailabilityCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // CheckDNSAvailabilityMessage
 *   CNAMEPrefix: "STRING_VALUE", // required
 * };
 * const command = new CheckDNSAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // CheckDNSAvailabilityResultMessage
 * //   Available: true || false,
 * //   FullyQualifiedCNAME: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CheckDNSAvailabilityCommandInput - {@link CheckDNSAvailabilityCommandInput}
 * @returns {@link CheckDNSAvailabilityCommandOutput}
 * @see {@link CheckDNSAvailabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDNSAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To check the availability of a CNAME
 * ```javascript
 * // The following operation checks the availability of the subdomain my-cname:
 * const input = {
 *   "CNAMEPrefix": "my-cname"
 * };
 * const command = new CheckDNSAvailabilityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Available": true,
 *   "FullyQualifiedCNAME": "my-cname.us-west-2.elasticbeanstalk.com"
 * }
 * *\/
 * // example id: to-check-the-availability-of-a-cname-1456268589537
 * ```
 *
 */
export class CheckDNSAvailabilityCommand extends $Command<
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: CheckDNSAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckDNSAvailabilityCommandInput, CheckDNSAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckDNSAvailabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CheckDNSAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "CheckDNSAvailability",
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
  private serialize(input: CheckDNSAvailabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CheckDNSAvailabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckDNSAvailabilityCommandOutput> {
    return de_CheckDNSAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
