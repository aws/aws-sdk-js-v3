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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateSkillWithUsersRequest, AssociateSkillWithUsersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateSkillWithUsersCommand,
  serializeAws_json1_1AssociateSkillWithUsersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AssociateSkillWithUsersCommand}.
 */
export interface AssociateSkillWithUsersCommandInput extends AssociateSkillWithUsersRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSkillWithUsersCommand}.
 */
export interface AssociateSkillWithUsersCommandOutput extends AssociateSkillWithUsersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Makes a private skill available for enrolled users to enable on their devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillWithUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillWithUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateSkillWithUsersRequest
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new AssociateSkillWithUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AssociateSkillWithUsersCommandInput - {@link AssociateSkillWithUsersCommandInput}
 * @returns {@link AssociateSkillWithUsersCommandOutput}
 * @see {@link AssociateSkillWithUsersCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillWithUsersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 *
 */
export class AssociateSkillWithUsersCommand extends $Command<
  AssociateSkillWithUsersCommandInput,
  AssociateSkillWithUsersCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: AssociateSkillWithUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateSkillWithUsersCommandInput, AssociateSkillWithUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSkillWithUsersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateSkillWithUsersCommand";
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
  private serialize(input: AssociateSkillWithUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateSkillWithUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSkillWithUsersCommandOutput> {
    return deserializeAws_json1_1AssociateSkillWithUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
