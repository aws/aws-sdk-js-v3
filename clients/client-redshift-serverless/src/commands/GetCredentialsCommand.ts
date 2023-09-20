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

import {
  GetCredentialsRequest,
  GetCredentialsResponse,
  GetCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetCredentialsCommand, se_GetCredentialsCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link GetCredentialsCommand}.
 */
export interface GetCredentialsCommandInput extends GetCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetCredentialsCommand}.
 */
export interface GetCredentialsCommandOutput extends GetCredentialsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a database user name and temporary password with
 *          temporary authorization to log in to Amazon Redshift Serverless.</p>
 *          <p>By default, the temporary credentials expire in 900 seconds.
 *          You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p>
 *
 *          <p>The Identity and Access Management (IAM) user or role that runs
 *       GetCredentials must have an IAM policy attached that allows access to all
 *       necessary actions and resources.</p>
 *
 *          <p>If the <code>DbName</code> parameter is specified, the IAM policy must
 *       allow access to the resource dbname for the specified database name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetCredentialsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetCredentialsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetCredentialsRequest
 *   workgroupName: "STRING_VALUE", // required
 *   dbName: "STRING_VALUE",
 *   durationSeconds: Number("int"),
 * };
 * const command = new GetCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetCredentialsResponse
 * //   dbUser: "STRING_VALUE",
 * //   dbPassword: "STRING_VALUE",
 * //   expiration: new Date("TIMESTAMP"),
 * //   nextRefreshTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCredentialsCommandInput - {@link GetCredentialsCommandInput}
 * @returns {@link GetCredentialsCommandOutput}
 * @see {@link GetCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
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
export class GetCredentialsCommand extends $Command<
  GetCredentialsCommandInput,
  GetCredentialsCommandOutput,
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
  constructor(readonly input: GetCredentialsCommandInput) {
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
  ): Handler<GetCredentialsCommandInput, GetCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "GetCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetCredentialsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "GetCredentials",
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
  private serialize(input: GetCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCredentialsCommandOutput> {
    return de_GetCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
