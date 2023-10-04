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
  CreateAssetTypeInput,
  CreateAssetTypeInputFilterSensitiveLog,
  CreateAssetTypeOutput,
  CreateAssetTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAssetTypeCommand, se_CreateAssetTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAssetTypeCommand}.
 */
export interface CreateAssetTypeCommandInput extends CreateAssetTypeInput {}
/**
 * @public
 *
 * The output of {@link CreateAssetTypeCommand}.
 */
export interface CreateAssetTypeCommandOutput extends CreateAssetTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a custom asset type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAssetTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAssetTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateAssetTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   formsInput: { // FormsInputMap // required
 *     "<keys>": { // FormEntryInput
 *       typeIdentifier: "STRING_VALUE", // required
 *       typeRevision: "STRING_VALUE", // required
 *       required: true || false,
 *     },
 *   },
 *   owningProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateAssetTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetTypeOutput
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   formsOutput: { // FormsOutputMap // required
 * //     "<keys>": { // FormEntryOutput
 * //       typeName: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE", // required
 * //       required: true || false,
 * //     },
 * //   },
 * //   owningProjectId: "STRING_VALUE",
 * //   originDomainId: "STRING_VALUE",
 * //   originProjectId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAssetTypeCommandInput - {@link CreateAssetTypeCommandInput}
 * @returns {@link CreateAssetTypeCommandOutput}
 * @see {@link CreateAssetTypeCommandInput} for command's `input` shape.
 * @see {@link CreateAssetTypeCommandOutput} for command's `response` shape.
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
export class CreateAssetTypeCommand extends $Command<
  CreateAssetTypeCommandInput,
  CreateAssetTypeCommandOutput,
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
  constructor(readonly input: CreateAssetTypeCommandInput) {
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
  ): Handler<CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssetTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateAssetTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssetTypeInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAssetTypeOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateAssetType",
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
  private serialize(input: CreateAssetTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAssetTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssetTypeCommandOutput> {
    return de_CreateAssetTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
