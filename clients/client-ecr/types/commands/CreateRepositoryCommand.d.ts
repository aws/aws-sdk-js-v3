import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { CreateRepositoryRequest, CreateRepositoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRepositoryCommandInput = CreateRepositoryRequest;
export declare type CreateRepositoryCommandOutput = CreateRepositoryResponse & __MetadataBearer;
export declare class CreateRepositoryCommand extends $Command<CreateRepositoryCommandInput, CreateRepositoryCommandOutput, ECRClientResolvedConfig> {
    readonly input: CreateRepositoryCommandInput;
    constructor(input: CreateRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRepositoryCommandInput, CreateRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
