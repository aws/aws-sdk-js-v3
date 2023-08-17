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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateAgentRequest, CreateAgentResponse } from "../models/models_0";
import { de_CreateAgentCommand, se_CreateAgentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandInput extends CreateAgentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandOutput extends CreateAgentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Activates an DataSync agent that you've deployed in your storage
 *       environment. The activation process associates the agent with your Amazon Web Services account.</p>
 *          <p>If you haven't deployed an agent yet, see the following topics to learn more:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/datasync/latest/userguide/agent-requirements.html">Agent requirements</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/datasync/latest/userguide/configure-agent.html">Create an agent</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you're transferring between Amazon Web Services storage services, you don't need a
 *           DataSync agent. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateAgentRequest
 *   ActivationKey: "STRING_VALUE", // required
 *   AgentName: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   VpcEndpointId: "STRING_VALUE",
 *   SubnetArns: [ // PLSubnetArnList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupArns: [ // PLSecurityGroupArnList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateAgentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentResponse
 * //   AgentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAgentCommandInput - {@link CreateAgentCommandInput}
 * @returns {@link CreateAgentCommandOutput}
 * @see {@link CreateAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class CreateAgentCommand extends $Command<
  CreateAgentCommandInput,
  CreateAgentCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: CreateAgentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAgentCommandInput, CreateAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAgentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateAgentCommand";
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
  private serialize(input: CreateAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAgentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAgentCommandOutput> {
    return de_CreateAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
