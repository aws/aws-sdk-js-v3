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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { StartExportRequest, StartExportResponse } from "../models/models_0";
import { de_StartExportCommand, se_StartExportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartExportCommand}.
 */
export interface StartExportCommandInput extends StartExportRequest {}
/**
 * @public
 *
 * The output of {@link StartExportCommand}.
 */
export interface StartExportCommandOutput extends StartExportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Start export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartExportCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartExportCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // StartExportRequest
 *   s3Bucket: "STRING_VALUE", // required
 *   s3Key: "STRING_VALUE", // required
 *   s3BucketOwner: "STRING_VALUE",
 * };
 * const command = new StartExportCommand(input);
 * const response = await client.send(command);
 * // { // StartExportResponse
 * //   exportTask: { // ExportTask
 * //     exportID: "STRING_VALUE",
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Key: "STRING_VALUE",
 * //     s3BucketOwner: "STRING_VALUE",
 * //     creationDateTime: "STRING_VALUE",
 * //     endDateTime: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     progressPercentage: Number("float"),
 * //     summary: { // ExportTaskSummary
 * //       serversCount: Number("long"),
 * //       applicationsCount: Number("long"),
 * //       wavesCount: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartExportCommandInput - {@link StartExportCommandInput}
 * @returns {@link StartExportCommandOutput}
 * @see {@link StartExportCommandInput} for command's `input` shape.
 * @see {@link StartExportCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
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
export class StartExportCommand extends $Command<
  StartExportCommandInput,
  StartExportCommandOutput,
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
  constructor(readonly input: StartExportCommandInput) {
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
  ): Handler<StartExportCommandInput, StartExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartExportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "StartExportCommand";
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
  private serialize(input: StartExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExportCommandOutput> {
    return de_StartExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
