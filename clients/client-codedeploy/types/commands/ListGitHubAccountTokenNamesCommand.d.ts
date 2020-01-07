import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListGitHubAccountTokenNamesInput, ListGitHubAccountTokenNamesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGitHubAccountTokenNamesCommandInput = ListGitHubAccountTokenNamesInput;
export declare type ListGitHubAccountTokenNamesCommandOutput = ListGitHubAccountTokenNamesOutput & __MetadataBearer;
export declare class ListGitHubAccountTokenNamesCommand extends $Command<ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListGitHubAccountTokenNamesCommandInput;
    constructor(input: ListGitHubAccountTokenNamesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput>;
    private serialize;
    private deserialize;
}
