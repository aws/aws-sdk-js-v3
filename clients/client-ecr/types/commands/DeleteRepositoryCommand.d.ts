import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRepositoryRequest, DeleteRepositoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRepositoryCommandInput = DeleteRepositoryRequest;
export declare type DeleteRepositoryCommandOutput = DeleteRepositoryResponse & __MetadataBearer;
export declare class DeleteRepositoryCommand extends $Command<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput, ECRClientResolvedConfig> {
    readonly input: DeleteRepositoryCommandInput;
    constructor(input: DeleteRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
