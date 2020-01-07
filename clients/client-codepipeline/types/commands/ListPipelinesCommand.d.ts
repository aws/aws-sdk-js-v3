import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListPipelinesInput, ListPipelinesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPipelinesCommandInput = ListPipelinesInput;
export declare type ListPipelinesCommandOutput = ListPipelinesOutput & __MetadataBearer;
export declare class ListPipelinesCommand extends $Command<ListPipelinesCommandInput, ListPipelinesCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListPipelinesCommandInput;
    constructor(input: ListPipelinesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPipelinesCommandInput, ListPipelinesCommandOutput>;
    private serialize;
    private deserialize;
}
