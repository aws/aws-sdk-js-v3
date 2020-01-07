import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { CreateContainerInput, CreateContainerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateContainerCommandInput = CreateContainerInput;
export declare type CreateContainerCommandOutput = CreateContainerOutput & __MetadataBearer;
export declare class CreateContainerCommand extends $Command<CreateContainerCommandInput, CreateContainerCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: CreateContainerCommandInput;
    constructor(input: CreateContainerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContainerCommandInput, CreateContainerCommandOutput>;
    private serialize;
    private deserialize;
}
