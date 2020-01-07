import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListWebhooksInput, ListWebhooksOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWebhooksCommandInput = ListWebhooksInput;
export declare type ListWebhooksCommandOutput = ListWebhooksOutput & __MetadataBearer;
export declare class ListWebhooksCommand extends $Command<ListWebhooksCommandInput, ListWebhooksCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListWebhooksCommandInput;
    constructor(input: ListWebhooksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWebhooksCommandInput, ListWebhooksCommandOutput>;
    private serialize;
    private deserialize;
}
