import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteSourceCredentialsInput, DeleteSourceCredentialsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSourceCredentialsCommandInput = DeleteSourceCredentialsInput;
export declare type DeleteSourceCredentialsCommandOutput = DeleteSourceCredentialsOutput & __MetadataBearer;
export declare class DeleteSourceCredentialsCommand extends $Command<DeleteSourceCredentialsCommandInput, DeleteSourceCredentialsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteSourceCredentialsCommandInput;
    constructor(input: DeleteSourceCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSourceCredentialsCommandInput, DeleteSourceCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
