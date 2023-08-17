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

import { CreateRotationOverrideRequest, CreateRotationOverrideResult } from "../models/models_0";
import { de_CreateRotationOverrideCommand, se_CreateRotationOverrideCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRotationOverrideCommand}.
 */
export interface CreateRotationOverrideCommandInput extends CreateRotationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link CreateRotationOverrideCommand}.
 */
export interface CreateRotationOverrideCommandOutput extends CreateRotationOverrideResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an override for a rotation in an on-call schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateRotationOverrideCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateRotationOverrideCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // CreateRotationOverrideRequest
 *   RotationId: "STRING_VALUE", // required
 *   NewContactIds: [ // RotationOverrideContactsArnList // required
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateRotationOverrideCommand(input);
 * const response = await client.send(command);
 * // { // CreateRotationOverrideResult
 * //   RotationOverrideId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRotationOverrideCommandInput - {@link CreateRotationOverrideCommandInput}
 * @returns {@link CreateRotationOverrideCommandOutput}
 * @see {@link CreateRotationOverrideCommandInput} for command's `input` shape.
 * @see {@link CreateRotationOverrideCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
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
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 */
export class CreateRotationOverrideCommand extends $Command<
  CreateRotationOverrideCommandInput,
  CreateRotationOverrideCommandOutput,
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
  constructor(readonly input: CreateRotationOverrideCommandInput) {
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
  ): Handler<CreateRotationOverrideCommandInput, CreateRotationOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRotationOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "CreateRotationOverrideCommand";
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
  private serialize(input: CreateRotationOverrideCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRotationOverrideCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRotationOverrideCommandOutput> {
    return de_CreateRotationOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
