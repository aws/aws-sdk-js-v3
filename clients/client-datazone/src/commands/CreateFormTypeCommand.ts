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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import {
  CreateFormTypeInput,
  CreateFormTypeInputFilterSensitiveLog,
  CreateFormTypeOutput,
  CreateFormTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateFormTypeCommand, se_CreateFormTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFormTypeCommand}.
 */
export interface CreateFormTypeCommandInput extends CreateFormTypeInput {}
/**
 * @public
 *
 * The output of {@link CreateFormTypeCommand}.
 */
export interface CreateFormTypeCommandOutput extends CreateFormTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a metadata form type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateFormTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateFormTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateFormTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   model: { // Model Union: only one key present
 *     smithy: "STRING_VALUE",
 *   },
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   status: "ENABLED" || "DISABLED",
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateFormTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateFormTypeOutput
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE",
 * //   originDomainId: "STRING_VALUE",
 * //   originProjectId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFormTypeCommandInput - {@link CreateFormTypeCommandInput}
 * @returns {@link CreateFormTypeCommandOutput}
 * @see {@link CreateFormTypeCommandInput} for command's `input` shape.
 * @see {@link CreateFormTypeCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class CreateFormTypeCommand extends $Command<
  CreateFormTypeCommandInput,
  CreateFormTypeCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateFormTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFormTypeCommandInput, CreateFormTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFormTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateFormTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFormTypeInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFormTypeOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateFormType",
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
  private serialize(input: CreateFormTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFormTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFormTypeCommandOutput> {
    return de_CreateFormTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
