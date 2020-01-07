import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateWorkerBlockRequest, CreateWorkerBlockResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWorkerBlockCommandInput = CreateWorkerBlockRequest;
export declare type CreateWorkerBlockCommandOutput = CreateWorkerBlockResponse & __MetadataBearer;
export declare class CreateWorkerBlockCommand extends $Command<CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateWorkerBlockCommandInput;
    constructor(input: CreateWorkerBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput>;
    private serialize;
    private deserialize;
}
