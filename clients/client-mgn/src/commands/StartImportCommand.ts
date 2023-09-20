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
import { StartImportRequest, StartImportResponse } from "../models/models_0";
import { de_StartImportCommand, se_StartImportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartImportCommand}.
 */
export interface StartImportCommandInput extends StartImportRequest {}
/**
 * @public
 *
 * The output of {@link StartImportCommand}.
 */
export interface StartImportCommandOutput extends StartImportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Start import.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartImportCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartImportCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // StartImportRequest
 *   clientToken: "STRING_VALUE",
 *   s3BucketSource: { // S3BucketSource
 *     s3Bucket: "STRING_VALUE", // required
 *     s3Key: "STRING_VALUE", // required
 *     s3BucketOwner: "STRING_VALUE",
 *   },
 * };
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * // { // StartImportResponse
 * //   importTask: { // ImportTask
 * //     importID: "STRING_VALUE",
 * //     s3BucketSource: { // S3BucketSource
 * //       s3Bucket: "STRING_VALUE", // required
 * //       s3Key: "STRING_VALUE", // required
 * //       s3BucketOwner: "STRING_VALUE",
 * //     },
 * //     creationDateTime: "STRING_VALUE",
 * //     endDateTime: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     progressPercentage: Number("float"),
 * //     summary: { // ImportTaskSummary
 * //       waves: { // ImportTaskSummaryWaves
 * //         createdCount: Number("long"),
 * //         modifiedCount: Number("long"),
 * //       },
 * //       applications: { // ImportTaskSummaryApplications
 * //         createdCount: Number("long"),
 * //         modifiedCount: Number("long"),
 * //       },
 * //       servers: { // ImportTaskSummaryServers
 * //         createdCount: Number("long"),
 * //         modifiedCount: Number("long"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartImportCommandInput - {@link StartImportCommandInput}
 * @returns {@link StartImportCommandOutput}
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class StartImportCommand extends $Command<
  StartImportCommandInput,
  StartImportCommandOutput,
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
  constructor(readonly input: StartImportCommandInput) {
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
  ): Handler<StartImportCommandInput, StartImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartImportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "StartImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "StartImport",
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
  private serialize(input: StartImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartImportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartImportCommandOutput> {
    return de_StartImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
