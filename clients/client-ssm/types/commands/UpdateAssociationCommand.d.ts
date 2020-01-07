import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateAssociationRequest, UpdateAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAssociationCommandInput = UpdateAssociationRequest;
export declare type UpdateAssociationCommandOutput = UpdateAssociationResult & __MetadataBearer;
export declare class UpdateAssociationCommand extends $Command<UpdateAssociationCommandInput, UpdateAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateAssociationCommandInput;
    constructor(input: UpdateAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssociationCommandInput, UpdateAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
