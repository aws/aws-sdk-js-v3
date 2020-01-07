import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ImportSourceCredentialsInput, ImportSourceCredentialsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportSourceCredentialsCommandInput = ImportSourceCredentialsInput;
export declare type ImportSourceCredentialsCommandOutput = ImportSourceCredentialsOutput & __MetadataBearer;
export declare class ImportSourceCredentialsCommand extends $Command<ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ImportSourceCredentialsCommandInput;
    constructor(input: ImportSourceCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
