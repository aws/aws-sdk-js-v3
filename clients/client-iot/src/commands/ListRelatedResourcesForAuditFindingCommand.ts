// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListRelatedResourcesForAuditFindingRequest,
  ListRelatedResourcesForAuditFindingRequestFilterSensitiveLog,
  ListRelatedResourcesForAuditFindingResponse,
  ListRelatedResourcesForAuditFindingResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListRelatedResourcesForAuditFindingCommand,
  serializeAws_restJson1ListRelatedResourcesForAuditFindingCommand,
} from "../protocols/Aws_restJson1";

export interface ListRelatedResourcesForAuditFindingCommandInput extends ListRelatedResourcesForAuditFindingRequest {}
export interface ListRelatedResourcesForAuditFindingCommandOutput
  extends ListRelatedResourcesForAuditFindingResponse,
    __MetadataBearer {}

/**
 * <p>The related resources of an Audit finding.
 *       The following resources can be returned from calling this API:</p>
 *          <ul>
 *             <li>
 *                <p>DEVICE_CERTIFICATE</p>
 *             </li>
 *             <li>
 *                <p>CA_CERTIFICATE</p>
 *             </li>
 *             <li>
 *                <p>IOT_POLICY</p>
 *             </li>
 *             <li>
 *                <p>COGNITO_IDENTITY_POOL</p>
 *             </li>
 *             <li>
 *                <p>CLIENT_ID</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_SETTINGS</p>
 *             </li>
 *             <li>
 *                <p>ROLE_ALIAS</p>
 *             </li>
 *             <li>
 *                <p>IAM_ROLE</p>
 *             </li>
 *             <li>
 *                <p>ISSUER_CERTIFICATE</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a>
 *       but provides pagination and is not limited to 10 resources.
 *       When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for
 *       active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRelatedResourcesForAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRelatedResourcesForAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListRelatedResourcesForAuditFindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRelatedResourcesForAuditFindingCommandInput} for command's `input` shape.
 * @see {@link ListRelatedResourcesForAuditFindingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListRelatedResourcesForAuditFindingCommand extends $Command<
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: ListRelatedResourcesForAuditFindingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRelatedResourcesForAuditFindingCommandInput, ListRelatedResourcesForAuditFindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRelatedResourcesForAuditFindingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListRelatedResourcesForAuditFindingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRelatedResourcesForAuditFindingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRelatedResourcesForAuditFindingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRelatedResourcesForAuditFindingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRelatedResourcesForAuditFindingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRelatedResourcesForAuditFindingCommandOutput> {
    return deserializeAws_restJson1ListRelatedResourcesForAuditFindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
