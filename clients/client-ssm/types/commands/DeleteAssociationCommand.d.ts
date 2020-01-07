import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteAssociationRequest, DeleteAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAssociationCommandInput = DeleteAssociationRequest;
export declare type DeleteAssociationCommandOutput = DeleteAssociationResult & __MetadataBearer;
export declare class DeleteAssociationCommand extends $Command<DeleteAssociationCommandInput, DeleteAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteAssociationCommandInput;
    constructor(input: DeleteAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssociationCommandInput, DeleteAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
