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
  CreateEnvironmentProfileInput,
  CreateEnvironmentProfileInputFilterSensitiveLog,
  CreateEnvironmentProfileOutput,
  CreateEnvironmentProfileOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateEnvironmentProfileCommand, se_CreateEnvironmentProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentProfileCommand}.
 */
export interface CreateEnvironmentProfileCommandInput extends CreateEnvironmentProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentProfileCommand}.
 */
export interface CreateEnvironmentProfileCommandOutput extends CreateEnvironmentProfileOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon DataZone environment profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateEnvironmentProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateEnvironmentProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateEnvironmentProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   environmentBlueprintIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   userParameters: [ // EnvironmentParametersList
 *     { // EnvironmentParameter
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   awsAccountId: "STRING_VALUE",
 *   awsAccountRegion: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentProfileOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   awsAccountId: "STRING_VALUE",
 * //   awsAccountRegion: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   environmentBlueprintId: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE",
 * //   userParameters: [ // CustomParameterList
 * //     { // CustomParameter
 * //       keyName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       fieldType: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //       isEditable: true || false,
 * //       isOptional: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentProfileCommandInput - {@link CreateEnvironmentProfileCommandInput}
 * @returns {@link CreateEnvironmentProfileCommandOutput}
 * @see {@link CreateEnvironmentProfileCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class CreateEnvironmentProfileCommand extends $Command<
  CreateEnvironmentProfileCommandInput,
  CreateEnvironmentProfileCommandOutput,
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
  constructor(readonly input: CreateEnvironmentProfileCommandInput) {
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
  ): Handler<CreateEnvironmentProfileCommandInput, CreateEnvironmentProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEnvironmentProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateEnvironmentProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentProfileInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentProfileOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateEnvironmentProfile",
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
  private serialize(input: CreateEnvironmentProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEnvironmentProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEnvironmentProfileCommandOutput> {
    return de_CreateEnvironmentProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
