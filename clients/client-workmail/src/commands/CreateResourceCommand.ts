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

import { CreateResourceRequest, CreateResourceResponse } from "../models/models_0";
import { de_CreateResourceCommand, se_CreateResourceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceCommand}.
 */
export interface CreateResourceCommandInput extends CreateResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceCommand}.
 */
export interface CreateResourceCommandOutput extends CreateResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new WorkMail resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // CreateResourceRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "ROOM" || "EQUIPMENT", // required
 *   Description: "STRING_VALUE",
 *   HiddenFromGlobalAddressList: true || false,
 * };
 * const command = new CreateResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceResponse
 * //   ResourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceCommandInput - {@link CreateResourceCommandInput}
 * @returns {@link CreateResourceCommandOutput}
 * @see {@link CreateResourceCommandInput} for command's `input` shape.
 * @see {@link CreateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryServiceAuthenticationFailedException} (client fault)
 *  <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *  <p>The user, group, or resource name isn't unique in WorkMail.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ReservedNameException} (client fault)
 *  <p>This user, group, or resource name is not allowed in WorkMail.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>You can't perform a write operation against a read-only directory.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class CreateResourceCommand extends $Command<
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
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
  constructor(readonly input: CreateResourceCommandInput) {
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
  ): Handler<CreateResourceCommandInput, CreateResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "CreateResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkMailService",
        operation: "CreateResource",
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
  private serialize(input: CreateResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceCommandOutput> {
    return de_CreateResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
