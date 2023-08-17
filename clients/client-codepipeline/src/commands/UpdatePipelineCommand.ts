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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { UpdatePipelineInput, UpdatePipelineOutput } from "../models/models_0";
import { de_UpdatePipelineCommand, se_UpdatePipelineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandInput extends UpdatePipelineInput {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandOutput extends UpdatePipelineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a specified pipeline with edits or changes to its structure. Use a JSON
 *             file with the pipeline structure and <code>UpdatePipeline</code> to provide the full
 *             structure of the pipeline. Updating the pipeline increases the version number of the
 *             pipeline by 1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdatePipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdatePipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // UpdatePipelineInput
 *   pipeline: { // PipelineDeclaration
 *     name: "STRING_VALUE", // required
 *     roleArn: "STRING_VALUE", // required
 *     artifactStore: { // ArtifactStore
 *       type: "S3", // required
 *       location: "STRING_VALUE", // required
 *       encryptionKey: { // EncryptionKey
 *         id: "STRING_VALUE", // required
 *         type: "KMS", // required
 *       },
 *     },
 *     artifactStores: { // ArtifactStoreMap
 *       "<keys>": {
 *         type: "S3", // required
 *         location: "STRING_VALUE", // required
 *         encryptionKey: {
 *           id: "STRING_VALUE", // required
 *           type: "KMS", // required
 *         },
 *       },
 *     },
 *     stages: [ // PipelineStageDeclarationList // required
 *       { // StageDeclaration
 *         name: "STRING_VALUE", // required
 *         blockers: [ // StageBlockerDeclarationList
 *           { // BlockerDeclaration
 *             name: "STRING_VALUE", // required
 *             type: "Schedule", // required
 *           },
 *         ],
 *         actions: [ // StageActionDeclarationList // required
 *           { // ActionDeclaration
 *             name: "STRING_VALUE", // required
 *             actionTypeId: { // ActionTypeId
 *               category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 *               owner: "AWS" || "ThirdParty" || "Custom", // required
 *               provider: "STRING_VALUE", // required
 *               version: "STRING_VALUE", // required
 *             },
 *             runOrder: Number("int"),
 *             configuration: { // ActionConfigurationMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *             outputArtifacts: [ // OutputArtifactList
 *               { // OutputArtifact
 *                 name: "STRING_VALUE", // required
 *               },
 *             ],
 *             inputArtifacts: [ // InputArtifactList
 *               { // InputArtifact
 *                 name: "STRING_VALUE", // required
 *               },
 *             ],
 *             roleArn: "STRING_VALUE",
 *             region: "STRING_VALUE",
 *             namespace: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     version: Number("int"),
 *   },
 * };
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineOutput
 * //   pipeline: { // PipelineDeclaration
 * //     name: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     artifactStore: { // ArtifactStore
 * //       type: "S3", // required
 * //       location: "STRING_VALUE", // required
 * //       encryptionKey: { // EncryptionKey
 * //         id: "STRING_VALUE", // required
 * //         type: "KMS", // required
 * //       },
 * //     },
 * //     artifactStores: { // ArtifactStoreMap
 * //       "<keys>": {
 * //         type: "S3", // required
 * //         location: "STRING_VALUE", // required
 * //         encryptionKey: {
 * //           id: "STRING_VALUE", // required
 * //           type: "KMS", // required
 * //         },
 * //       },
 * //     },
 * //     stages: [ // PipelineStageDeclarationList // required
 * //       { // StageDeclaration
 * //         name: "STRING_VALUE", // required
 * //         blockers: [ // StageBlockerDeclarationList
 * //           { // BlockerDeclaration
 * //             name: "STRING_VALUE", // required
 * //             type: "Schedule", // required
 * //           },
 * //         ],
 * //         actions: [ // StageActionDeclarationList // required
 * //           { // ActionDeclaration
 * //             name: "STRING_VALUE", // required
 * //             actionTypeId: { // ActionTypeId
 * //               category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 * //               owner: "AWS" || "ThirdParty" || "Custom", // required
 * //               provider: "STRING_VALUE", // required
 * //               version: "STRING_VALUE", // required
 * //             },
 * //             runOrder: Number("int"),
 * //             configuration: { // ActionConfigurationMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             outputArtifacts: [ // OutputArtifactList
 * //               { // OutputArtifact
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             inputArtifacts: [ // InputArtifactList
 * //               { // InputArtifact
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             roleArn: "STRING_VALUE",
 * //             region: "STRING_VALUE",
 * //             namespace: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePipelineCommandInput - {@link UpdatePipelineCommandInput}
 * @returns {@link UpdatePipelineCommandOutput}
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidActionDeclarationException} (client fault)
 *  <p>The action declaration was specified in an invalid format.</p>
 *
 * @throws {@link InvalidBlockerDeclarationException} (client fault)
 *  <p>Reserved for future use.</p>
 *
 * @throws {@link InvalidStageDeclarationException} (client fault)
 *  <p>The stage declaration was specified in an invalid format.</p>
 *
 * @throws {@link InvalidStructureException} (client fault)
 *  <p>The structure was specified in an invalid format.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class UpdatePipelineCommand extends $Command<
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: UpdatePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePipelineCommandInput, UpdatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "UpdatePipelineCommand";
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
  private serialize(input: UpdatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipelineCommandOutput> {
    return de_UpdatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
