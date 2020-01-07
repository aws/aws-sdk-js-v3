import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListRepositoriesInput, ListRepositoriesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRepositoriesCommandInput = ListRepositoriesInput;
export declare type ListRepositoriesCommandOutput = ListRepositoriesOutput & __MetadataBearer;
export declare class ListRepositoriesCommand extends $Command<ListRepositoriesCommandInput, ListRepositoriesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListRepositoriesCommandInput;
    constructor(input: ListRepositoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRepositoriesCommandInput, ListRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
