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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { Application, ApplicationFilterSensitiveLog, ArchiveApplicationRequest } from "../models/models_0";
import { de_ArchiveApplicationCommand, se_ArchiveApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ArchiveApplicationCommand}.
 */
export interface ArchiveApplicationCommandInput extends ArchiveApplicationRequest {}
/**
 * @public
 *
 * The output of {@link ArchiveApplicationCommand}.
 */
export interface ArchiveApplicationCommandOutput extends Application, __MetadataBearer {}

/**
 * @public
 * <p>Archive application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ArchiveApplicationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ArchiveApplicationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ArchiveApplicationRequest
 *   applicationID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ArchiveApplicationCommand(input);
 * const response = await client.send(command);
 * // { // Application
 * //   applicationID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   isArchived: true || false,
 * //   applicationAggregatedStatus: { // ApplicationAggregatedStatus
 * //     lastUpdateDateTime: "STRING_VALUE",
 * //     healthStatus: "STRING_VALUE",
 * //     progressStatus: "STRING_VALUE",
 * //     totalSourceServers: Number("long"),
 * //   },
 * //   creationDateTime: "STRING_VALUE",
 * //   lastModifiedDateTime: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   waveID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ArchiveApplicationCommandInput - {@link ArchiveApplicationCommandInput}
 * @returns {@link ArchiveApplicationCommandOutput}
 * @see {@link ArchiveApplicationCommandInput} for command's `input` shape.
 * @see {@link ArchiveApplicationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class ArchiveApplicationCommand extends $Command<
  ArchiveApplicationCommandInput,
  ArchiveApplicationCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: ArchiveApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ArchiveApplicationCommandInput, ArchiveApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ArchiveApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ArchiveApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ApplicationFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "ArchiveApplication",
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
  private serialize(input: ArchiveApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ArchiveApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ArchiveApplicationCommandOutput> {
    return de_ArchiveApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
