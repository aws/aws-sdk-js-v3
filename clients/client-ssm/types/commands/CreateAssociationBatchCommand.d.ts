import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateAssociationBatchRequest, CreateAssociationBatchResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAssociationBatchCommandInput = CreateAssociationBatchRequest;
export declare type CreateAssociationBatchCommandOutput = CreateAssociationBatchResult & __MetadataBearer;
export declare class CreateAssociationBatchCommand extends $Command<CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateAssociationBatchCommandInput;
    constructor(input: CreateAssociationBatchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput>;
    private serialize;
    private deserialize;
}
