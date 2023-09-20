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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateScriptInput, CreateScriptOutput } from "../models/models_0";
import { de_CreateScriptCommand, se_CreateScriptCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateScriptCommand}.
 */
export interface CreateScriptCommandInput extends CreateScriptInput {}
/**
 * @public
 *
 * The output of {@link CreateScriptCommand}.
 */
export interface CreateScriptCommandOutput extends CreateScriptOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that
 *             provide configuration settings and optional custom game logic for your game. The script
 *             is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is
 *             executed during an active game session. </p>
 *          <p>To create a new script record, specify a script name and provide the script file(s).
 *             The script files and all dependencies must be zipped into a single file. You can pull
 *             the zip file from either of these locations: </p>
 *          <ul>
 *             <li>
 *                <p>A locally available directory. Use the <i>ZipFile</i> parameter
 *                     for this option.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the
 *                         <i>StorageLocation</i> parameter for this option. You'll need
 *                     to have an Identity Access Management (IAM) role that allows the Amazon GameLift service
 *                     to access your S3 bucket. </p>
 *             </li>
 *          </ul>
 *          <p>If the call is successful, a new script record is created with a unique script ID. If
 *             the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3
 *             bucket and the script record's storage location reflects this location. If the script
 *             file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as
 *             needed for deployment.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateScriptInput
 *   Name: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 *   StorageLocation: { // S3Location
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     ObjectVersion: "STRING_VALUE",
 *   },
 *   ZipFile: "BLOB_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateScriptCommand(input);
 * const response = await client.send(command);
 * // { // CreateScriptOutput
 * //   Script: { // Script
 * //     ScriptId: "STRING_VALUE",
 * //     ScriptArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     SizeOnDisk: Number("long"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     StorageLocation: { // S3Location
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ObjectVersion: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateScriptCommandInput - {@link CreateScriptCommandInput}
 * @returns {@link CreateScriptCommandOutput}
 * @see {@link CreateScriptCommandInput} for command's `input` shape.
 * @see {@link CreateScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class CreateScriptCommand extends $Command<
  CreateScriptCommandInput,
  CreateScriptCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: CreateScriptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateScriptCommandInput, CreateScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateScriptCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "CreateScript",
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
  private serialize(input: CreateScriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateScriptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScriptCommandOutput> {
    return de_CreateScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
