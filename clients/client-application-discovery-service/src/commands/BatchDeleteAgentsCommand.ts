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

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { BatchDeleteAgentsRequest, BatchDeleteAgentsResponse } from "../models/models_0";
import { de_BatchDeleteAgentsCommand, se_BatchDeleteAgentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteAgentsCommand}.
 */
export interface BatchDeleteAgentsCommandInput extends BatchDeleteAgentsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteAgentsCommand}.
 */
export interface BatchDeleteAgentsCommandOutput extends BatchDeleteAgentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Deletes one or more agents or collectors as specified by ID. Deleting an agent or collector does not
 *       delete the previously discovered data.
 *       To delete the data collected, use <code>StartBatchDeleteConfigurationTask</code>.
 *
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, BatchDeleteAgentsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, BatchDeleteAgentsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // BatchDeleteAgentsRequest
 *   deleteAgents: [ // DeleteAgents // required
 *     { // DeleteAgent
 *       agentId: "STRING_VALUE", // required
 *       force: true || false,
 *     },
 *   ],
 * };
 * const command = new BatchDeleteAgentsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteAgentsResponse
 * //   errors: [ // BatchDeleteAgentErrors
 * //     { // BatchDeleteAgentError
 * //       agentId: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //       errorCode: "NOT_FOUND" || "INTERNAL_SERVER_ERROR" || "AGENT_IN_USE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteAgentsCommandInput - {@link BatchDeleteAgentsCommandInput}
 * @returns {@link BatchDeleteAgentsCommandOutput}
 * @see {@link BatchDeleteAgentsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteAgentsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class BatchDeleteAgentsCommand extends $Command<
  BatchDeleteAgentsCommandInput,
  BatchDeleteAgentsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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
  constructor(readonly input: BatchDeleteAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteAgentsCommandInput, BatchDeleteAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteAgentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "BatchDeleteAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPoseidonService_V2015_11_01",
        operation: "BatchDeleteAgents",
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
  private serialize(input: BatchDeleteAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDeleteAgentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteAgentsCommandOutput> {
    return de_BatchDeleteAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
