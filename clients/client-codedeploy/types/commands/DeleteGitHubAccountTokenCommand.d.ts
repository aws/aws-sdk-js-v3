import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteGitHubAccountTokenInput, DeleteGitHubAccountTokenOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGitHubAccountTokenCommandInput = DeleteGitHubAccountTokenInput;
export declare type DeleteGitHubAccountTokenCommandOutput = DeleteGitHubAccountTokenOutput & __MetadataBearer;
export declare class DeleteGitHubAccountTokenCommand extends $Command<DeleteGitHubAccountTokenCommandInput, DeleteGitHubAccountTokenCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeleteGitHubAccountTokenCommandInput;
    constructor(input: DeleteGitHubAccountTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGitHubAccountTokenCommandInput, DeleteGitHubAccountTokenCommandOutput>;
    private serialize;
    private deserialize;
}
