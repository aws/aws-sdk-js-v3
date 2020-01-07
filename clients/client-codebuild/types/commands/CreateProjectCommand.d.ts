import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { CreateProjectInput, CreateProjectOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProjectCommandInput = CreateProjectInput;
export declare type CreateProjectCommandOutput = CreateProjectOutput & __MetadataBearer;
export declare class CreateProjectCommand extends $Command<CreateProjectCommandInput, CreateProjectCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: CreateProjectCommandInput;
    constructor(input: CreateProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProjectCommandInput, CreateProjectCommandOutput>;
    private serialize;
    private deserialize;
}
