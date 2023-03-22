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

import {
  CreateContactRequest,
  CreateContactRequestFilterSensitiveLog,
  CreateContactResult,
  CreateContactResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateContactCommand,
  serializeAws_json1_1CreateContactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 *
 * The input for {@link CreateContactCommand}.
 */
export interface CreateContactCommandInput extends CreateContactRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactCommand}.
 */
export interface CreateContactCommandOutput extends CreateContactResult, __MetadataBearer {}

/**
 * @public
 * <p>Contacts are either the contacts that Incident Manager engages during an incident or the
 *          escalation plans that Incident Manager uses to engage contacts in phases during an
 *          incident. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateContactCommandInput - {@link CreateContactCommandInput}
 * @returns {@link CreateContactCommandOutput}
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while
 *          processing the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 *
 * @example To create a contact
 * ```javascript
 * // The following create-contact example creates a contact in your environment with a blank plan. The plan can be updated after creating contact channels. Use the create-contact-channel operation with the output ARN of this command. After you have created contact channels for this contact use update-contact to update the plan.
 * const input = {
 *   "Alias": "akuam",
 *   "DisplayName": "Akua Mansa",
 *   "Plan": {
 *     "Stages": []
 *   },
 *   "Type": "PERSONAL"
 * };
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam"
 * }
 * *\/
 * // example id: to-create-a-contact-1630360152750
 * ```
 *
 */
export class CreateContactCommand extends $Command<
  CreateContactCommandInput,
  CreateContactCommandOutput,
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
  constructor(readonly input: CreateContactCommandInput) {
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
  ): Handler<CreateContactCommandInput, CreateContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateContactCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "CreateContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateContactResultFilterSensitiveLog,
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
  private serialize(input: CreateContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContactCommandOutput> {
    return deserializeAws_json1_1CreateContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
