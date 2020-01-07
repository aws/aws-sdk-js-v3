import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateComputerRequest, CreateComputerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateComputerCommandInput = CreateComputerRequest;
export declare type CreateComputerCommandOutput = CreateComputerResult & __MetadataBearer;
export declare class CreateComputerCommand extends $Command<CreateComputerCommandInput, CreateComputerCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateComputerCommandInput;
    constructor(input: CreateComputerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateComputerCommandInput, CreateComputerCommandOutput>;
    private serialize;
    private deserialize;
}
