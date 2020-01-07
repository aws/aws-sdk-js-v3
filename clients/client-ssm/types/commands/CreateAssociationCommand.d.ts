import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateAssociationRequest, CreateAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAssociationCommandInput = CreateAssociationRequest;
export declare type CreateAssociationCommandOutput = CreateAssociationResult & __MetadataBearer;
export declare class CreateAssociationCommand extends $Command<CreateAssociationCommandInput, CreateAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateAssociationCommandInput;
    constructor(input: CreateAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssociationCommandInput, CreateAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
