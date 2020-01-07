import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DeleteWorkerBlockRequest, DeleteWorkerBlockResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWorkerBlockCommandInput = DeleteWorkerBlockRequest;
export declare type DeleteWorkerBlockCommandOutput = DeleteWorkerBlockResponse & __MetadataBearer;
export declare class DeleteWorkerBlockCommand extends $Command<DeleteWorkerBlockCommandInput, DeleteWorkerBlockCommandOutput, MTurkClientResolvedConfig> {
    readonly input: DeleteWorkerBlockCommandInput;
    constructor(input: DeleteWorkerBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkerBlockCommandInput, DeleteWorkerBlockCommandOutput>;
    private serialize;
    private deserialize;
}
