import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSourceCredentialsInput, ListSourceCredentialsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSourceCredentialsCommandInput = ListSourceCredentialsInput;
export declare type ListSourceCredentialsCommandOutput = ListSourceCredentialsOutput & __MetadataBearer;
export declare class ListSourceCredentialsCommand extends $Command<ListSourceCredentialsCommandInput, ListSourceCredentialsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListSourceCredentialsCommandInput;
    constructor(input: ListSourceCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSourceCredentialsCommandInput, ListSourceCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
