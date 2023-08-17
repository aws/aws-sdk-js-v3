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

import { DescribeEngagementRequest, DescribeEngagementResult } from "../models/models_0";
import { de_DescribeEngagementCommand, se_DescribeEngagementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngagementCommand}.
 */
export interface DescribeEngagementCommandInput extends DescribeEngagementRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEngagementCommand}.
 */
export interface DescribeEngagementCommandOutput extends DescribeEngagementResult, __MetadataBearer {}

/**
 * @public
 * <p>Incident Manager uses engagements to engage contacts and escalation plans during an incident.
 *          Use this command to describe the engagement that occurred during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribeEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribeEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // DescribeEngagementRequest
 *   EngagementId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEngagementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngagementResult
 * //   ContactArn: "STRING_VALUE", // required
 * //   EngagementArn: "STRING_VALUE", // required
 * //   Sender: "STRING_VALUE", // required
 * //   Subject: "STRING_VALUE", // required
 * //   Content: "STRING_VALUE", // required
 * //   PublicSubject: "STRING_VALUE",
 * //   PublicContent: "STRING_VALUE",
 * //   IncidentId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   StopTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEngagementCommandInput - {@link DescribeEngagementCommandInput}
 * @returns {@link DescribeEngagementCommandOutput}
 * @see {@link DescribeEngagementCommandInput} for command's `input` shape.
 * @see {@link DescribeEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 */
export class DescribeEngagementCommand extends $Command<
  DescribeEngagementCommandInput,
  DescribeEngagementCommandOutput,
  SSMContactsClientResolvedConfig
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
  constructor(readonly input: DescribeEngagementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEngagementCommandInput, DescribeEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEngagementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "DescribeEngagementCommand";
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
  private serialize(input: DescribeEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEngagementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEngagementCommandOutput> {
    return de_DescribeEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
