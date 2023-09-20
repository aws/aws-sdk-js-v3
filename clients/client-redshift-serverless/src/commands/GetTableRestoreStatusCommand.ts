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

import { GetTableRestoreStatusRequest, GetTableRestoreStatusResponse } from "../models/models_0";
import { de_GetTableRestoreStatusCommand, se_GetTableRestoreStatusCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTableRestoreStatusCommand}.
 */
export interface GetTableRestoreStatusCommandInput extends GetTableRestoreStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetTableRestoreStatusCommand}.
 */
export interface GetTableRestoreStatusCommandOutput extends GetTableRestoreStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a <code>TableRestoreStatus</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetTableRestoreStatusCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetTableRestoreStatusCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetTableRestoreStatusRequest
 *   tableRestoreRequestId: "STRING_VALUE", // required
 * };
 * const command = new GetTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTableRestoreStatusResponse
 * //   tableRestoreStatus: { // TableRestoreStatus
 * //     tableRestoreRequestId: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //     requestTime: new Date("TIMESTAMP"),
 * //     namespaceName: "STRING_VALUE",
 * //     workgroupName: "STRING_VALUE",
 * //     snapshotName: "STRING_VALUE",
 * //     progressInMegaBytes: Number("long"),
 * //     totalDataInMegaBytes: Number("long"),
 * //     sourceDatabaseName: "STRING_VALUE",
 * //     sourceSchemaName: "STRING_VALUE",
 * //     sourceTableName: "STRING_VALUE",
 * //     targetDatabaseName: "STRING_VALUE",
 * //     targetSchemaName: "STRING_VALUE",
 * //     newTableName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableRestoreStatusCommandInput - {@link GetTableRestoreStatusCommandInput}
 * @returns {@link GetTableRestoreStatusCommandOutput}
 * @see {@link GetTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link GetTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 */
export class GetTableRestoreStatusCommand extends $Command<
  GetTableRestoreStatusCommandInput,
  GetTableRestoreStatusCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: GetTableRestoreStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTableRestoreStatusCommandInput, GetTableRestoreStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTableRestoreStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "GetTableRestoreStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "GetTableRestoreStatus",
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
  private serialize(input: GetTableRestoreStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTableRestoreStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTableRestoreStatusCommandOutput> {
    return de_GetTableRestoreStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
