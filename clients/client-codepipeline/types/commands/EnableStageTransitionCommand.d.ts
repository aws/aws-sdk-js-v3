import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { EnableStageTransitionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableStageTransitionCommandInput = EnableStageTransitionInput;
export declare type EnableStageTransitionCommandOutput = __MetadataBearer;
export declare class EnableStageTransitionCommand extends $Command<EnableStageTransitionCommandInput, EnableStageTransitionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: EnableStageTransitionCommandInput;
    constructor(input: EnableStageTransitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableStageTransitionCommandInput, EnableStageTransitionCommandOutput>;
    private serialize;
    private deserialize;
}
