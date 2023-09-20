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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetImportRequest, GetImportResponse } from "../models/models_0";
import { de_GetImportCommand, se_GetImportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImportCommand}.
 */
export interface GetImportCommandInput extends GetImportRequest {}
/**
 * @public
 *
 * The output of {@link GetImportCommand}.
 */
export interface GetImportCommandOutput extends GetImportResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns information about a specific import. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetImportCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetImportCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // GetImportRequest
 *   ImportId: "STRING_VALUE", // required
 * };
 * const command = new GetImportCommand(input);
 * const response = await client.send(command);
 * // { // GetImportResponse
 * //   ImportId: "STRING_VALUE",
 * //   Destinations: [ // ImportDestinations
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportSource: { // ImportSource
 * //     S3: { // S3ImportSource
 * //       S3LocationUri: "STRING_VALUE", // required
 * //       S3BucketRegion: "STRING_VALUE", // required
 * //       S3BucketAccessRoleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   StartEventTime: new Date("TIMESTAMP"),
 * //   EndEventTime: new Date("TIMESTAMP"),
 * //   ImportStatus: "INITIALIZING" || "IN_PROGRESS" || "FAILED" || "STOPPED" || "COMPLETED",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   ImportStatistics: { // ImportStatistics
 * //     PrefixesFound: Number("long"),
 * //     PrefixesCompleted: Number("long"),
 * //     FilesCompleted: Number("long"),
 * //     EventsCompleted: Number("long"),
 * //     FailedEntries: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetImportCommandInput - {@link GetImportCommandInput}
 * @returns {@link GetImportCommandOutput}
 * @see {@link GetImportCommandInput} for command's `input` shape.
 * @see {@link GetImportCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ImportNotFoundException} (client fault)
 *  <p> The specified import was not found. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class GetImportCommand extends $Command<
  GetImportCommandInput,
  GetImportCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: GetImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImportCommandInput, GetImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetImportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "GetImport",
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
  private serialize(input: GetImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImportCommandOutput> {
    return de_GetImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
