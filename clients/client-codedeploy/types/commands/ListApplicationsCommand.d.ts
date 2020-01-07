import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListApplicationsInput, ListApplicationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListApplicationsCommandInput = ListApplicationsInput;
export declare type ListApplicationsCommandOutput = ListApplicationsOutput & __MetadataBearer;
export declare class ListApplicationsCommand extends $Command<ListApplicationsCommandInput, ListApplicationsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListApplicationsCommandInput;
    constructor(input: ListApplicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationsCommandInput, ListApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
