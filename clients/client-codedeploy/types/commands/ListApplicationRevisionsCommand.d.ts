import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListApplicationRevisionsInput, ListApplicationRevisionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListApplicationRevisionsCommandInput = ListApplicationRevisionsInput;
export declare type ListApplicationRevisionsCommandOutput = ListApplicationRevisionsOutput & __MetadataBearer;
export declare class ListApplicationRevisionsCommand extends $Command<ListApplicationRevisionsCommandInput, ListApplicationRevisionsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListApplicationRevisionsCommandInput;
    constructor(input: ListApplicationRevisionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationRevisionsCommandInput, ListApplicationRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
