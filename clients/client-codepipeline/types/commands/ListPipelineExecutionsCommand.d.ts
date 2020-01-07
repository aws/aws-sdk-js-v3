import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListPipelineExecutionsInput, ListPipelineExecutionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPipelineExecutionsCommandInput = ListPipelineExecutionsInput;
export declare type ListPipelineExecutionsCommandOutput = ListPipelineExecutionsOutput & __MetadataBearer;
export declare class ListPipelineExecutionsCommand extends $Command<ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListPipelineExecutionsCommandInput;
    constructor(input: ListPipelineExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
