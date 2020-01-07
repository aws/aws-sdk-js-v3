import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteContainerInput, DeleteContainerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteContainerCommandInput = DeleteContainerInput;
export declare type DeleteContainerCommandOutput = DeleteContainerOutput & __MetadataBearer;
export declare class DeleteContainerCommand extends $Command<DeleteContainerCommandInput, DeleteContainerCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DeleteContainerCommandInput;
    constructor(input: DeleteContainerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContainerCommandInput, DeleteContainerCommandOutput>;
    private serialize;
    private deserialize;
}
