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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StartQueryExecutionInput, StartQueryExecutionOutput } from "../models/models_0";
import { de_StartQueryExecutionCommand, se_StartQueryExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartQueryExecutionCommand}.
 */
export interface StartQueryExecutionCommandInput extends StartQueryExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartQueryExecutionCommand}.
 */
export interface StartQueryExecutionCommandOutput extends StartQueryExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to
 *             have access to the workgroup in which the query ran. Running queries against an external
 *             catalog requires <a>GetDataCatalog</a> permission to the catalog. For code
 *             samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // StartQueryExecutionInput
 *   QueryString: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   QueryExecutionContext: { // QueryExecutionContext
 *     Database: "STRING_VALUE",
 *     Catalog: "STRING_VALUE",
 *   },
 *   ResultConfiguration: { // ResultConfiguration
 *     OutputLocation: "STRING_VALUE",
 *     EncryptionConfiguration: { // EncryptionConfiguration
 *       EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 *       KmsKey: "STRING_VALUE",
 *     },
 *     ExpectedBucketOwner: "STRING_VALUE",
 *     AclConfiguration: { // AclConfiguration
 *       S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 *     },
 *   },
 *   WorkGroup: "STRING_VALUE",
 *   ExecutionParameters: [ // ExecutionParameters
 *     "STRING_VALUE",
 *   ],
 *   ResultReuseConfiguration: { // ResultReuseConfiguration
 *     ResultReuseByAgeConfiguration: { // ResultReuseByAgeConfiguration
 *       Enabled: true || false, // required
 *       MaxAgeInMinutes: Number("int"),
 *     },
 *   },
 * };
 * const command = new StartQueryExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryExecutionOutput
 * //   QueryExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartQueryExecutionCommandInput - {@link StartQueryExecutionCommandInput}
 * @returns {@link StartQueryExecutionCommandOutput}
 * @see {@link StartQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StartQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class StartQueryExecutionCommand extends $Command<
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: StartQueryExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartQueryExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "StartQueryExecutionCommand";
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
  private serialize(input: StartQueryExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartQueryExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartQueryExecutionCommandOutput> {
    return de_StartQueryExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
