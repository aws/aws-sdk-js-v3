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
  PutRetentionPolicyRequest,
  PutRetentionPolicyRequestFilterSensitiveLog,
  PutRetentionPolicyResponse,
} from "../models/models_0";
import { de_PutRetentionPolicyCommand, se_PutRetentionPolicyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandInput extends PutRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandOutput extends PutRetentionPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Puts a retention policy to the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // PutRetentionPolicyRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   FolderConfigurations: [ // FolderConfigurations // required
 *     { // FolderConfiguration
 *       Name: "INBOX" || "DELETED_ITEMS" || "SENT_ITEMS" || "DRAFTS" || "JUNK_EMAIL", // required
 *       Action: "NONE" || "DELETE" || "PERMANENTLY_DELETE", // required
 *       Period: Number("int"),
 *     },
 *   ],
 * };
 * const command = new PutRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRetentionPolicyCommandInput - {@link PutRetentionPolicyCommandInput}
 * @returns {@link PutRetentionPolicyCommandOutput}
 * @see {@link PutRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class PutRetentionPolicyCommand extends $Command<
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: PutRetentionPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRetentionPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "PutRetentionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRetentionPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkMailService",
        operation: "PutRetentionPolicy",
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
  private serialize(input: PutRetentionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRetentionPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRetentionPolicyCommandOutput> {
    return de_PutRetentionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
