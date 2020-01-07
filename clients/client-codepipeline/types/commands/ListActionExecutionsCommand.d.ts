import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListActionExecutionsInput, ListActionExecutionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListActionExecutionsCommandInput = ListActionExecutionsInput;
export declare type ListActionExecutionsCommandOutput = ListActionExecutionsOutput & __MetadataBearer;
export declare class ListActionExecutionsCommand extends $Command<ListActionExecutionsCommandInput, ListActionExecutionsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListActionExecutionsCommandInput;
    constructor(input: ListActionExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActionExecutionsCommandInput, ListActionExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
