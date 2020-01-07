import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateOpsItemRequest, CreateOpsItemResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateOpsItemCommandInput = CreateOpsItemRequest;
export declare type CreateOpsItemCommandOutput = CreateOpsItemResponse & __MetadataBearer;
export declare class CreateOpsItemCommand extends $Command<CreateOpsItemCommandInput, CreateOpsItemCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateOpsItemCommandInput;
    constructor(input: CreateOpsItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOpsItemCommandInput, CreateOpsItemCommandOutput>;
    private serialize;
    private deserialize;
}
