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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import { ImportGameConfigurationRequest, ImportGameConfigurationResult } from "../models/models_0";
import { de_ImportGameConfigurationCommand, se_ImportGameConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportGameConfigurationCommand}.
 */
export interface ImportGameConfigurationCommandInput extends ImportGameConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ImportGameConfigurationCommand}.
 */
export interface ImportGameConfigurationCommandOutput extends ImportGameConfigurationResult, __MetadataBearer {}

/**
 * @public
 * <p>Imports a game configuration.</p>
 *          <p>
 *       This operation replaces the current configuration of the game with the provided input.
 *       This is not a reversible operation. If you want to preserve the previous configuration,
 *       use <code>CreateSnapshot</code> to make a new snapshot before importing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, ImportGameConfigurationCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, ImportGameConfigurationCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const input = { // ImportGameConfigurationRequest
 *   GameName: "STRING_VALUE", // required
 *   ImportSource: { // ImportGameConfigurationSource
 *     File: "BLOB_VALUE", // required
 *   },
 * };
 * const command = new ImportGameConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ImportGameConfigurationResult
 * //   GameConfiguration: { // GameConfigurationDetails
 * //     Sections: { // Sections
 * //       "<keys>": { // Section
 * //         Name: "STRING_VALUE",
 * //         Size: Number("int"),
 * //         Attributes: "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportGameConfigurationCommandInput - {@link ImportGameConfigurationCommandInput}
 * @returns {@link ImportGameConfigurationCommandOutput}
 * @see {@link ImportGameConfigurationCommandInput} for command's `input` shape.
 * @see {@link ImportGameConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would result in exceeding service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link GameSparksServiceException}
 * <p>Base exception class for all service exceptions from GameSparks service.</p>
 *
 */
export class ImportGameConfigurationCommand extends $Command<
  ImportGameConfigurationCommandInput,
  ImportGameConfigurationCommandOutput,
  GameSparksClientResolvedConfig
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
  constructor(readonly input: ImportGameConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportGameConfigurationCommandInput, ImportGameConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportGameConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "ImportGameConfigurationCommand";
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
  private serialize(input: ImportGameConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportGameConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportGameConfigurationCommandOutput> {
    return de_ImportGameConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
