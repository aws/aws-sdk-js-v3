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
import { GetAssetTypeInput, GetAssetTypeOutput, GetAssetTypeOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetAssetTypeCommand, se_GetAssetTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAssetTypeCommand}.
 */
export interface GetAssetTypeCommandInput extends GetAssetTypeInput {}
/**
 * @public
 *
 * The output of {@link GetAssetTypeCommand}.
 */
export interface GetAssetTypeCommandOutput extends GetAssetTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Amazon DataZone asset type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetAssetTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetAssetTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetAssetTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 * };
 * const command = new GetAssetTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetTypeOutput
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
 * //   owningProjectId: "STRING_VALUE", // required
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
 * @param GetAssetTypeCommandInput - {@link GetAssetTypeCommandInput}
 * @returns {@link GetAssetTypeCommandOutput}
 * @see {@link GetAssetTypeCommandInput} for command's `input` shape.
 * @see {@link GetAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class GetAssetTypeCommand extends $Command<
  GetAssetTypeCommandInput,
  GetAssetTypeCommandOutput,
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
  constructor(readonly input: GetAssetTypeCommandInput) {
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
  ): Handler<GetAssetTypeCommandInput, GetAssetTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAssetTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetAssetTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetAssetTypeOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetAssetType",
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
  private serialize(input: GetAssetTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssetTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssetTypeCommandOutput> {
    return de_GetAssetTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
