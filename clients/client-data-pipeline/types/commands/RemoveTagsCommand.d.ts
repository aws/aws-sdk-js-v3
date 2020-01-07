import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { RemoveTagsInput, RemoveTagsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsCommandInput = RemoveTagsInput;
export declare type RemoveTagsCommandOutput = RemoveTagsOutput & __MetadataBearer;
export declare class RemoveTagsCommand extends $Command<RemoveTagsCommandInput, RemoveTagsCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: RemoveTagsCommandInput;
    constructor(input: RemoveTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsCommandInput, RemoveTagsCommandOutput>;
    private serialize;
    private deserialize;
}
