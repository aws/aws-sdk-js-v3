import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartMLLabelingSetGenerationTaskRunRequest, StartMLLabelingSetGenerationTaskRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartMLLabelingSetGenerationTaskRunCommandInput = StartMLLabelingSetGenerationTaskRunRequest;
export declare type StartMLLabelingSetGenerationTaskRunCommandOutput = StartMLLabelingSetGenerationTaskRunResponse & __MetadataBearer;
export declare class StartMLLabelingSetGenerationTaskRunCommand extends $Command<StartMLLabelingSetGenerationTaskRunCommandInput, StartMLLabelingSetGenerationTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartMLLabelingSetGenerationTaskRunCommandInput;
    constructor(input: StartMLLabelingSetGenerationTaskRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMLLabelingSetGenerationTaskRunCommandInput, StartMLLabelingSetGenerationTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
