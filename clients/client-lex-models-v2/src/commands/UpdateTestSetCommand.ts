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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateTestSetRequest, UpdateTestSetResponse } from "../models/models_1";
import { de_UpdateTestSetCommand, se_UpdateTestSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTestSetCommand}.
 */
export interface UpdateTestSetCommandInput extends UpdateTestSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestSetCommand}.
 */
export interface UpdateTestSetCommandOutput extends UpdateTestSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>The action to update the test set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateTestSetCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateTestSetCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateTestSetRequest
 *   testSetId: "STRING_VALUE", // required
 *   testSetName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateTestSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTestSetResponse
 * //   testSetId: "STRING_VALUE",
 * //   testSetName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   modality: "Text" || "Audio",
 * //   status: "Importing" || "PendingAnnotation" || "Deleting" || "ValidationError" || "Ready",
 * //   roleArn: "STRING_VALUE",
 * //   numTurns: Number("int"),
 * //   storageLocation: { // TestSetStorageLocation
 * //     s3BucketName: "STRING_VALUE", // required
 * //     s3Path: "STRING_VALUE", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateTestSetCommandInput - {@link UpdateTestSetCommandInput}
 * @returns {@link UpdateTestSetCommandOutput}
 * @see {@link UpdateTestSetCommandInput} for command's `input` shape.
 * @see {@link UpdateTestSetCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class UpdateTestSetCommand extends $Command<
  UpdateTestSetCommandInput,
  UpdateTestSetCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
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
  constructor(readonly input: UpdateTestSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTestSetCommandInput, UpdateTestSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTestSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "UpdateTestSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "UpdateTestSet",
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
  private serialize(input: UpdateTestSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTestSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTestSetCommandOutput> {
    return de_UpdateTestSetCommand(output, context);
  }
}
